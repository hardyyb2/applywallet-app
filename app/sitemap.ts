import type { MetadataRoute } from "next";
import type { Languages } from "next/dist/lib/metadata/types/alternative-urls-types";

import { AppRoutes } from "~/utils/routes";

import { getAppBaseURL } from "@/utils/app";
import { i18n } from "@/utils/locale-utils";

const getAlternates = (
  path: string,
): { languages?: Languages<string> | undefined } => ({
  languages: i18n.locales.reduce((acc, locale) => {
    acc[locale] = `${getAppBaseURL()}/${locale}${path}`;
    return acc;
  }, {} as Record<string, string>),
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getAppBaseURL(),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
      alternates: getAlternates(""),
    },
    {
      url: `${getAppBaseURL()}${AppRoutes.ABOUT}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
      alternates: getAlternates(AppRoutes.ABOUT),
    },
    {
      url: `${getAppBaseURL()}${AppRoutes.BLOGS}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: getAlternates(AppRoutes.BLOGS),
    },
  ];
}
