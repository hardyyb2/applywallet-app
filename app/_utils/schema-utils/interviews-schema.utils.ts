import { z } from "zod";

export const interviewSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string().min(1, {
    message: "please enter name",
  }),
});

/** does not include id */
export const interviewInputSchema = interviewSchema.omit({ id: true });

export type InterviewType = z.infer<typeof interviewSchema>;
export type InterviewInputType = z.infer<typeof interviewInputSchema>;
