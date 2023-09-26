import { z } from "zod";

export const interviewSchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string().min(1, {
    message: "please enter company name",
  }),
});

export type InterviewType = z.infer<typeof interviewSchema>;
