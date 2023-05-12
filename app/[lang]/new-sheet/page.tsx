import { GoogleSpreadsheet } from "google-spreadsheet";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import React from "react";

import { authOptions } from "@/utils/auth-utils/auth-flow.utils";
import { prisma } from "app/lib/prisma";

const checkGoogleSheetValidity = async (
  accessToken: string,
  sheetId: string | null | undefined,
) => {
  try {
    if (!sheetId) return false;

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
    console.log("error creating a new google sheet", err);
    throw err;
  }
};

const check = async (): Promise<
  | {
      redirect: true;
      path: string;
    }
  | {
      redirect: false;
    }
> => {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const accessToken = session?.user?.token;

    // if not logged in
    if (!session || !userId || !accessToken) {
      return { redirect: true, path: "/" };
    }

    console.log("access", accessToken);

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    // if not sheet id, create one
    if (!user?.primarySheetId) {
      await createGoogleSheetDoc(accessToken);
      return { redirect: true, path: "/careers" };
    }

    // if sheet id is present, check if its valid
    const isValidSheet = await checkGoogleSheetValidity(
      accessToken,
      user.primarySheetId,
    );

    if (isValidSheet) {
      return { redirect: true, path: "/" };
    }

    return { redirect: false };
  } catch {
    return {
      redirect: true,
      path: "/new-sheet/error",
    };
  }
};

const NewSheet = async () => {
  const checkResponse = await check();

  if (checkResponse.redirect) {
    return redirect(checkResponse.path);
  }

  return <div>You&apos;ll have to add name here</div>;
};

// eslint-disable-next-line import/no-default-export
export default NewSheet;
