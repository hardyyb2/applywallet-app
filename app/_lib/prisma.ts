import { PrismaClient } from "@prisma/client";

import { env } from "~/utils/env";

let prisma: PrismaClient;

if (env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export const db = prisma;
