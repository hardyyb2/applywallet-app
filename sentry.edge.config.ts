import * as Sentry from "@sentry/nextjs";

import { env } from "~/utils/env";

Sentry.init({
  dsn: env.SENTRY_EDGE_DSN,
  tracesSampleRate: env.NEXT_PUBLIC_NODE_ENV === "production" ? 1 : 0,
  debug: env.NEXT_PUBLIC_NODE_ENV === "development",
  enabled: env.NEXT_PUBLIC_NODE_ENV === "production",
});
