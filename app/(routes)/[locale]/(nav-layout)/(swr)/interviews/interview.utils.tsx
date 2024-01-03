import type { ReactNode } from "react";

import dayjs from "dayjs";

import { Icons } from "~/components/ds/Icons";

import {
  InterviewResult,
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
  icon: ReactNode;
}[] = [
  {
    label: "pending",
    value: InterviewStatus.PENDING,
    icon: <Icons.PauseCircle className="w-4 fill-warning lg:w-6" />,
  },
  {
    label: "cancelled",
    value: InterviewStatus.CANCELLED,
    icon: <Icons.MinusCircle className="w-4 fill-error lg:w-6" />,
  },
  {
    label: "completed",
    value: InterviewStatus.COMPLETED,
    icon: <Icons.CheckCircle2 className="w-4 fill-info lg:w-6" />,
  },
  {
    label: "in progress",
    value: InterviewStatus.IN_PROGRESS,
    icon: <Icons.Circle className="w-4 fill-success lg:w-6" />,
  },
];

export const interviewResultOptions: {
  label: string;
  value: InterviewResult;
}[] = [
  {
    value: InterviewResult.NO_OFFER,
    label: "no offer",
  },
  {
    value: InterviewResult.HIRED,
    label: "hired",
  },
  {
    value: InterviewResult.NOT_SELECTED,
    label: "not selected",
  },
  {
    value: InterviewResult.OFFER_ACCEPTED,
    label: "offer accepted",
  },
  {
    value: InterviewResult.OFFER_DECLINED,
    label: "offer declined",
  },
  {
    value: InterviewResult.OFFER_EXPIRED,
    label: "offer expired",
  },
  {
    value: InterviewResult.WITHDRAWN_BY_CANDIDATE,
    label: "withdrawn by candidate",
  },
  {
    value: InterviewResult.WITHDRAWN_BY_EMPLOYER,
    label: "withdrawn by employer",
  },
  {
    value: InterviewResult.POSITION_CLOSED,
    label: "position closed",
  },
  {
    value: InterviewResult.POSITION_FILLED,
    label: "position filled",
  },
];
