import { CallbacksOptions } from "next-auth";

const checkUserExists = () => {
  return true;
};

const checkGoogleSheetValidity = () => {
  return true;
};

const createGoogleSheet = () => {
  return;
};

const createNewUser = () => {
  return;
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
export const nextAuthSignInCallback: CallbacksOptions["signIn"] = async () => {
  try {
    const userExists = await checkUserExists();

    if (userExists) {
      const isValidSheet = await checkGoogleSheetValidity();

      if (isValidSheet) {
        return true;
      }

      if (!isValidSheet) {
        // prompt user
        return true;
      }

      return false;
    }

    if (!userExists) {
      const createdSheetId = await createGoogleSheet();
      const createdUser = await createNewUser();

      return true;
    }

    return false;
  } catch (err) {
    // server error message
    return false;
  }

  return true;
};
