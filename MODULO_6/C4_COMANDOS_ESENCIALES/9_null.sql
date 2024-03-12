/* 
	Created by: jdafbb
    Creation Date: yyyy/mm/dd
	Description: Cuál es el nombre del primer usuario que inicia con P o el apellido que inicia con R, 
    y que además su edad sea mayor a 20, pero su fecha de ingreso sea la más reciente y que su fecha no sea nula?

*/
SELECT
	name
FROM
	users
WHERE
	(name LIKE 'P%' OR surname LIKE 'r%') AND age > 20 AND init_date IS NOT NULL
ORDER BY
	init_date
LIMIT
	1;
