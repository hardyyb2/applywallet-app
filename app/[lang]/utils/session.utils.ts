import { getServerSession } from "next-auth/next";

import { authOptions } from "@/utils/auth.utils";

export const getCurrentUser = async () => {
  const session = await getServerSession(authOptions);

  return session?.user;
};
