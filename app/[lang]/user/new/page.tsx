import React from "react";
import { signOut } from "next-auth/react";
import { notFound, redirect } from "next/navigation";

import { CreateNewSheetButton } from "./components/CreateNewSheetButton";
import { LinkSheetInput } from "./components/LinkSheetInput";
import { createUserSheet } from "./new-user.utils";

const NewUser = async () => {
  const createSheetResponse = await createUserSheet();

  if (createSheetResponse.type === "redirect") {
    return redirect(createSheetResponse.path);
  }

  if (createSheetResponse.type === "error") {
    // Show error
    return null;
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
