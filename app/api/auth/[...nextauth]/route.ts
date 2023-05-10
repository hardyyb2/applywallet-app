import NextAuth from "next-auth";

import { authOptions } from "@/utils/auth-utils/auth-flow.utils";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
