/*
  Warnings:

  - Added the required column `originPlanetName` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Character` ADD COLUMN `originPlanetName` VARCHAR(191) NOT NULL;
