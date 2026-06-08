/*
  Warnings:

  - A unique constraint covering the columns `[matricula]` on the table `Colaborador` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `senha` to the `Colaborador` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Colaborador` ADD COLUMN `role` ENUM('ADMIN', 'BOLSISTA') NOT NULL DEFAULT 'BOLSISTA',
    ADD COLUMN `senha` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Colaborador_matricula_key` ON `Colaborador`(`matricula`);
