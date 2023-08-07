import { GoogleSpreadsheet } from "google-spreadsheet";

export const createGoogleSheetDoc = async (
  accessToken: string,
): Promise<string> => {
  try {
    const doc = new GoogleSpreadsheet();
    doc.useRawAccessToken(accessToken);

    console.log("doc", accessToken);

    await doc.createNewSpreadsheetDocument({ title: "applywallet-database" });
    return doc.spreadsheetId;
  } catch (err) {
    console.log("err poppo", err);

    throw err;
  }
};

export const checkGoogleSheetValidity = async (
  accessToken: string,
  sheetId: string | null | undefined,
) => {
  try {
    if (!sheetId) return false;

    const doc = new GoogleSpreadsheet(sheetId);
    doc.useRawAccessToken(accessToken);
    await doc.loadInfo();

    return true;
  } catch (err) {
    return false;
  }
};
