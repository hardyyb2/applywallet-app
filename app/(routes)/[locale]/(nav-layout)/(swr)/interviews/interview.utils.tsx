import type { ReactNode } from "react";

import dayjs from "dayjs";

import { Emoji } from "~/components/ds/Emoji";
import { Icons } from "~/components/ds/Icons";

import {
  InterviewResult,
  InterviewRoundResult,
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
  type: "",
  ...props,
});

type InterviewStatusOptionType = {
  label: string;
  value: InterviewStatus;
  icon: ReactNode;
};

export const interviewStatusOptionsMap: Record<
  InterviewStatus,
  InterviewStatusOptionType
> = {
  [InterviewStatus.PENDING]: {
    label: "pending",
    value: InterviewStatus.PENDING,
    icon: <Icons.PauseCircle className="w-4 fill-warning lg:w-6" />,
  },
  [InterviewStatus.CANCELLED]: {
    label: "cancelled",
    value: InterviewStatus.CANCELLED,
    icon: <Icons.MinusCircle className="w-4 fill-error lg:w-6" />,
  },
  [InterviewStatus.COMPLETED]: {
    label: "completed",
    value: InterviewStatus.COMPLETED,
    icon: <Icons.CheckCircle2 className="w-4 fill-info lg:w-6" />,
  },
  [InterviewStatus.IN_PROGRESS]: {
    label: "in progress",
    value: InterviewStatus.IN_PROGRESS,
    icon: <Icons.Circle className="w-4 fill-success lg:w-6" />,
  },
};

export const interviewStatusOptions: InterviewStatusOptionType[] =
  Object.values(interviewStatusOptionsMap);

type InterviewResultOptionType = {
  label: string;
  value: InterviewResult;
  icon: ReactNode;
};

export const interviewResultOptionsMap: Record<
  InterviewResult,
  InterviewResultOptionType
> = {
  [InterviewResult.NO_OFFER]: {
    value: InterviewResult.NO_OFFER,
    label: "no offer",
    icon: <Emoji symbol="🥲" label="cry smile face" />,
  },
  [InterviewResult.HIRED]: {
    value: InterviewResult.HIRED,
    label: "hired",
    icon: <Emoji symbol="🥳" label="party face" />,
  },
  [InterviewResult.NOT_SELECTED]: {
    value: InterviewResult.NOT_SELECTED,
    label: "not selected",
    icon: <Emoji symbol="😢" label="crying face" />,
  },
  [InterviewResult.OFFER_ACCEPTED]: {
    value: InterviewResult.OFFER_ACCEPTED,
    label: "offer accepted",
    icon: <Emoji symbol="🤝" label="handshake" />,
  },
  [InterviewResult.OFFER_DECLINED]: {
    value: InterviewResult.OFFER_DECLINED,
    label: "offer declined",
    icon: <Emoji symbol="🙅‍♀️" label="decline" />,
  },
  [InterviewResult.OFFER_EXPIRED]: {
    value: InterviewResult.OFFER_EXPIRED,
    label: "offer expired",
    icon: <Emoji symbol="🎬" label="clapper board" />,
  },
  [InterviewResult.WITHDRAWN_BY_CANDIDATE]: {
    value: InterviewResult.WITHDRAWN_BY_CANDIDATE,
    label: "withdrawn by candidate",
    icon: <Emoji symbol="🚶" label="walking away" />,
  },
  [InterviewResult.WITHDRAWN_BY_EMPLOYER]: {
    value: InterviewResult.WITHDRAWN_BY_EMPLOYER,
    label: "withdrawn by employer",
    icon: <Emoji symbol="💼" label="briefcase" />,
  },
  [InterviewResult.POSITION_CLOSED]: {
    value: InterviewResult.POSITION_CLOSED,
    label: "position closed",
    icon: <Emoji symbol="🔒" label="locked" />,
  },
  [InterviewResult.POSITION_FILLED]: {
    value: InterviewResult.POSITION_FILLED,
    label: "position filled",
    icon: <Emoji symbol="👨‍💼" label="person at desk" />,
  },
};

export const interviewResultOptions: InterviewResultOptionType[] =
  Object.values(interviewResultOptionsMap);

type InterviewRoundResultOptionType = {
  label: string;
  value: InterviewRoundResult;
  icon: ReactNode;
};

export const interviewRoundResultOptionsMap: Record<
  InterviewRoundResult,
  InterviewRoundResultOptionType
> = {
  [InterviewRoundResult.CANCELLED]: {
    value: InterviewRoundResult.CANCELLED,
    label: "cancelled",
    icon: <Emoji symbol="🚫" label="no entry" />,
  },
  [InterviewRoundResult.FAILED]: {
    value: InterviewRoundResult.FAILED,
    label: "failed",
    icon: <Emoji symbol="😢" label="crying face" />,
  },
  [InterviewRoundResult.PASSED]: {
    value: InterviewRoundResult.PASSED,
    label: "passed",
    icon: <Emoji symbol="🥳" label="party face" />,
  },
  [InterviewRoundResult.PENDING]: {
    value: InterviewRoundResult.PENDING,
    label: "pending",
    icon: <Emoji symbol="🕒" label="clock" />,
  },
  [InterviewRoundResult.SKIPPED]: {
    value: InterviewRoundResult.SKIPPED,
    label: "skipped",
    icon: <Emoji symbol="🏃" label="running" />,
  },
  [InterviewRoundResult.RESCHEDULED]: {
    value: InterviewRoundResult.RESCHEDULED,
    label: "rescheduled",
    icon: <Emoji symbol="📅" label="calendar" />,
  },
  [InterviewRoundResult.IN_PROGRESS]: {
    value: InterviewRoundResult.IN_PROGRESS,
    label: "in progress",
    icon: <Emoji symbol="🚀" label="rocket" />,
  },
};

export const interviewRoundResultOptions: InterviewRoundResultOptionType[] =
  Object.values(interviewRoundResultOptionsMap);
