import { GoogleSpreadsheet } from "google-spreadsheet";
import { getServerSession } from "next-auth";

import { AppRoutes } from "app/utils/routes.utils";
import { createGoogleSheetDoc } from "app/utils/sheet.utils";

import { db } from "@/lib/prisma";
import { authOptions } from "@/utils/auth-utils";

const checkGoogleSheetValidity = async (
  accessToken: string,
  sheetId: string | null | undefined,
) => {
  try {
    if (!sheetId) return false;

    const doc = new GoogleSpreadsheet(sheetId);
    doc.useRawAccessToken(accessToken);
    await doc.loadInfo();

    const sheet = doc.sheetsById[sheetId];
    return !!sheet;
  } catch (err: any) {
    // we are assuming that its
    return false;
  }
};

/**
 * check for validity of sheet after login,
 *  if valid redirect,
 *  if new user create new sheet for him,
 *  if sheet invalid (deleted or lost), handle in page
 */
export const checkUserSheet = async (): Promise<
  | { type: "redirect"; path: string }
  | { type: "error"; message: string }
  | { type: "no-action" }
> => {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const accessToken = session?.user?.token;

    // if not logged in
    if (!session || !userId || !accessToken) {
      return { type: "redirect", path: AppRoutes.HOME };
    }

    const user = await db.user.findFirst({
      where: {
        id: userId,
      },
    });

    // if no sheet id, create one
    if (!user?.primarySheetId) {
      const sheetId = await createGoogleSheetDoc(accessToken);

      await db.user.update({
        where: {
          id: userId,
        },
        data: {
          primarySheetId: sheetId,
        },
      });

      return { type: "redirect", path: AppRoutes.CAREERS };
    }

    // if sheet id is present, check if its valid
    const isValidSheet = await checkGoogleSheetValidity(
      accessToken,
      user.primarySheetId,
    );

    if (isValidSheet) {
      return { type: "redirect", path: AppRoutes.HOME };
    }

    return { type: "no-action" };
  } catch (err: any) {
    return {
      type: "error",
      message: typeof err?.message === "string" ? err?.message : "some error",
    };
  }
};
