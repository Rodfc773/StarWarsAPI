/*
  Warnings:

  - Added the required column `starSystemId` to the `Planet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Planet` ADD COLUMN `starSystemId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `StarSystem` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `StarSystem_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Planet` ADD CONSTRAINT `Planet_starSystemId_fkey` FOREIGN KEY (`starSystemId`) REFERENCES `StarSystem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
