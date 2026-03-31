import { NextRequest, NextResponse } from "next/server";

import { defaultLocale, localeRequestHeader, normalizeLocale } from "@/src/i18n";

const localePrefixPattern = /^\/(en|es)(?:\/|$)/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  const matchedLocale = pathname.match(localePrefixPattern)?.[1];

  if (!matchedLocale) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `${request.nextUrl.pathname === "/" ? "" : request.nextUrl.pathname}`;
    redirectUrl.pathname = `/${defaultLocale}${redirectUrl.pathname}`;
    return NextResponse.redirect(redirectUrl);
  }

  const locale = normalizeLocale(matchedLocale);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(localeRequestHeader, locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};