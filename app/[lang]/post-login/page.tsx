import React from "react";
import { redirect } from "next/navigation";

import { AppRoutes } from "@/utils/routes.utils";
import { validateUserSheet } from "@/utils/sheet.utils";

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
        redirect(AppRoutes.CAREERS);
      }
      break;
    }

    case "invalid-sheet":
      redirect(AppRoutes.LINK_SHEET);

    case "valid-sheet":
      redirect(AppRoutes.CAREERS);

    case "error":
    default:
      break;
  }

  return <div>Some error occurred, please try to sign in again</div>;
};

export default PostLoginPage;
