import { z } from "zod";

const envVarsObj = z.object({
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  NODE_ENV: z.enum(["development", "production"]),
  API_URL: z.string(),
  ANALYZE: z.coerce.boolean().optional(),
  PLASMO_PUBLIC_API_URL: z.string(),
  CHROME_EXTENSION_ID: z.string(),
});

export const envVars = envVarsObj.parse(process.env);
