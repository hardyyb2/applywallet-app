import { z } from "zod";

const roundSchema = z.object({
  name: z.string().min(1, {
    message: "please enter a round name",
  }),
  type: z.string().optional(),
  date: z
    .string({
      required_error: "please enter an end date",
    })
    .datetime({
      message: "please enter a valid date",
    }),
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
  rounds: z.array(roundSchema),

  start_date: z
    .string({
      required_error: "please enter a start date",
    })
    .datetime({
      message: "please enter a valid date",
    }),
  end_date: z
    .string({
      required_error: "please enter an end date",
    })
    .datetime({
      message: "please enter a valid date",
    })
    .optional(),
});

/** does not include id */
export const interviewInputSchema = interviewSchema.omit({ id: true });

export type InterviewRoundType = z.infer<typeof roundSchema>;
export type InterviewType = z.infer<typeof interviewSchema>;
export type InterviewInputType = z.infer<typeof interviewInputSchema>;
