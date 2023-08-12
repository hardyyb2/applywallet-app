import { GoogleSpreadsheet } from "google-spreadsheet";

export enum SheetNames {
  CAREERS = "careers",
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
