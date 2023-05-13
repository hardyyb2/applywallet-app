import { getServerSession } from "next-auth";

import { authOptions } from "@/utils/auth-utils/auth-flow.utils";
import { AppRoutes } from "@/utils/routes.utils";
import { createGoogleSheetDoc } from "@/utils/sheet.utils";
import { prisma } from "app/lib/prisma";

export async function POST() {
  try {
    const session = await getServerSession(authOptions);

    const user = session?.user;
    const accessToken = session?.user?.token;

    if (!user || !accessToken) {
      return new Response("authentication failed, user or token invalid", {
        status: 401,
      });
    }

    const sheetId = await createGoogleSheetDoc(accessToken);
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        primarySheetId: sheetId,
      },
    });

    return Response.redirect(AppRoutes.CAREERS);
  } catch (err) {
    return new Response("failed to create user sheet", {
      status: 500,
    });
  }
}
