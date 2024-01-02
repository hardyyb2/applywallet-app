import dayjs from "dayjs";

import {
  InterviewStatus,
  type InterviewRoundType,
} from "@/lib/schema/interviews";

import { type AddEditInterviewFormProps } from "./AddEditInterviewForm";

export const getAddEditInterviewFormCopy = (
  operationType: AddEditInterviewFormProps["type"],
  loading: boolean,
): {
  buttonText: string;
  titleText: string;
} => {
  let textArr = ["save", "saving", "add interview"];

  if (operationType === "edit") {
    textArr = ["update", "updating", "edit interview"];
  }

  return {
    buttonText: loading ? textArr[1] : textArr[0],
    titleText: textArr[2],
  };
};

export const getDefaultInterviewRoundObject = (
  props: Partial<InterviewRoundType> = {},
): InterviewRoundType => ({
  name: "",
  date: dayjs().toISOString(),
  result: "",
  type: "",
  ...props,
});

export const interviewStatusOptions: {
  label: string;
  value: InterviewStatus;
}[] = [
  {
    label: "pending",
    value: InterviewStatus.PENDING,
  },
  {
    label: "cancelled",
    value: InterviewStatus.CANCELLED,
  },
  {
    label: "completed",
    value: InterviewStatus.COMPLETED,
  },
  {
    label: "in progress",
    value: InterviewStatus.IN_PROGRESS,
  },
];
