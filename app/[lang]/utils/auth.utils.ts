import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { prisma } from "app/lib/prisma";

import { envVariables } from "./env-vars.utils";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: envVariables.GOOGLE_CLIENT_ID,
      clientSecret: envVariables.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "openid https://www.googleapis.com/auth/spreadsheets",
        },
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
};
