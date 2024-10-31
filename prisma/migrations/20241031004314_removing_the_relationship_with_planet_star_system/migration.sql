/*
  Warnings:

  - You are about to drop the column `starSystemId` on the `Planet` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Planet` DROP FOREIGN KEY `Planet_starSystemId_fkey`;

-- AlterTable
ALTER TABLE `Planet` DROP COLUMN `starSystemId`;
