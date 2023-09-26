import axios from "axios";
import useSWR, { Key } from "swr";
import useSWRMutation from "swr/mutation";

import { QueryKeys } from "@/utils/queries.utils";
import { ApiRoutes } from "@/utils/routes.utils";
import { InterviewInputType } from "@/utils/schema-utils";

const fetchInterviews = async () => {
  return axios.get(ApiRoutes.GET_INTERVIEWS).then((res) => {
    // TODO - zod-type this response and also error
    if (res.data?.success) {
      return res.data.data;
    }

    throw new Error();
  });
};

export const useInterviews = () => {
  return useSWR(QueryKeys.INTERVIEWS, fetchInterviews);
};

const addInterview = async (
  _key: string,
  data: { arg: InterviewInputType },
) => {
  return axios.post(ApiRoutes.ADD_INTERVIEW, data.arg);
};

export const useAddInterview = () => {
  // TODO - replace this any
  return useSWRMutation<any, any, Key, InterviewInputType>(
    QueryKeys.INTERVIEWS,
    addInterview,
  );
};
