ALTER TABLE `storage` MODIFY COLUMN `name` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `storage` ADD CONSTRAINT `storage_name_unique` UNIQUE(`name`);