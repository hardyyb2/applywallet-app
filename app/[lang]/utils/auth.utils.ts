import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { envVariables } from "env-vars";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: envVariables.GOOGLE_CLIENT_ID,
      clientSecret: envVariables.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session;
    },
  },
};
