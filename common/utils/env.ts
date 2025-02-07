// src/env.mjs
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /*
   * Server-side Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    NEXTAUTH_SECRET: z.string().min(1),
    DATABASE_URL: z.string().url(),
    API_URL: z.string().url(),
    SENTRY_LOGS: z.string().optional(),
    SENTRY_DSN: z.string().optional(),
    SENTRY_ORG: z.string().optional(),
    SENTRY_PROJECT: z.string().optional(),
    SENTRY_AUTH_TOKEN: z.string().optional(),
    NODE_ENV: z.enum(["development", "production", "test"]),
    SITE_URL: z.string().url(),
    NEXT_RUNTIME: z.enum(["nodejs", "edge"]),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_GA_APP_ID: z.string().min(1),
    NEXT_PUBLIC_PROJECT_URL: z.string().url(),
    NEXT_PUBLIC_PLASMO_API_URL: z.string().url(),
    NEXT_PUBLIC_CHROME_EXTENSION_ID: z.string().min(1),
    NEXT_PUBLIC_NODE_ENV: z.enum(["development", "production", "test"]),
    NEXT_PUBLIC_SITE_URL: z.string().url(),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    API_URL: process.env.API_URL,
    SENTRY_LOGS: process.env.SENTRY_LOGS,
    SENTRY_DSN: process.env.SENTRY_DSN,
    SENTRY_ORG: process.env.SENTRY_ORG,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    SITE_URL: process.env.SITE_URL,
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,
    // Client
    NEXT_PUBLIC_GA_APP_ID: process.env.NEXT_PUBLIC_GA_APP_ID,
    NEXT_PUBLIC_PROJECT_URL: process.env.PROJECT_URL,
    NEXT_PUBLIC_PLASMO_API_URL: process.env.PLASMO_PUBLIC_API_URL,
    NEXT_PUBLIC_CHROME_EXTENSION_ID: process.env.CHROME_EXTENSION_ID,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SITE_URL: process.env.SITE_URL,
  },
});
