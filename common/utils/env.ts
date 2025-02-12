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
    NODE_ENV: z.enum(["development", "production", "test"]),
    NEXT_RUNTIME: z.enum(["nodejs", "edge"]),
    SENTRY_EDGE_DSN: z.string().url(),
    SENTRY_SERVER_DSN: z.string().url(),
    SENTRY_AUTH_TOKEN: z.string().min(1),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_GA_APP_ID: z.string().min(1),
    NEXT_PUBLIC_CHROME_EXTENSION_ID: z.string().min(1),
    NEXT_PUBLIC_NODE_ENV: z.enum(["development", "production", "test"]),
    NEXT_PUBLIC_SITE_URL: z.string().url(),
    NEXT_PUBLIC_SENTRY_CLIENT_DSN: z.string().url(),
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
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,
    SENTRY_EDGE_DSN: process.env.SENTRY_EDGE_DSN,
    SENTRY_SERVER_DSN: process.env.SENTRY_SERVER_DSN,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    // Client
    NEXT_PUBLIC_GA_APP_ID: process.env.NEXT_PUBLIC_GA_APP_ID,
    NEXT_PUBLIC_CHROME_EXTENSION_ID:
      process.env.NEXT_PUBLIC_CHROME_EXTENSION_ID,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_SENTRY_CLIENT_DSN: process.env.NEXT_PUBLIC_SENTRY_CLIENT_DSN,
  },
});
