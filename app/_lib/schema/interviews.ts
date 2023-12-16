import { z } from "zod";

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

  start_date: z
    .string()
    .refine(
      (dateString) =>
        /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/((19|20|21)\d\d)$/.test(
          dateString,
        ),
      {
        message: "please enter a valid date in the format dd/mm/yyyy",
      },
    )
    .transform((dateString, ctx) => {
      const date = new Date(dateString);
      if (!z.date().safeParse(date).success) {
        ctx.addIssue({
          code: z.ZodIssueCode.invalid_date,
          message: "please enter a valid date",
        });
      }
      return date;
    }),

  end_date: z
    .string()
    .optional()
    .refine(
      (dateString) => {
        if (!dateString) {
          return true;
        }
        return /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/((19|20|21)\d\d)$/.test(
          dateString,
        );
      },
      {
        message: "please enter a valid date in the format dd/mm/yyyy",
      },
    )
    .transform((dateString, ctx) => {
      if (!dateString) {
        return;
      }

      const date = new Date(dateString);
      if (!z.date().safeParse(date).success) {
        ctx.addIssue({
          code: z.ZodIssueCode.invalid_date,
          message: "please enter a valid date",
        });
      }
      return date;
    }),
});

/** does not include id */
export const interviewInputSchema = interviewSchema.omit({ id: true });

export type InterviewType = z.infer<typeof interviewSchema>;
export type InterviewInputType = z.infer<typeof interviewInputSchema>;
