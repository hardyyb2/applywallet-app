import Link from "next/link";

import { IconLink } from "@/components/ui/dependent";
import { Breadcrumbs } from "@/components/ui/isolated/wrapped";
import { AppRoutes } from "@/utils/routes.utils";

import { AddEditExperienceForm } from "../components/AddEditExperienceForm";

const AddExperience = () => {
  return (
    <div className="m-xs mt-0">
      <Breadcrumbs className="mb-2xs pt-0 [&_a]:no-underline">
        <Breadcrumbs.Item>
          <IconLink href={AppRoutes.EXPERIENCES} />
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Link href={AppRoutes.ADD_EXPERIENCE}>add</Link>
        </Breadcrumbs.Item>
      </Breadcrumbs>
      <AddEditExperienceForm />
    </div>
  );
};

export default AddExperience;
