import { User } from "@prisma/client";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { CallbacksOptions } from "next-auth";

const getUserFromDB = async (userId: string): Promise<User | null> => {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    return user;
  } catch (err) {
    console.log("error finding user from db");
    throw err;
  }
};

const getTokenFromAccount = async (userId: string) => {
  try {
    const account = await prisma.account.findFirst({
      where: {
        userId,
      },
    });

    return account?.access_token ?? null;
  } catch (err) {
    console.log("error finding account for token");
    throw err;
  }
};

const checkGoogleSheetValidity = async (
  accessToken: string,
  sheetId: string,
) => {
  try {
    const doc = new GoogleSpreadsheet();
    doc.useRawAccessToken(accessToken);
    await doc.loadInfo();

    const sheet = doc.sheetsById[sheetId];
    return !!sheet;
  } catch (err) {
    console.log("error checking sheet validity");
    throw err;
  }
};

const createGoogleSheetDoc = async (accessToken: string) => {
  try {
    const doc = new GoogleSpreadsheet();
    doc.useRawAccessToken(accessToken);
    await doc.createNewSpreadsheetDocument({ title: "applywallet-database" });
  } catch (err) {
    console.log("error creating a new google sheet");
    throw err;
  }
};

/**
 * check if user exists in my DB,
 *    if user exists,
 *        check if a sheetId exists,
 *            check if its a valid google sheet,
 *            if it isn't a valid sheet or it doesn't exist, give a warning that either your sheet was deleted and prompt to create a new one,
 *        if sheetId doesn't exist, create google sheet and add sheetId,
 *    if user doesn't exist,
 *        create a new sheet for him, save his sheetId
 *  */
export const nextAuthSignInCallback: CallbacksOptions["signIn"] = async ({
  user,
  account,
  profile,
}) => {
  try {
    const userDBData = await getUserFromDB(user.id);
    const userExistsInDB = !!userDBData;

    const accessToken =
      account?.access_token ?? (await getTokenFromAccount(user.id)) ?? null;

    if (!accessToken) return false;

    if (userExistsInDB) {
      const isValidSheet = await checkGoogleSheetValidity(
        accessToken,
        userDBData.primarySheetId!,
      );

      if (isValidSheet) {
        return true;
      }

      if (!isValidSheet) {
        // prompt user
        return true;
      }

      return false;
    }

    if (!userExistsInDB) {
      const createdSheetId = await createGoogleSheetDoc(accessToken);
      // add primarySheetId to profile data
      // profile = { ...profile, primarySheetId: createdSheetId };

      return true;
    }

    return false;
  } catch (err) {
    console.log("total error", err);
    // server error message
    return false;
  }
};
