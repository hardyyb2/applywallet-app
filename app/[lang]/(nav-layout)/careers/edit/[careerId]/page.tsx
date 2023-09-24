import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { getServerSession } from "next-auth";
import { z } from "zod";

import { Breadcrumbs } from "@/components/ui/isolated/wrapped";
import { authOptions } from "@/lib/auth";
import { CustomError } from "@/utils/error";
import { AppRoutes, UrlParams } from "@/utils/routes.utils";
import {
  ExperienceInputType,
  experienceSchema,
  ExperienceType,
} from "@/utils/schema-utils";
import { SheetNames } from "@/utils/sheet.utils";

import { AddEditExperienceForm } from "../../components/AddEditExperienceForm";

const experienceIdSchema = z.coerce.number().nonnegative();

const fetchExperience = async (
  experienceId?: ExperienceType["id"],
): Promise<ExperienceType | undefined> => {
  try {
    if (!experienceId) {
      return;
    }

    const session = await getServerSession(authOptions);

    if (!session || !session?.accessToken) {
      // TODO - Create a login page
      redirect(authOptions.pages?.signIn ?? "/login");
    }

    const { primarySheetId } = session.user;

    //  TODO - link sheet page
    if (!primarySheetId) {
      redirect("/link-sheet");
    }

    const doc = new GoogleSpreadsheet(primarySheetId, {
      token: session.accessToken,
    });
    await doc.loadInfo();
    const allSheets = doc.sheetsByTitle;
    let experienceSheet = allSheets[SheetNames.EXPERIENCES];

    //  TODO - link sheet page
    if (!experienceSheet) {
      redirect("/link-sheet");
    }

    const experienceIdNum = experienceIdSchema.parse(experienceId);
    const requiredExperienceRow = (
      await experienceSheet.getRows({
        offset: experienceIdNum - 1 - 1, // extra 1 for header row
        limit: 1,
      })
    )[0];

    const experienceData = {
      ...requiredExperienceRow.toObject(),
      id: experienceId,
    };
    const experience = experienceSchema.parse(experienceData);

    return experience;
  } catch (err) {
    const message = new CustomError(err).message;

    console.log("fetchExperience error", message);
    // TODO - error response
  }
};

type EditExperienceProps = {
  params: Record<string, string>;
};

const EditExperience = async ({ params }: EditExperienceProps) => {
  const experienceId = params[UrlParams.EXPERIENCE_ID];
  const experience = await fetchExperience(experienceId);

  if (!experience) {
    notFound();
  }

  return (
    <div className="m-xs mt-0">
      <Breadcrumbs className="mb-2xs pt-0 [&_a]:no-underline">
        <Breadcrumbs.Item>
          <Link href={AppRoutes.EXPERIENCES}>experiences</Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>edit</Breadcrumbs.Item>
      </Breadcrumbs>
      <AddEditExperienceForm type="edit" experience={experience} />
    </div>
  );
};

export default EditExperience;
