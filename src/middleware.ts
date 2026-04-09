import { NextRequest, NextResponse } from "next/server";

import { defaultLocale, localeRequestHeader, normalizeLocale, supportedLocales } from "@/src/i18n";

const localePrefixPattern = new RegExp(`^\/(${supportedLocales.join("|")})(?:\/|$)`);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  const matchedLocale = pathname.match(localePrefixPattern)?.[1];

  if (!matchedLocale) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(localeRequestHeader, defaultLocale);

    return NextResponse.rewrite(rewriteUrl, {
      request: {
        headers: requestHeaders,
      },
    });
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