import { getServerSession } from "next-auth";
import React from "react";

import { authOptions } from "@/utils/auth-utils/auth-flow.utils";
import { prisma } from "app/lib/prisma";

const check = async () => {
  try {
    const session = await getServerSession(authOptions);

    const userId = session?.user?.id;

    if (!userId) {
      return "some error occurred, please logout and login again";
    }

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user?.primarySheetId) {
      return "redirect to create page";
    }

    return "redirect to home page";
  } catch {
    return "some error occurred, please refresh the page and try again";
  }
};

const NewSheet = async () => {
  const result = await check();

  console.log(result);

  return <div>NewSheet</div>;
};

// eslint-disable-next-line import/no-default-export
export default NewSheet;
