import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { getServerSession } from "next-auth";
import { ApiRequestContextType } from "types/api";
import { z } from "zod";

import { authOptions } from "@/lib/auth";
import { ApiError, ApiErrorCodes, ApiResponse } from "@/utils/api";
import { CustomError } from "@/utils/error";
import { SheetNames } from "@/utils/sheet.utils";

const paramSchema = z.object({
  careerId: z.coerce.number().nonnegative(),
});

export async function DELETE(
  _request: NextRequest,
  context: ApiRequestContextType,
) {
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

    const parsedParams = paramSchema.safeParse(context.params);

    if (!parsedParams.success) {
      return NextResponse.json(
        new ApiError({
          code: ApiErrorCodes.BAD_REQUEST,
          data: parsedParams.error.issues,
        }),
        { status: 400 },
      );
    }

    const careerId = parsedParams.data.careerId;
    const doc = new GoogleSpreadsheet(session.user.primarySheetId, {
      token: session.accessToken,
    });
    await doc.loadInfo();

    const allSheets = doc.sheetsByTitle;
    const careerSheet = allSheets[SheetNames.CAREERS];

    const requiredRow = await careerSheet.getRows({
      offset: careerId - 1 - 1, // extra 1 for header row
      limit: 1,
    });

    await requiredRow[0].delete();

    // TODO - add  revalidatePath when it starts working

    return NextResponse.json(new ApiResponse(), {
      status: 200,
    });
  } catch (err) {
    const message = new CustomError(error).message;

    console.log(",message", message);

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
