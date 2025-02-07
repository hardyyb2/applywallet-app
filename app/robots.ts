import type { MetadataRoute } from "next";

import { getAppBaseURL } from "@/utils/app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/_next/*", "/*.json"],
      },
    ],
    sitemap: `${getAppBaseURL()}/sitemap.xml`,
    host: getAppBaseURL(),
  };
}
