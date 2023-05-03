import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { envVariables } from "env-vars";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: envVariables.GOOGLE_CLIENT_ID,
      clientSecret: envVariables.GOOGLE_CLIENT_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
