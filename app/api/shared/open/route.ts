import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import { ApiError, ApiErrorCodes } from "@/utils/api";
import { CustomError } from "@/utils/error";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.accessToken || !session.user?.primarySheetId) {
      return NextResponse.json(
        new ApiError({
          code: ApiErrorCodes.UNAUTHORIZED,
        }),
        { status: 401 },
      );
    }

    return NextResponse.json("Hello", { status: 200 });
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
