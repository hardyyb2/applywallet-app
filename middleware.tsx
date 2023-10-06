import type { NextRequest } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { createI18nMiddleware } from "next-international/middleware";

import { i18n, Locale } from "@/utils/locale-utils";

const getNegotiatorHeaders = (request: NextRequest): Record<string, string> => {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => (headers[key] = value));
  return headers;
};

const getLocale = (request: NextRequest): Locale => {
  const negotiatorHeaders = getNegotiatorHeaders(request);

  /**  Use negotiator and intl-localematcher to get best locale */
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const locales = i18n.locales.slice();
  return matchLocale(languages, locales, i18n.defaultLocale) as Locale;
};

const I18nMiddleware = createI18nMiddleware({
  ...i18n,
  resolveLocaleFromRequest(request) {
    return getLocale(request);
  },
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  // Matcher ignoring these paths for middleware
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
