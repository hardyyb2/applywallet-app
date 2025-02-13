import * as Sentry from "@sentry/nextjs";

import { env } from "~/utils/env";

Sentry.init({
  dsn: env.NEXT_PUBLIC_SENTRY_CLIENT_DSN,
  debug: env.NEXT_PUBLIC_NODE_ENV === "development",
  enabled: env.NEXT_PUBLIC_NODE_ENV === "production",
});
