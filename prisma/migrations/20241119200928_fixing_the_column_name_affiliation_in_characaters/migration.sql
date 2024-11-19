/*
  Warnings:

  - You are about to drop the column `afiliation` on the `Character` table. All the data in the column will be lost.
  - Added the required column `affiliation` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Character` DROP COLUMN `afiliation`,
    ADD COLUMN `affiliation` VARCHAR(191) NOT NULL;
