import { z } from "zod";

export const careerSchema = z.object({
  company_name: z.string().min(1, {
    message: "please enter company name",
  }),
  company_description: z.string().optional(),
  role_name: z.string().min(1, {
    message: "please enter your role",
  }),
  role_description: z.string().optional(),
  job_description: z.string().min(1, {
    message: "please enter company name",
  }),
});

export type CareerType = z.infer<typeof careerSchema>;
