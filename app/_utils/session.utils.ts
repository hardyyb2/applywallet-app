"server-only";

import { getServerSession } from "next-auth/next";

import { authOptions } from "@/lib/auth";

export const getCurrentUser = async () => {
  try {
    const session = await getServerSession(authOptions);
    return session?.user;
  } catch (err: any) {
    console.log();
  }
};
