import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/utils/auth-utils";
import { linkSheetFormSchema } from "@/utils/schema-utils";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new Response(null, { status: 403 });
    }

    const json = await request.json();
    const body = linkSheetFormSchema.parse(json);

    // Do further action
    return NextResponse.json(
      { message: "you are here" },
      {
        status: 200,
      },
    );
  } catch (err) {
    console.log("acha", err);
    return NextResponse.json(
      { message: "you are here" },
      {
        status: 500,
      },
    );
  }
}
