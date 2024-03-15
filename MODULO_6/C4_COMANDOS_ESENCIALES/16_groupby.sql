/*
CREATED BY: jdafbb
Created date
Description: Cuantos usuarios tienene la misma edad, viven en el mismo pais
*/

SELECT
	COUNT(country), country
FROM
	kambcode_sql.users
GROUP BY
	Country;
