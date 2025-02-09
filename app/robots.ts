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
      {
        // block AI bots
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "cohere-ai",
          "FacebookBot",
          "ClaudeBot",
        ],
        disallow: ["/"],
      },
    ],
    sitemap: `${getAppBaseURL()}/sitemap.xml`,
    host: getAppBaseURL(),
  };
}
