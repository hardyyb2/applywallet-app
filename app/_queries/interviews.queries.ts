import axios from "axios";
import useSWR, { Key } from "swr";
import useSWRMutation from "swr/mutation";

import { QueryKeys } from "@/utils/queries.utils";
import { ApiRoutes } from "@/utils/routes.utils";
import { InterviewInputType, InterviewType } from "@/utils/schema-utils";

const fetchInterviews = async () => {
  return axios.get(ApiRoutes.GET_INTERVIEWS).then((res) => {
    // TODO - zod-type this response and also error
    if (res.data?.success) {
      return res.data.data;
    }

    throw new Error();
  });
};

const useInterviews = () => {
  return useSWR(QueryKeys.INTERVIEWS, fetchInterviews);
};

const fetchInterview = async (interviewId: InterviewType["id"]) => {
  return axios.get(ApiRoutes.getInterview(interviewId)).then((res) => {
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
  return axios.post(ApiRoutes.ADD_INTERVIEW, data.arg);
};

const useAddInterview = () => {
  // TODO - replace this any
  return useSWRMutation<any, any, Key, InterviewInputType>(
    QueryKeys.INTERVIEWS,
    addInterview,
  );
};

const updateInterview = async (_key: string, data: { arg: InterviewType }) => {
  return axios.put(ApiRoutes.editInterview(data.arg.id), data.arg);
};

const useUpdateInterview = () => {
  // TODO - replace this any
  return useSWRMutation<any, any, Key, InterviewType>(
    QueryKeys.INTERVIEWS,
    updateInterview,
  );
};

export { useInterviews, useInterview, useAddInterview, useUpdateInterview };
