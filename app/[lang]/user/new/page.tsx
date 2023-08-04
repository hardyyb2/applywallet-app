import React from "react";
import { redirect } from "next/navigation";

import { CreateNewSheetButton } from "./components/CreateNewSheetButton";
import { LinkSheetInput } from "./components/LinkSheetInput";
import { checkUserSheet } from "./new-user.utils";

const NewUser = async () => {
  const checkResponse = await checkUserSheet();

  if (checkResponse.type === "error") {
    console.log("error");
    return null;
    // throw new Error(checkResponse.message);
  }

  if (checkResponse.type === "redirect") {
    return redirect(checkResponse.path);
  }

  return (
    <div>
      <span>
        Your sheet has either been deleted or lost, if you think this is a
        mistake please provide a link to the your applywallet database sheet
      </span>
      <LinkSheetInput />
      <span>-OR-</span>
      <CreateNewSheetButton />
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default NewUser;
