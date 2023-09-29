import { InterviewType } from "./schema-utils";

export const QueryKeys = {
  INTERVIEWS: "interviews",
  interview: (interviewId: InterviewType["id"]) => `interview-${interviewId}`,
} as const;
