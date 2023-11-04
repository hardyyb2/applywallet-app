import { NextResponse, type NextRequest } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { createI18nMiddleware } from "next-international/middleware";

import { envVars } from "@/utils/env";
import { i18n, type Locale } from "@/utils/locale-utils";
import { ApiRoutes } from "@/utils/routes";

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
  const { pathname } = request.nextUrl;

  if (pathname.startsWith(ApiRoutes.API)) {
    const response = NextResponse.next();

    //* shared routes should allow chrome extension requests to pass through
    if (request.nextUrl.pathname.startsWith(ApiRoutes.SHARED)) {
      response.headers.append(
        "Access-Control-Allow-Origin",
        `chrome-extension://${envVars.CHROME_EXTENSION_ID}`,
      );
      response.headers.append("Access-Control-Allow-Methods", "GET, OPTIONS");
    }

    return response;
  }

  return I18nMiddleware(request);
}

export const config = {
  // Matcher ignoring these paths for middleware
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images).*)"],
};
