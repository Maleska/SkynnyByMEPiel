-- CREATE TABLES

CREATE TABLE `estatus` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(15) NOT NULL,
  `active` bit(1) NOT NULL,
  `color` varchar(7) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `servicios` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(15) NOT NULL,
  `active` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(15) NOT NULL,
  `active` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `idrol` bigint(20) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `createdate` datetime NOT NULL DEFAULT current_timestamp(),
  `active` bit(1) NOT NULL DEFAULT b'1',
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `users_FK` (`idrol`),
  CONSTRAINT `users_FK` FOREIGN KEY (`idrol`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4

CREATE TABLE `citas` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `iduser` bigint(20) DEFAULT NULL,
  `idservicio` bigint(20) NOT NULL,
  `fecha` varchar(10) NOT NULL,
  `hora` varchar(5) NOT NULL,
  `idestatus` bigint(20) NOT NULL,
  `createdate` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `citas_FK` (`iduser`),
  KEY `citas_FK_1` (`idservicio`),
  KEY `citas_FK_2` (`idestatus`),
  CONSTRAINT `citas_FK` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`),
  CONSTRAINT `citas_FK_1` FOREIGN KEY (`idservicio`) REFERENCES `servicios` (`id`),
  CONSTRAINT `citas_FK_2` FOREIGN KEY (`idestatus`) REFERENCES `estatus` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4