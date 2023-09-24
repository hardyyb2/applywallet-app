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
  CareerInputType,
  careerSchema,
  CareerType,
} from "@/utils/schema-utils";
import { SheetNames } from "@/utils/sheet.utils";

import { AddEditCareerForm } from "../../components/AddEditCareerForm";

const careerIdSchema = z.coerce.number().nonnegative();

const fetchCareer = async (
  careerId?: CareerType["id"],
): Promise<CareerType | undefined> => {
  try {
    if (!careerId) {
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
    let careerSheet = allSheets[SheetNames.CAREERS];

    //  TODO - link sheet page
    if (!careerSheet) {
      redirect("/link-sheet");
    }

    const careerIdNum = careerIdSchema.parse(careerId);
    const requiredCareerRow = (
      await careerSheet.getRows({
        offset: careerIdNum - 1 - 1, // extra 1 for header row
        limit: 1,
      })
    )[0];

    const careerData = {
      ...requiredCareerRow.toObject(),
      id: careerId,
    };
    const career = careerSchema.parse(careerData);

    return career;
  } catch (err) {
    const message = new CustomError(err).message;

    console.log("fetchCareer error", message);
    // TODO - error response
  }
};

type EditCareerProps = {
  params: Record<string, string>;
};

const EditCareer = async ({ params }: EditCareerProps) => {
  const careerId = params[UrlParams.CAREER_ID];
  const career = await fetchCareer(careerId);

  if (!career) {
    notFound();
  }

  return (
    <div className="m-xs mt-0">
      <Breadcrumbs className="mb-2xs pt-0 [&_a]:no-underline">
        <Breadcrumbs.Item>
          <Link href={AppRoutes.CAREERS}>careers</Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>edit</Breadcrumbs.Item>
      </Breadcrumbs>
      <AddEditCareerForm type="edit" career={career} />
    </div>
  );
};

export default EditCareer;
