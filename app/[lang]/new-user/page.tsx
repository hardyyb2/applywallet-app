import { redirect } from "next/navigation";
import React from "react";

import { CreateNewSheetButton } from "./components/CreateNewSheetButton";
import { checkUserSheet } from "./new-user.utils";

const NewSheet = async () => {
  const checkResponse = await checkUserSheet();

  if (checkResponse.type === "error") {
    throw new Error(checkResponse.message);
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
      <span>-OR-</span>
      <CreateNewSheetButton />
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default NewSheet;
