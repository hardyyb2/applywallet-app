import { redirect } from "next/navigation";
import React from "react";

import { checkUserSheet } from "./new-user.utils";

const NewSheet = async () => {
  const checkResponse = await checkUserSheet();

  if (checkResponse.type === "error") {
    throw new Error(checkResponse.message);
  }

  if (checkResponse.type === "redirect") {
    return redirect(checkResponse.path);
  }

  return <div>You&apos;ll have to add name here</div>;
};

// eslint-disable-next-line import/no-default-export
export default NewSheet;
