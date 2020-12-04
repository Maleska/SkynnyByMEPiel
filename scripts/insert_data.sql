-- ESTATUS
INSERT INTO skinny.estatus (descripcion,active,color) VALUES
	 ('PENDIENTE',1,'#666666'),
	 ('ASISTIO',1,'#666666'),
	 ('EN PROCESO',1,'#666666'),
	 ('ATENDIDO',1,'#666666'),
	 ('NO ASISTIO',1,'#666666'),
	 ('CANCELO',1,'#666666'),
	 ('REAGENDO',1,'#666666');

-- ROLES
INSERT INTO skinny.roles (descripcion,active) VALUES
	 ('RECEPCIONISTA',1),
	 ('PACIENTE',1);

-- SERVICIOS
INSERT INTO skinny.servicios (descripcion,active) VALUES
	 ('RADIOFRECUENCIA',1),
	 ('MADEROTERAPIA',1),
	 ('CARBOXITERAPIA',1),
	 ('ULTRASONIDO',1),
	 ('ENZIMAS',1),
	 ('ELECTRODOS',1);