"use client";

import Link from "next/link";

import { ConditionalMatch } from "@dx-kit/react-conditional-match";

import { IconLink } from "@/components/dependent/IconLink";
import { BarLoader } from "@/components/isolated/BarLoader";
import { Breadcrumbs } from "@/components/isolated/Breadcrumbs";
import { useInterview } from "@/queries/interviews.queries";
import { AppRoutes, UrlParams } from "@/utils/routes";

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

  if (!data) {
    throw new Error("No data");
  }

  return (
    <div className="m-xs mt-0">
      <Breadcrumbs className="mb-2xs pt-0 [&_a]:no-underline">
        <Breadcrumbs.Item>
          <IconLink href={AppRoutes.INTERVIEWS} />
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>edit</Breadcrumbs.Item>
      </Breadcrumbs>
      <ConditionalMatch fallback={<BarLoader />}>
        <ConditionalMatch.Render when={!isLoading}>
          <AddEditInterviewForm type="edit" interview={data} />
        </ConditionalMatch.Render>
      </ConditionalMatch>
    </div>
  );
};

export default EditInterview;
