import { NextRequest, NextResponse } from "next/server";

import { isAxiosError } from "axios";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { getServerSession } from "next-auth";
import { z } from "zod";

import { ApiError, ApiErrorCodes, ApiResponse } from "~/lib/api-response";
import { logger } from "~/utils/logs";

import { authOptions } from "@/lib/auth";
import { CustomError } from "@/lib/custom-error";
import {
  interviewInputSchema,
  interviewSchema,
  type InterviewType,
} from "@/lib/schema/interviews";
import { SheetNames } from "@/utils/sheet";
import { zodKeys } from "@/utils/zod";

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

    // TODO - check for header row not existing
    if (!interviewSheet) {
      interviewSheet = await doc.addSheet({
        title: SheetNames.INTERVIEWS,
        headerValues: zodKeys(interviewInputSchema),
      });
    }

    await interviewSheet.addRow({
      ...body,
      // stringify the arrays
      rounds: JSON.stringify(body.rounds),
      notes: JSON.stringify(body.notes),
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

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    // TODO - Check for access token validity
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
        try {
          const interviewObj = ir.toObject();
          const interview = {
            ...interviewObj,
            // TODO - specific error in case of parsing error
            // parse the arrays back
            rounds: JSON.parse(interviewObj.rounds),
            notes: JSON.parse(interviewObj.notes),
            id: ir.rowNumber,
          } as InterviewType;

          const parsedInterview = interviewSchema.safeParse(interview);

          if (parsedInterview.success) {
            return parsedInterview.data;
          }

          return null;
        } catch {
          return null;
        }
      })
      .filter(Boolean);

    return NextResponse.json(new ApiResponse(interviewRows), {
      status: 200,
    });
  } catch (err) {
    logger.error("err", err);
    // TODO - redirect to link page or login page
    if (isAxiosError(err)) {
      const status = err.response?.status;
    }

    const message = new CustomError(err).message;

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

const deleteBodySchema = z.object({
  interviewIds: z.array(z.coerce.number()),
});

export async function DELETE(request: NextRequest) {
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
    const body = deleteBodySchema.safeParse(json);

    if (!body.success) {
      return NextResponse.json(
        new ApiError({
          code: ApiErrorCodes.BAD_REQUEST,
          data: body.error.issues,
        }),
        { status: 400 },
      );
    }

    const interviewIdsToDelete = body.data.interviewIds;

    const doc = new GoogleSpreadsheet(session.user.primarySheetId, {
      token: session.accessToken,
    });
    await doc.loadInfo();
    const allSheets = doc.sheetsByTitle;
    const interviewSheet = allSheets[SheetNames.INTERVIEWS];

    // sorted in descending order because deleting a row changes the row numbers
    // TODO - find more efficient way to do this
    const sortedInterviewIdsDesc = interviewIdsToDelete.sort((a, b) => b - a);
    for (const interviewId of sortedInterviewIdsDesc) {
      const requiredRow = await interviewSheet.getRows({
        offset: interviewId - 1 - 1, // extra 1 for header row
        limit: 1,
      });

      await requiredRow[0].delete();
    }

    return NextResponse.json(new ApiResponse(), {
      status: 200,
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
