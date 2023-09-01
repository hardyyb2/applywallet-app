import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { getServerSession } from "next-auth";
import { z } from "zod";

import { authOptions } from "@/lib/auth";
import { CustomError } from "@/utils/error";
import { AppRoutes } from "@/utils/routes.utils";
import { careerSchema } from "@/utils/schema-utils";
import { SheetNames } from "@/utils/sheet.utils";
import { zodKeys } from "@/utils/zod.utils";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session?.user?.primarySheetId || !session?.accessToken) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    const json = await request.json();
    const body = careerSchema.parse(json);

    const doc = new GoogleSpreadsheet(session.user.primarySheetId, {
      token: session.accessToken,
    });
    await doc.loadInfo();

    const allSheets = doc.sheetsByTitle;
    let careerSheet = allSheets[SheetNames.CAREERS];
    if (!careerSheet) {
      careerSheet = await doc.addSheet({
        title: SheetNames.CAREERS,
        headerValues: zodKeys(careerSchema),
      });
    }
    await careerSheet.addRow(body);

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
