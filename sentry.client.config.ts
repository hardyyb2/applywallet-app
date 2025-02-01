import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://3f61abf4d77bb0cfbe6a2aef0a8cae07@o4506184356003840.ingest.us.sentry.io/4506184358035456",
  tracesSampleRate: 1,
  debug: false,
  enabled: process.env.NODE_ENV === "production",
});
