import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";
import { z } from "zod";

import { db } from "@/lib/prisma";
import { authOptions } from "@/utils/auth-utils";
import { CustomError } from "@/utils/error";
import { getSheetIdFromLink, linkSheetFormSchema } from "@/utils/schema-utils";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json("Unauthorized", { status: 401 });
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

    return NextResponse.json("Success", {
      status: 200,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    const message = new CustomError(error).message;

    return NextResponse.json(message, {
      status: 500,
    });
  }
}
