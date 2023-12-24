import Link from "next/link";

import { AppRoutes } from "~/utils/routes";

import { IconLink } from "@/components/dependent/IconLink";
import { Breadcrumbs } from "@/components/isolated/Breadcrumbs";

import { AddEditExperienceForm } from "../AddEditExperienceForm";

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
