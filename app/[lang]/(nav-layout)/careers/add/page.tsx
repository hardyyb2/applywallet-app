import Link from "next/link";

import { Breadcrumbs } from "app/components/ui/isolated/wrapped";
import { AppRoutes } from "app/utils/routes.utils";

import { AddCareerForm } from "./components/AddCareerForm";

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
      <AddCareerForm />
    </div>
  );
};

export default AddCareer;
