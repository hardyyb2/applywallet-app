"server-only";

import { getServerSession } from "next-auth/next";

import { authOptions } from "@/utils/auth-utils/auth-flow.utils";

export const getCurrentUser = async () => {
  try {
    const session = await getServerSession(authOptions);
    return session?.user;
  } catch (err: any) {
    console.log();
  }
};
