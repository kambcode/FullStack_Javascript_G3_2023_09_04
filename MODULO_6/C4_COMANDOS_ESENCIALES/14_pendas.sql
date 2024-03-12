
/* 
	Created by: jdafbb
    Creation Date: yyyy/mm/dd
	Description: Cuántos usuarios tienen nombre que inicia con P o el apellido que inicia con R, y que además su edad sea mayor a 20?
				orden de ejecución de operadores PEMBA y BEMBAS
*/

SELECT
	*
FROM
	users
WHERE
	name LIKE 'P%' OR surname LIKE 'r%' AND age > 20;