import { NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/leads/schema";
import { createLead } from "@/lib/leads/store";
import { isRateLimited } from "@/lib/leads/rate-limit";

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

function sanitize(value?: string) {
  if (!value) return value;
  return value.replace(/[<>]/g, "").trim();
}

export async function POST(request: Request) {
  if (isRateLimited(clientKey(request))) {
    return NextResponse.json(
      { error: "Please wait a little before sending another request." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = leadFormSchema.safeParse(body);
  if (!parsed.success) {
    const message =
      parsed.error.issues[0]?.message || "Please check the form and try again.";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const data = {
    ...parsed.data,
    name: sanitize(parsed.data.name) || parsed.data.name,
    location: sanitize(parsed.data.location) || parsed.data.location,
    additionalInformation: sanitize(parsed.data.additionalInformation),
    patientAge: sanitize(parsed.data.patientAge),
  };

  const lead = await createLead(data, data.source || "website");
  return NextResponse.json({ ok: true, id: lead.id });
}
