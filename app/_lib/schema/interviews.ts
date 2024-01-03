import { z } from "zod";

enum InterviewStatus {
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  PENDING = "pending",
  CANCELLED = "cancelled",
}

enum InterviewResult {
  NO_OFFER = "no_offer",
  OFFER_ACCEPTED = "offer_accepted",
  OFFER_DECLINED = "offer_declined",
  HIRED = "hired",
  NOT_SELECTED = "not_selected",
  POSITION_FILLED = "position_filled",
  OFFER_EXPIRED = "offer_expired",
  POSITION_CLOSED = "position_closed",
  WITHDRAWN_BY_CANDIDATE = "withdrawn_by_candidate",
  WITHDRAWN_BY_EMPLOYER = "withdrawn_by_employer",
}

const roundSchema = z.object({
  name: z.string().min(1, {
    message: "please enter a round name",
  }),
  type: z.string().optional(),
  date: z
    .string({
      required_error: "please enter a date",
    })
    .datetime({
      message: "please enter a valid date",
    }),
  result: z
    .string({
      required_error: "please enter a result",
    })
    .optional(),
});

const interviewSchema = z.object({
  id: z.union([z.string(), z.number()]),
  company_name: z.string().min(1, {
    message: "please enter company name",
  }),
  position: z.string().min(1, {
    message: "please enter position",
  }),
  result: z.nativeEnum(InterviewResult).optional(),
  rounds: z.array(roundSchema),
  notes: z.array(z.record(z.any())).optional(),
  status: z.nativeEnum(InterviewStatus, {
    required_error: "please select a status",
  }),

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
const interviewInputSchema = interviewSchema.omit({ id: true });

type InterviewRoundType = z.infer<typeof roundSchema>;
type InterviewType = z.infer<typeof interviewSchema>;
type InterviewInputType = z.infer<typeof interviewInputSchema>;

export {
  type InterviewRoundType,
  type InterviewType,
  type InterviewInputType,
  InterviewStatus,
  InterviewResult,
  interviewSchema,
  interviewInputSchema,
};
