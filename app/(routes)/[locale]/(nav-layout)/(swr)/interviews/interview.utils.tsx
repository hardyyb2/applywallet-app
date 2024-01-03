import type { ReactNode } from "react";

import dayjs from "dayjs";

import { Emoji } from "~/components/ds/Emoji";
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
  icon: ReactNode;
}[] = [
  {
    value: InterviewResult.NO_OFFER,
    label: "no offer",
    icon: <Emoji symbol="👎" label="thumbs down" />,
  },
  {
    value: InterviewResult.HIRED,
    label: "hired",
    icon: <Emoji symbol="👍" label="thumbs up" />,
  },
  {
    value: InterviewResult.NOT_SELECTED,
    label: "not selected",
    icon: <Emoji symbol="👎" label="thumbs down" />,
  },
  {
    value: InterviewResult.OFFER_ACCEPTED,
    label: "offer accepted",
    icon: <Emoji symbol="👍" label="thumbs up" />,
  },
  {
    value: InterviewResult.OFFER_DECLINED,
    label: "offer declined",
    icon: <Emoji symbol="👎" label="thumbs down" />,
  },
  {
    value: InterviewResult.OFFER_EXPIRED,
    label: "offer expired",
    icon: <Emoji symbol="👎" label="thumbs down" />,
  },
  {
    value: InterviewResult.WITHDRAWN_BY_CANDIDATE,
    label: "withdrawn by candidate",
    icon: <Emoji symbol="👎" label="thumbs down" />,
  },
  {
    value: InterviewResult.WITHDRAWN_BY_EMPLOYER,
    label: "withdrawn by employer",
    icon: <Emoji symbol="👎" label="thumbs down" />,
  },
  {
    value: InterviewResult.POSITION_CLOSED,
    label: "position closed",
    icon: <Emoji symbol="👎" label="thumbs down" />,
  },
  {
    value: InterviewResult.POSITION_FILLED,
    label: "position filled",
    icon: <Emoji symbol="👎" label="thumbs down" />,
  },
];
