import { z } from "zod";

const roundSchema = z.object({
  name: z.string().min(1, {
    message: "please enter a round name",
  }),
  type: z.string().optional(),
  date: z.date().default(new Date()),
  result: z.string().optional(),
  notes: z.string().optional(),
});

export const interviewSchema = z.object({
  id: z.union([z.string(), z.number()]),
  company_name: z.string().min(1, {
    message: "please enter company name",
  }),
  position: z.string().min(1, {
    message: "please enter position",
  }),
  start_date: z.date().default(new Date()),
  end_date: z.date().default(new Date()).optional(),
  result: z.string().optional(),
  rounds: z.record(roundSchema),
});

/** does not include id */
export const interviewInputSchema = interviewSchema.omit({ id: true });

export type InterviewType = z.infer<typeof interviewSchema>;
export type InterviewInputType = z.infer<typeof interviewInputSchema>;
