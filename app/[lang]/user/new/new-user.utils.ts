import { getServerSession } from "next-auth";

import { db } from "@/lib/prisma";
import { authOptions } from "@/utils/auth-utils";
import { CustomError } from "@/utils/error";
import { AppRoutes } from "@/utils/routes.utils";
import {
  checkGoogleSheetValidity,
  createGoogleSheetDoc,
} from "@/utils/sheet.utils";

export const createUserSheet = async (): Promise<
  | { type: "redirect"; path: string }
  | { type: "error"; message: string }
  | { type: "no-action" }
> => {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.accessToken) {
      return { type: "redirect", path: AppRoutes.HOME };
    }

    const { user, accessToken } = session;

    // First time login, create new sheet and redirect
    if (!user?.primarySheetId) {
      const sheetId = await createGoogleSheetDoc(accessToken);

      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          primarySheetId: sheetId,
        },
      });

      return { type: "redirect", path: AppRoutes.CAREERS };
    }

    // Old user, check if sheet is valid
    const isValidSheet = await checkGoogleSheetValidity(
      accessToken,
      user.primarySheetId,
    );

    if (isValidSheet) {
      return { type: "redirect", path: AppRoutes.CAREERS };
    }

    return { type: "no-action" };
  } catch (err) {
    const message = new CustomError(err).message;

    return {
      type: "error",
      message,
    };
  }
};
