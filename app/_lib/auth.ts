import GoogleProvider from "next-auth/providers/google";
import type { OAuthProviderType } from "next-auth/providers/oauth-types";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type NextAuthOptions } from "next-auth";

import { env } from "~/utils/env";

import { db } from "@/lib/prisma";

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
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: scopes.google?.join(" "),
        },
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.primarySheetId = token.primarySheetId;

        session.accessToken = token.accessToken;
      }

      return session;
    },
    async jwt({ token, user, account }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });
      const accessToken = token.accessToken ?? account?.access_token;
      const primarySheetId = dbUser?.primarySheetId;

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        token.accessToken = accessToken;
        token.primarySheetId = primarySheetId;
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        accessToken,
        primarySheetId,
      };
    },
  },
};
