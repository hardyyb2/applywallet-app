"use client";

import Link from "next/link";

import { ConditionalMatch } from "@dx-kit/react-conditional-match";

import { BarLoader } from "~/components/ds/BarLoader";
import { Breadcrumbs } from "~/components/ds/Breadcrumbs";
import { AppRoutes, UrlParams } from "~/utils/routes";

import { IconLink } from "@/components/dependent/IconLink";
import { useInterview } from "@/queries/interviews.queries";

import { AddEditInterviewForm } from "../../AddEditInterviewForm";

type EditInterviewProps = {
  params: Record<string, string>;
};

const EditInterview = ({ params }: EditInterviewProps) => {
  const interviewId = params[UrlParams.INTERVIEW_ID];

  const { data, isLoading, error } = useInterview(interviewId);

  if (error) {
    throw new Error();
  }

  if (isLoading) {
    return <BarLoader />;
  }

  // TODO - add something here
  if (!data) {
    return null;
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
