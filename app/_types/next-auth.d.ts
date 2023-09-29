import NextAuth, { DefaultSession, User } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      primarySheetId?: string | null;
    } & User;
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    accessToken?: string;
    primarySheetId?: string | null;
  }
}
