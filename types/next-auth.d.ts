import NextAuth, { DefaultSession, User } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId;
  }
}
