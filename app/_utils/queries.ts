import type { InterviewType } from "@/lib/schema/interviews";

export const QueryKeys = {
  INTERVIEWS: "interviews",
  interview: (interviewId: InterviewType["id"]) => `interview-${interviewId}`,
} as const;
