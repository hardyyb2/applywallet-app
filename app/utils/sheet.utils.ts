import { GoogleSpreadsheet } from "google-spreadsheet";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";

export enum SheetNames {
  EXPERIENCES = "experiences",
  INTERVIEWS = "interviews",
}

export const createGoogleSheetDoc = async (
  accessToken: string,
  docTitle?: string,
): Promise<string> => {
  try {
    const doc = await GoogleSpreadsheet.createNewSpreadsheetDocument(
      {
        token: accessToken,
      },
      {
        title: docTitle || "applywallet-database",
      },
    );

    return doc.spreadsheetId;
  } catch (err) {
    throw err;
  }
};

export const checkGoogleSheetValidity = async (
  accessToken: string,
  sheetId: string | null | undefined,
) => {
  try {
    if (!sheetId) return false;

    const doc = new GoogleSpreadsheet(sheetId, { token: accessToken });
    await doc.loadInfo();

    return true;
  } catch (err) {
    return false;
  }
};

export const validateUserSheet = async (): Promise<{
  type:
    | "session-expired"
    | "no-sheet"
    | "invalid-sheet"
    | "valid-sheet"
    | "error";
}> => {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.accessToken) {
      return { type: "session-expired" };
    }

    const { user, accessToken } = session;

    if (!user?.primarySheetId) {
      return { type: "no-sheet" };
    }

    const isValidSheet = await checkGoogleSheetValidity(
      accessToken,
      user.primarySheetId,
    );

    if (isValidSheet) {
      return { type: "valid-sheet" };
    }

    return { type: "invalid-sheet" };
  } catch (err) {
    return {
      type: "error",
    };
  }
};
