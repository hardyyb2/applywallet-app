import React from "react";
import { redirect } from "next/navigation";

import { AppRoutes } from "@/_utils/routes.utils";
import { validateUserSheet } from "@/_utils/sheet.utils";

import { createAndAddNewSheet } from "./post-login.utils";

const PostLoginPage = async () => {
  const sheetValidity = await validateUserSheet();

  const validityType = sheetValidity.type;

  switch (validityType) {
    case "session-expired": {
      redirect(AppRoutes.LOGIN);
    }

    case "no-sheet": {
      const { success } = await createAndAddNewSheet();

      if (success) {
        redirect(AppRoutes.EXPERIENCES);
      }
      break;
    }

    case "invalid-sheet":
      redirect(AppRoutes.LINK_SHEET);

    case "valid-sheet":
      redirect(AppRoutes.EXPERIENCES);

    case "error":
    default:
      break;
  }

  return <div>Some error occurred, please try to sign in again</div>;
};

export default PostLoginPage;
