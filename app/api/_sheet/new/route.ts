import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";

import { ApiError, ApiErrorCodes, ApiResponse } from "~/lib/api-response";

import { authOptions } from "@/lib/auth";
import { CustomError } from "@/lib/custom-error";
import { db } from "@/lib/prisma";
import { createGoogleSheetDoc } from "@/utils/sheet";

export async function POST() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        new ApiError({
          code: ApiErrorCodes.UNAUTHORIZED,
        }),
        {
          status: 401,
        },
      );
    }

    if (!session.accessToken) {
      return NextResponse.json(
        new ApiError({
          code: ApiErrorCodes.FORBIDDEN,
        }),
        {
          status: 403,
        },
      );
    }

    const { accessToken, user } = session;

    const sheetId = await createGoogleSheetDoc(accessToken);
    await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        primarySheetId: sheetId,
      },
    });

    return NextResponse.json(new ApiResponse(), {
      status: 201,
    });
  } catch (error) {
    const message = new CustomError(error).message;

    return NextResponse.json(
      new ApiError({
        code: ApiErrorCodes.SERVER_ERROR,
        message,
      }),
      {
        status: 500,
      },
    );
  }
}
