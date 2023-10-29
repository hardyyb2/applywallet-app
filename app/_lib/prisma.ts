import { PrismaClient } from "@prisma/client";

import { envVars } from "@/utils/env-vars";

let prisma: PrismaClient;

if (envVars.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export const db = prisma;
