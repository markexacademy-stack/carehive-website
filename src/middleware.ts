import { NextResponse, type NextRequest } from "next/server";
import { verifyAdminToken } from "@/lib/admin-auth";

export const runtime = "nodejs";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/admin/leads")) {
    return NextResponse.next();
  }

  const token = request.cookies.get("carehive_admin")?.value;
  if (!verifyAdminToken(token)) {
    const login = new URL("/admin", request.url);
    login.searchParams.set("from", pathname);
    return NextResponse.redirect(login);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/leads/:path*"],
};
