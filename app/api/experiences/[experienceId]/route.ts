import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { getServerSession } from "next-auth";
import { z } from "zod";

import { ApiError, ApiErrorCodes, ApiResponse } from "@/lib/api-response";
import { authOptions } from "@/lib/auth";
import { CustomError } from "@/lib/custom-error";
import { experienceInputSchema } from "@/lib/schema/experience";
import { SheetNames } from "@/utils/sheet";

import type { ApiRequestContextType } from "@/types/api";

const paramSchema = z.object({
  experienceId: z.coerce.number().nonnegative(),
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

    const parsedParams = paramSchema.safeParse(await context.params);

    if (!parsedParams.success) {
      return NextResponse.json(
        new ApiError({
          code: ApiErrorCodes.BAD_REQUEST,
          data: parsedParams.error.issues,
        }),
        { status: 400 },
      );
    }

    const experienceId = parsedParams.data.experienceId;
    const doc = new GoogleSpreadsheet(session.user.primarySheetId, {
      token: session.accessToken,
    });
    await doc.loadInfo();

    const allSheets = doc.sheetsByTitle;
    const experienceSheet = allSheets[SheetNames.EXPERIENCES];

    const requiredRow = await experienceSheet.getRows({
      offset: experienceId - 1 - 1, // extra 1 for header row
      limit: 1,
    });

    await requiredRow[0].delete();

    // TODO - add  revalidatePath when it starts working

    return NextResponse.json(new ApiResponse(), {
      status: 200,
    });
  } catch (err) {
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

export async function PUT(
  request: NextRequest,
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

    const parsedParams = paramSchema.safeParse(await context.params);

    if (!parsedParams.success) {
      return NextResponse.json(
        new ApiError({
          code: ApiErrorCodes.BAD_REQUEST,
          data: parsedParams.error.issues,
        }),
        { status: 400 },
      );
    }

    const experienceId = parsedParams.data.experienceId;
    const doc = new GoogleSpreadsheet(session.user.primarySheetId, {
      token: session.accessToken,
    });
    await doc.loadInfo();

    const allSheets = doc.sheetsByTitle;
    const experienceSheet = allSheets[SheetNames.EXPERIENCES];

    const requiredRow = (
      await experienceSheet.getRows({
        offset: experienceId - 1 - 1, // extra 1 for header row
        limit: 1,
      })
    )[0];

    const json = await request.json();
    const body = experienceInputSchema.parse(json);

    requiredRow.assign(body);
    await requiredRow.save();

    return NextResponse.json(new ApiResponse(), {
      status: 200,
    });
  } catch (err) {
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
