/*
  Warnings:

  - Added the required column `weather` to the `Planet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Planet` ADD COLUMN `weather` VARCHAR(191) NOT NULL;
