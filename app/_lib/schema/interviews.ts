import { z } from "zod";

import { zodDDMMYYYYDate } from "@/utils/zod";

const roundSchema = z.object({
  name: z.string().min(1, {
    message: "please enter a round name",
  }),
  type: z.string().optional(),
  date: z.date(),
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
  result: z.string().optional(),
  rounds: z.record(roundSchema),

  start_date: z.union([z.date(), zodDDMMYYYYDate]),
  end_date: z.union([z.date(), zodDDMMYYYYDate]).optional(),
});

/** does not include id */
export const interviewInputSchema = interviewSchema.omit({ id: true });

export type InterviewType = z.infer<typeof interviewSchema>;
export type InterviewInputType = z.infer<typeof interviewInputSchema>;
