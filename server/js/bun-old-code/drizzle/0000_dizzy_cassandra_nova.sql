CREATE TABLE `users` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`login` varchar(100) NOT NULL,
	`email` varchar(256) NOT NULL,
	`name` varchar(256) NOT NULL,
	`date_birth` varchar(256),
	`description` varchar(256),
	`status` varchar(256),
	`image` varchar(999),
	`password` varchar(256),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_login_unique` UNIQUE(`login`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
