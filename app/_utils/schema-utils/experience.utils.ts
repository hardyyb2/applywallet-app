import { z } from "zod";

export const experienceSchema = z.object({
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
export const experienceInputSchema = experienceSchema.omit({ id: true });

export type ExperienceType = z.infer<typeof experienceSchema>;
export type ExperienceInputType = z.infer<typeof experienceInputSchema>;
