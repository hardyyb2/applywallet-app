import Link from "next/link";

import { Breadcrumbs } from "app/components/ui/isolated/wrapped";
import { AppRoutes } from "app/utils/routes.utils";

import { AddCareerForm } from "./components/AddCareerForm";

const AddCareer = () => {
  return (
    <div className="prose m-4 mt-0 prose-ul:m-0 prose-ul:pl-0">
      <Breadcrumbs className="mb-2 pt-0 [&_a]:no-underline">
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

// eslint-disable-next-line import/no-default-export
export default AddCareer;
