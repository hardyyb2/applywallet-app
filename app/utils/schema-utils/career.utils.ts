import { z } from "zod";

export const careerSchema = z.object({
  id: z.union([z.string(), z.number()]),
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

/** does not include id */
export const careerInputSchema = careerSchema.omit({ id: true });

export type CareerType = z.infer<typeof careerSchema>;
export type CareerInputType = z.infer<typeof careerInputSchema>;
