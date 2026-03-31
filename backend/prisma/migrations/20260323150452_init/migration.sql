-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'LEAD', 'TRAINER') NOT NULL,
    `teamCode` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_teamCode_key`(`teamCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `manikin` VARCHAR(191) NULL,
    `legacyCode` VARCHAR(191) NULL,
    `drName` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `state` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `eventDate` DATETIME(3) NULL,
    `eventTime` VARCHAR(191) NULL,
    `rescheduleDate` DATETIME(3) NULL,
    `rescheduleTime` VARCHAR(191) NULL,
    `approxParticipants` INTEGER NULL,
    `actualParticipants` INTEGER NULL,
    `audienceType` VARCHAR(191) NULL,
    `liaisoningManager` VARCHAR(191) NULL,
    `managerMobile` VARCHAR(191) NULL,
    `managerEmail` VARCHAR(191) NULL,
    `teamCode` VARCHAR(191) NOT NULL,
    `requirements` VARCHAR(191) NULL,
    `repAtLocation` VARCHAR(191) NULL,
    `trainerId` INTEGER NULL,
    `assignmentStatus` ENUM('UNASSIGNED', 'REQUESTED', 'ASSIGNED', 'REJECTED') NOT NULL DEFAULT 'UNASSIGNED',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Event_legacyCode_key`(`legacyCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `eventId` INTEGER NULL,
    `type` ENUM('NEW_EVENT', 'ASSIGNMENT_REQUEST', 'ASSIGNMENT_RESPONSE', 'DIRECT_ASSIGN') NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `isRead` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_trainerId_fkey` FOREIGN KEY (`trainerId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
