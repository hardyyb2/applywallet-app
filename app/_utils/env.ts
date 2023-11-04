import { z } from "zod";

import { logger } from "@/lib/logs";

const getEnv = () => {
  const isBrowser =
    typeof window !== "undefined" && typeof window.document !== "undefined";

  const isNode =
    typeof process !== "undefined" &&
    process.versions != null &&
    process.versions.node != null;

  return { isBrowser, isNode };
};

const envVarsSchema = z.object({
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  NODE_ENV: z.enum(["development", "production"]),
  API_URL: z.string(),
  ANALYZE: z.coerce.boolean().optional(),
  PLASMO_PUBLIC_API_URL: z.string(),
  CHROME_EXTENSION_ID: z.string(),
});

type EnvVarsType = z.infer<typeof envVarsSchema>;

const currEnv = getEnv();
let envVars: EnvVarsType;

if (currEnv.isBrowser) {
  const errorMessage =
    "cannot use 'envVars' in browser, please use 'process.env' instead";

  logger.error(errorMessage);
  throw new Error(errorMessage);
}

envVars = envVarsSchema.parse(process.env);

export { envVars };
