import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/isolated/wrapped";
import { AppRoutes } from "@/utils/routes.utils";

import { AddCareerForm } from "./components/AddCareerForm";

const AddCareer = () => {
  return (
    <div className="m-4 mt-0 prose prose-ul:pl-0 prose-ul:m-0">
      <Breadcrumbs className="pt-0 mb-2 [&_a]:no-underline">
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
