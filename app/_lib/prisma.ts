import { envVariables } from "@/_utils/env-vars.utils";
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (envVariables.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export const db = prisma;
