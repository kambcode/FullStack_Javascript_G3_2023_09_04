/*
Created by jdafpersonal
Description: Comandos alteración de las tablas

*/

-- Agregar una tabla

CREATE TABLE personas6 (
	id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    age int,
    email varchar(100),
    creation_date datetime DEFAULT CURRENT_TIMESTAMP(),
    UNIQUE(id),
    PRIMARY KEY(id),
    CHECK(age > 20)
)
