"use client";

import Link from "next/link";

import { ConditionalMatch } from "@dx-kit/react-conditional-match";

import { IconLink } from "@/components/dependent";
import { Breadcrumbs } from "@/components/isolated";
import { useInterview } from "@/queries/interviews.queries";
import { AppRoutes, UrlParams } from "@/utils/routes.utils";

import { AddEditInterviewForm } from "../../AddEditInterviewForm";

type EditInterviewProps = {
  params: Record<string, string>;
};

const EditInterview = ({ params }: EditInterviewProps) => {
  const interviewId = params[UrlParams.INTERVIEW_ID];

  // TODO - get type here
  const { data, isLoading, error } = useInterview(interviewId);

  if (error) {
    throw new Error();
  }

  return (
    <div className="m-xs mt-0">
      <Breadcrumbs className="mb-2xs pt-0 [&_a]:no-underline">
        <Breadcrumbs.Item>
          <IconLink href={AppRoutes.INTERVIEWS} />
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>edit</Breadcrumbs.Item>
      </Breadcrumbs>
      <ConditionalMatch fallback="loading....">
        <ConditionalMatch.Render when={!isLoading}>
          <AddEditInterviewForm type="edit" interview={data} />
        </ConditionalMatch.Render>
      </ConditionalMatch>
    </div>
  );
};

export default EditInterview;
