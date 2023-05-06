import { GoogleSpreadsheet } from "google-spreadsheet";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { envVariables } from "env-vars";

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

  callbacks: {
    async signIn(params) {
      try {
        const accessToken = params.account?.access_token;

        if (!accessToken) return false;

        const doc = new GoogleSpreadsheet();
        doc.useRawAccessToken(accessToken);
        await doc.createNewSpreadsheetDocument({ title: "hey brooo docs" });

        return true;
      } catch (e) {
        return false;
      }
    },
    async session({ session, user }) {
      return session;
    },
  },
};
