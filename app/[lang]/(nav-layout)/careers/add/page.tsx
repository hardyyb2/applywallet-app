import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/isolated/wrapped";
import { AppRoutes } from "@/utils/routes.utils";

import { AddEditCareerForm } from "../components/AddEditCareerForm";

const AddCareer = () => {
  return (
    <div className="m-xs mt-0">
      <Breadcrumbs className="mb-2xs pt-0 [&_a]:no-underline">
        <Breadcrumbs.Item>
          <Link href={AppRoutes.CAREERS}>careers</Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Link href={AppRoutes.ADD_CAREER}>add</Link>
        </Breadcrumbs.Item>
      </Breadcrumbs>
      <AddEditCareerForm />
    </div>
  );
};

export default AddCareer;
