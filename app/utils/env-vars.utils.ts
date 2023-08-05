import { z } from "zod";

const envVarsObj = z.object({
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  NODE_ENV: z.string(),
});

export const envVariables = envVarsObj.parse(process.env);
