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
