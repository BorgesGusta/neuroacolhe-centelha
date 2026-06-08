// src/lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Evita múltiplas instâncias do Prisma no hot-reload do desenvolvimento
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ['query'], // Opcional: Ajuda a ver as queries no terminal
    });

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}