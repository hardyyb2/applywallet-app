import * as Sentry from "@sentry/nextjs";

const isDev = process.env.NODE_ENV === "development";

Sentry.init({
  dsn: "https://3f61abf4d77bb0cfbe6a2aef0a8cae07@o4506184356003840.ingest.sentry.io/4506184358035456",
  tracesSampleRate: isDev ? 1 : 0.2,
});
