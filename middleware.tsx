import { NextResponse, type NextRequest } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import { captureException } from "@sentry/nextjs";
import Negotiator from "negotiator";
import { createI18nMiddleware } from "next-international/middleware";

import { env } from "~/utils/env";
import { ApiRoutes } from "~/utils/routes";

import { i18n, type Locale } from "@/utils/locale-utils";

const getNegotiatorHeaders = (request: NextRequest): Record<string, string> => {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => (headers[key] = value));
  return headers;
};

const getLocale = (request: NextRequest): Locale => {
  try {
    const negotiatorHeaders = getNegotiatorHeaders(request);
    let languages = new Negotiator({
      headers: negotiatorHeaders,
    }).languages();

    if (!languages.length || (languages.length === 1 && languages[0] === "*")) {
      languages = [i18n.defaultLocale];
    }

    const locales = i18n.locales.slice();
    return matchLocale(languages, locales, i18n.defaultLocale) as Locale;
  } catch (error) {
    captureException(error);
    return i18n.defaultLocale;
  }
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
        `chrome-extension://${env.NEXT_PUBLIC_CHROME_EXTENSION_ID}`,
      );
      response.headers.append("Access-Control-Allow-Methods", "GET, OPTIONS");
    }

    return response;
  }

  return I18nMiddleware(request);
}

export const config = {
  // Matcher ignoring these paths for middleware
  matcher: [
    "/((?!_next/static|_next/image|sitemap.xml|robots.ts|robots.txt|favicon.ico|images).*)",
  ],
};
