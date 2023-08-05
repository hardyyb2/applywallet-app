import NextAuth, { DefaultSession, User } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      primarySheetId?: string;
    } & User;
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
    accessToken?: string;
  }
}
