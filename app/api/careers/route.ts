import { NextResponse } from "next/server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { getServerSession } from "next-auth";
import { z } from "zod";

import { authOptions } from "@/lib/auth";
import { ApiError, ApiErrorCodes, ApiResponse } from "@/utils/api";
import { CustomError } from "@/utils/error";
import { careerInputSchema, careerSchema } from "@/utils/schema-utils";
import { SheetNames } from "@/utils/sheet.utils";
import { zodKeys } from "@/utils/zod.utils";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session?.user?.primarySheetId || !session?.accessToken) {
      return NextResponse.json(
        new ApiError({
          code: ApiErrorCodes.UNAUTHORIZED,
        }),
        { status: 401 },
      );
    }

    const json = await request.json();
    const body = careerInputSchema.parse(json);

    const doc = new GoogleSpreadsheet(session.user.primarySheetId, {
      token: session.accessToken,
    });
    await doc.loadInfo();

    const allSheets = doc.sheetsByTitle;
    let careerSheet = allSheets[SheetNames.CAREERS];
    if (!careerSheet) {
      careerSheet = await doc.addSheet({
        title: SheetNames.CAREERS,
        headerValues: zodKeys(careerInputSchema),
      });
    }
    await careerSheet.addRow(body);

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
