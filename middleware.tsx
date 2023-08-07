import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { i18n } from "@/utils/locale-utils";

const getNegotiatorHeaders = (request: NextRequest): Record<string, string> => {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => (headers[key] = value));
  return headers;
};

const getLocale = (request: NextRequest): string | undefined => {
  const negotiatorHeaders = getNegotiatorHeaders(request);

  /**  Use negotiator and intl-localematcher to get best locale */
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const locales: string[] = i18n.locales.slice();
  return matchLocale(languages, locales, i18n.defaultLocale);
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  /**  Ignore public files manually
   *  `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually. */
  if (pathname.startsWith("/images")) {
    return;
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url),
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
