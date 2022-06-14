CREATE TABLE IF NOT EXISTS sites (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `city` VARCHAR(30),
    `lat` NUMERIC(6, 4),
    `lng` NUMERIC(6, 4),
    `country` VARCHAR(10),
    `iso2` VARCHAR(2),
    `admin_name` VARCHAR(30),
    `capital` VARCHAR(10),
    `population` NUMERIC(10, 3),
    `population_proper` NUMERIC(10, 3)
);