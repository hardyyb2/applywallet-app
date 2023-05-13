import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { OAuthProviderType } from "next-auth/providers";
import GoogleProvider from "next-auth/providers/google";

import { prisma } from "app/lib/prisma";

import { envVariables } from "../env-vars.utils";

const scopes: { [key in OAuthProviderType]?: string[] } = {
  google: [
    "openid",
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
  ],
};

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: envVariables.GOOGLE_CLIENT_ID,
      clientSecret: envVariables.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: scopes.google?.join(" "),
        },
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session, user }) {
      const account = await prisma.account.findFirst({
        where: {
          userId: user.id,
        },
      });

      if (session.user) {
        session.user.id = user.id;
        session.user.email = user.email;
        session.user.token = account?.access_token;
      }

      return session;
    },
  },
};
