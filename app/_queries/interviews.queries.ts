import useSWR, { type Key } from "swr";
import useSWRMutation from "swr/mutation";
import { z } from "zod";

import { appApi } from "@/lib/appApi";
import {
  interviewSchema,
  type InterviewInputType,
  type InterviewType,
} from "@/lib/schema/interviews";
import { QueryKeys } from "@/utils/queries";
import { ApiRoutes } from "@/utils/routes";

const fetchInterviews = async () => {
  return appApi
    .get(ApiRoutes.GET_INTERVIEWS, {
      schema: z.array(interviewSchema),
    })
    .then((res) => {
      return res.data.data;
    });
};

const useInterviews = () => {
  return useSWR(QueryKeys.INTERVIEWS, fetchInterviews);
};

const fetchInterview = async (interviewId: InterviewType["id"]) => {
  return appApi
    .get(ApiRoutes.getInterview(interviewId), {
      schema: interviewSchema,
    })
    .then((res) => {
      // TODO - zod-type this response and also error
      if (res.data?.success) {
        return res.data.data;
      }

      throw new Error();
    });
};

const useInterview = (interviewId: string) => {
  return useSWR(QueryKeys.interview(interviewId), () =>
    fetchInterview(interviewId),
  );
};

const addInterview = async (
  _key: string,
  data: { arg: InterviewInputType },
) => {
  return appApi.post(ApiRoutes.ADD_INTERVIEW, data.arg);
};

const useAddInterview = () => {
  // TODO - replace this any
  return useSWRMutation<any, any, Key, InterviewInputType>(
    QueryKeys.INTERVIEWS,
    addInterview,
  );
};

const updateInterview = async (_key: string, data: { arg: InterviewType }) => {
  return appApi.put(ApiRoutes.editInterview(data.arg.id), data.arg);
};

const useUpdateInterview = () => {
  // TODO - replace this any
  return useSWRMutation<any, any, Key, InterviewType>(
    QueryKeys.INTERVIEWS,
    updateInterview,
  );
};

export { useInterviews, useInterview, useAddInterview, useUpdateInterview };
