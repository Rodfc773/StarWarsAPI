-- CreateTable
CREATE TABLE `Character` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `race` VARCHAR(191) NOT NULL,
    `afiliation` VARCHAR(191) NOT NULL,
    `originPlanetId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Character_name_key`(`name`),
    UNIQUE INDEX `Character_originPlanetId_key`(`originPlanetId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Character` ADD CONSTRAINT `Character_originPlanetId_fkey` FOREIGN KEY (`originPlanetId`) REFERENCES `Planet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
