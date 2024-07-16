import { PrismaClient } from '@prisma/client';

declare global {
  // グローバルオブジェクトの型定義を追加
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient | undefined;
    }
  }
}

// グローバルオブジェクトを定義
const globalForPrisma = global as unknown as NodeJS.Global & { prisma: PrismaClient };

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient();
  }
  prisma = globalForPrisma.prisma;
}

export default prisma;
