/*
Created by jdafpersonal
Description: Comandos alteración de las tablas

*/

-- Alterar una tabla

ALTER TABLE personas6
RENAME COLUMN creation_date  TO creation;

-- Agregar un nuevo campo

ALTER TABLE personas6
ADD surname varchar(50);


-- elimanar una columna

ALTER TABLE personas6
DROP COLUMN surname;