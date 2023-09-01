import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { CustomError } from "@/utils/error";
import { createGoogleSheetDoc } from "@/utils/sheet.utils";

export async function POST() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json("unauthorized", {
        status: 401,
      });
    }

    if (!session.accessToken) {
      return NextResponse.json("forbidden", {
        status: 403,
      });
    }

    const { accessToken, user } = session;

    console.log("request here");

    const sheetId = await createGoogleSheetDoc(accessToken);
    await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        primarySheetId: sheetId,
      },
    });

    return NextResponse.json("success", {
      status: 201,
    });
  } catch (error) {
    const message = new CustomError(error).message;

    return NextResponse.json(message, {
      status: 500,
    });
  }
}
