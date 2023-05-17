import { z } from "zod";

export const careerSchema = z.object({
  company: z.object({
    name: z.string().min(1, {
      message: "please enter company name",
    }),
    description: z.string().optional(),
  }),
  role: z.object({
    name: z.string().min(1, {
      message: "please enter your role",
    }),
    description: z.string().optional(),
  }),
  job: z.object({
    description: z.string().min(1, {
      message: "please enter company name",
    }),
  }),
});

export type CareerType = z.infer<typeof careerSchema>;
