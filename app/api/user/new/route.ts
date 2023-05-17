import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { AppRoutes } from "app/utils/routes.utils";
import { createGoogleSheetDoc } from "app/utils/sheet.utils";
import { prisma } from "app/lib/prisma";
import { authOptions } from "@/utils/auth-utils";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    const user = session?.user;
    const accessToken = session?.user?.token;

    if (!user || !accessToken) {
      return NextResponse.json(
        {
          message: "authentication failed, user or token invalid",
        },
        {
          status: 401,
        },
      );
    }

    const sheetId = await createGoogleSheetDoc(accessToken);
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        primarySheetId: sheetId,
      },
    });

    return NextResponse.redirect(new URL(AppRoutes.CAREERS, request.url));
  } catch (err) {
    console.log("error in creating sheet", err);

    return NextResponse.json(
      {
        message: "failed to create user sheet",
      },
      {
        status: 401,
      },
    );
  }
}
