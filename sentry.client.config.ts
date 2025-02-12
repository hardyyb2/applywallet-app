import * as Sentry from "@sentry/nextjs";

import { env } from "~/utils/env";

Sentry.init({
  dsn: env.NEXT_PUBLIC_SENTRY_CLIENT_DSN,
  tracesSampleRate: env.NEXT_PUBLIC_NODE_ENV === "production" ? 0.5 : 0,
  debug: env.NEXT_PUBLIC_NODE_ENV === "development",
  enabled: env.NEXT_PUBLIC_NODE_ENV === "production",
});
