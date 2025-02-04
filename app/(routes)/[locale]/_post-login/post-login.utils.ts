import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { createGoogleSheetDoc } from "@/utils/sheet";

export const createAndAddNewSheet = async (): Promise<{ success: boolean }> => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      throw new Error();
    }

    const { accessToken, user } = session;

    if (!accessToken) {
      throw new Error();
    }

    const sheetId = await createGoogleSheetDoc(accessToken);

    await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        primarySheetId: sheetId,
      },
    });

    return { success: true };
  } catch {
    return { success: false };
  }
};
