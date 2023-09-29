import { NextResponse } from "next/server";

import { authOptions } from "@/_lib/auth";
import { ApiError, ApiErrorCodes, ApiResponse } from "@/_utils/api";
import { CustomError } from "@/_utils/error";
import { interviewInputSchema, interviewSchema } from "@/_utils/schema-utils";
import { SheetNames } from "@/_utils/sheet.utils";
import { zodKeys } from "@/_utils/zod.utils";
import axios from "axios";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { getServerSession } from "next-auth";
import { z } from "zod";

export async function POST(request: Request) {
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

    const json = await request.json();
    const body = interviewInputSchema.parse(json);

    const doc = new GoogleSpreadsheet(session.user.primarySheetId, {
      token: session.accessToken,
    });
    await doc.loadInfo();

    const allSheets = doc.sheetsByTitle;
    let interviewSheet = allSheets[SheetNames.INTERVIEWS];
    if (!interviewSheet) {
      interviewSheet = await doc.addSheet({
        title: SheetNames.INTERVIEWS,
        headerValues: zodKeys(interviewInputSchema),
      });
    }
    await interviewSheet.addRow(body);

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

    const { primarySheetId } = session.user;

    const doc = new GoogleSpreadsheet(primarySheetId, {
      token: session.accessToken,
    });
    await doc.loadInfo();
    const allSheets = doc.sheetsByTitle;
    let interviewSheet = allSheets[SheetNames.INTERVIEWS];

    //  TODO - figure out what to do no sheet is present
    if (!interviewSheet) {
      return NextResponse.json(new ApiResponse([]), {
        status: 200,
      });
    }

    // TODO - return damaged rows as well
    const interviewRows = (await interviewSheet.getRows())
      .map((ir) => {
        const interview = { ...ir.toObject(), id: ir.rowNumber };
        const parsedInterview = interviewSchema.safeParse(interview);

        if (parsedInterview.success) {
          return parsedInterview.data;
        }

        return null;
      })
      .filter(Boolean);

    return NextResponse.json(new ApiResponse(interviewRows), {
      status: 200,
    });
  } catch (err) {
    console.log("err", err);
    // TODO - redirect to link page or login page
    if (axios.isAxiosError(err)) {
      const status = err.response?.status;
    }
    return [];
  }
}
