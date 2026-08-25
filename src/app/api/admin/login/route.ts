import { NextResponse } from "next/server";
import { setAdminCookie, verifyPassword } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { password?: string }
    | null;
  const password = body?.password || "";
  if (!verifyPassword(password)) {
    return NextResponse.json({ error: "Invalid password." }, { status: 401 });
  }
  await setAdminCookie();
  return NextResponse.json({ ok: true });
}
