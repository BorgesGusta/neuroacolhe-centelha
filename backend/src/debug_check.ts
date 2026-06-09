import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function main() {
    try {
        const result = {
            regulares: await prisma.careCase.findMany({
                where: { type: "LONG_TERM" },
                include: {
                    patient: true,
                    professional: true
                }
            }),
            colaboradores: await prisma.user.findMany()
        };

        fs.writeFileSync('src/debug_output.json', JSON.stringify(result, null, 2));
        console.log('Debug data written to src/debug_output.json');

    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
}

main();

