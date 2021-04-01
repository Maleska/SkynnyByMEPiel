-- CREATE TABLES

CREATE TABLE `metodospago` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(15) NOT NULL,
  `active` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `promociones` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(15) NOT NULL,
  `active` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `pagos` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `idcita` bigint(20) NOT NULL,
  `idmetodopago` bigint(20) NOT NULL,
  `idpromocion` bigint(20) DEFAULT NULL,
  `total` float NOT NULL,
  `fechapago` varchar(10) NOT NULL,
  `descuento` float NOT NULL,
  `createdate` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `pagos_FK` (`idcita`),
  KEY `pagos_FK_1` (`idmetodopago`),
  KEY `pagos_FK_2` (`idpromocion`),
  CONSTRAINT `pagos_FK` FOREIGN KEY (`idcita`) REFERENCES `citas` (`id`),
  CONSTRAINT `pagos_FK_1` FOREIGN KEY (`idmetodopago`) REFERENCES `metodospago` (`id`),
  CONSTRAINT `pagos_FK_2` FOREIGN KEY (`idpromocion`) REFERENCES `promociones` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4

CREATE TABLE `medios` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(15) NOT NULL,
  `active` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4