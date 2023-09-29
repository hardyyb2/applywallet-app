import Link from "next/link";

import { AppRoutes } from "@/_utils/routes.utils";

import { Breadcrumbs } from "@/components/ui/isolated/wrapped";

import { AddEditInterviewForm } from "../components/AddEditInterviewForm";

const AddInterview = () => {
  return (
    <div className="m-xs mt-0">
      <Breadcrumbs className="mb-2xs pt-0 [&_a]:no-underline">
        <Breadcrumbs.Item>
          <Link href={AppRoutes.INTERVIEWS}>interviews</Link>
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
