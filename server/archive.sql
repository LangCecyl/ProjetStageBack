DROP DATABASE IF EXISTS bpi_france_projet;	
	
CREATE DATABASE bpi_france_projet;
	
USE bpi_france_projet;
	
/* Création des tables  */
	
CREATE TABLE `admin` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(100) NOT NULL,
	`password` VARCHAR(100) NOT NULL,
	PRIMARY KEY (`id`)
	);
	
CREATE TABLE `site_bpi` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`namesite` VARCHAR(100) NOT NULL,
	`urlsite` VARCHAR(500) NOT NULL,
	`gestionsite` VARCHAR(500) NOT NULL,
	`contactgestionsite` VARCHAR(500) NOT NULL,
	PRIMARY KEY (`id`)
	);

	
CREATE TABLE `famille_cookies` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(100) NOT NULL,
	PRIMARY KEY (`id`)
	);


CREATE TABLE `cookie_bpi` ( 
    `id` INT NOT NULL AUTO_INCREMENT,
	`name_cookie` VARCHAR(100) NOT NULL,
	`value_cookie` VARCHAR(500) NOT NULL,
	`domain_cookie` VARCHAR(500) NOT NULL,
	`expires_cookie` VARCHAR(500) NOT NULL,
	`size_cookie` VARCHAR(500) NOT NULL,
	`priority_cookie` VARCHAR(500) NOT NULL,
	PRIMARY KEY (`id`)
    );
    

/*------ insertions--------*/


