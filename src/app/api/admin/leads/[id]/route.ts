import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";
import { updateLead } from "@/lib/leads/store";
import { LEAD_STATUSES } from "@/lib/leads/schema";

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, context: RouteContext) {
  if (!(await getAdminSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const body = (await request.json().catch(() => null)) as
    | { status?: string; notes?: string; followUpAt?: string | null }
    | null;

  if (body?.status && !LEAD_STATUSES.includes(body.status as (typeof LEAD_STATUSES)[number])) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }

  const updated = await updateLead(id, {
    status: body?.status as (typeof LEAD_STATUSES)[number] | undefined,
    notes: body?.notes,
    followUpAt: body?.followUpAt,
  });

  if (!updated) {
    return NextResponse.json({ error: "Lead not found." }, { status: 404 });
  }

  return NextResponse.json({ ok: true, lead: updated });
}
