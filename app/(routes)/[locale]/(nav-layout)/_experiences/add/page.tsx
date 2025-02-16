import Link from "next/link";

import { Breadcrumbs } from "~/components/ds/Breadcrumbs";
import { AppRoutes } from "~/utils/routes";

import { IconLink } from "@/components/dependent/IconLink";
import { getI18n } from "@/locales/server";

import { AddEditExperienceForm } from "../AddEditExperienceForm";

const AddExperience = async () => {
  const t = await getI18n();

  return (
    <div className="m-xs mt-0">
      <Breadcrumbs className="mb-2xs pt-0 [&_a]:no-underline">
        <Breadcrumbs.Item>
          <IconLink href={AppRoutes.EXPERIENCES} translate={t} />
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
