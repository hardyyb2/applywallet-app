import { NextResponse } from "next/server";

import { authOptions } from "@/_lib/auth";
import { db } from "@/_lib/prisma";
import { ApiError, ApiErrorCodes, ApiResponse } from "@/_utils/api";
import { CustomError } from "@/_utils/error";
import { getSheetIdFromLink, linkSheetFormSchema } from "@/_utils/schema-utils";
import { getServerSession } from "next-auth";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        new ApiError({
          code: ApiErrorCodes.UNAUTHORIZED,
        }),
        { status: 401 },
      );
    }

    const json = await request.json();
    const body = linkSheetFormSchema.parse(json);

    const { user } = session;

    await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        primarySheetId: getSheetIdFromLink(body.link),
      },
    });

    return NextResponse.json(new ApiResponse(), {
      status: 200,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        new ApiError({
          code: ApiErrorCodes.BAD_REQUEST,
          data: error.issues,
        }),
        { status: 422 },
      );
    }

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
