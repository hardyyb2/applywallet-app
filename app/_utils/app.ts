import { env } from "~/utils/env";

/**
 * Returns the base URL of the app based on the environment
 */
export const getAppBaseURL = () => {
  if (env.NODE_ENV === "development" || env.NODE_ENV === "test") {
    return "http://localhost:3000";
  }

  return env.SITE_URL;
};
