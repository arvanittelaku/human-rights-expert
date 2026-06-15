import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { resolveSlugRedirect } from "@/lib/seo/slug-redirects";

const PRIMARY_HOST = "www.humanrightsexperts.com";
const PRIMARY_ORIGIN = `https://${PRIMARY_HOST}`;

const REDIRECT_HOSTS = new Set(["humanrightsexperts.com"]);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";

  if (REDIRECT_HOSTS.has(host)) {
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, PRIMARY_ORIGIN);
    return NextResponse.redirect(url, 301);
  }

  const pathname = request.nextUrl.pathname.replace(/\/$/, "") || "/";
  const redirectPath = resolveSlugRedirect(pathname);
  if (redirectPath) {
    const url = new URL(redirectPath + request.nextUrl.search, request.url);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
