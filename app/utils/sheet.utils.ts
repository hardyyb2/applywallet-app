import { GoogleSpreadsheet } from "google-spreadsheet";

export const createGoogleSheetDoc = async (
  accessToken: string,
): Promise<string> => {
  try {
    const doc = new GoogleSpreadsheet();
    doc.useRawAccessToken(accessToken);

    await doc.createNewSpreadsheetDocument({ title: "applywallet-database" });
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

    const doc = new GoogleSpreadsheet(sheetId);
    doc.useRawAccessToken(accessToken);
    await doc.loadInfo();

    const sheet = doc.sheetsById[sheetId];
    return !!sheet;
  } catch (err: any) {
    return false;
  }
};
