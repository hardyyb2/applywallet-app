import { useMutation, useQuery, type QueryKey } from "@tanstack/react-query";
import { z } from "zod";

import { ApiRoutes } from "~/utils/routes";

import { appApi } from "@/lib/app-api";
import {
  interviewSchema,
  type InterviewInputType,
  type InterviewType,
} from "@/lib/schema/interviews";
import { QueryKeys } from "@/utils/queries";

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
  return useQuery({
    queryKey: [QueryKeys.INTERVIEWS],
    queryFn: fetchInterviews,
  });
};

const fetchInterview = async (interviewId: InterviewType["id"]) => {
  return appApi
    .get(ApiRoutes.getInterview(interviewId), {
      schema: interviewSchema,
    })
    .then((res) => {
      return res.data.data;
    });
};

const useInterview = (interviewId: string) => {
  return useQuery({
    queryKey: [QueryKeys.interview(interviewId)],
    queryFn: () => fetchInterview(interviewId),
  });
};

const addInterview = async (data: InterviewInputType) => {
  return appApi.post(ApiRoutes.ADD_INTERVIEW, data);
};

const useAddInterview = () => {
  return useMutation({
    mutationFn: addInterview,
    mutationKey: [QueryKeys.INTERVIEWS],
  });
};

const updateInterview = async (data: InterviewType) => {
  return appApi.put(ApiRoutes.editInterview(data.id), data);
};

const useUpdateInterview = () => {
  return useMutation({
    mutationFn: updateInterview,
    mutationKey: [QueryKeys.INTERVIEWS],
  });
};

export { useInterviews, useInterview, useAddInterview, useUpdateInterview };
