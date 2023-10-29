import Link from "next/link";

import { IconLink } from "@/components/dependent/IconLink";
import { Breadcrumbs } from "@/components/isolated/Breadcrumbs";
import { AppRoutes } from "@/utils/routes";

import { AddEditInterviewForm } from "../AddEditInterviewForm";

const AddInterview = () => {
  return (
    <div className="m-xs mt-0">
      <Breadcrumbs className="mb-2xs pt-0 [&_a]:no-underline">
        <Breadcrumbs.Item>
          <IconLink href={AppRoutes.INTERVIEWS} />
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Link href={AppRoutes.ADD_INTERVIEW}>add</Link>
        </Breadcrumbs.Item>
      </Breadcrumbs>
      <AddEditInterviewForm />
    </div>
  );
};

export default AddInterview;
