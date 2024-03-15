
/*
CREATED BY: jdafbb
Created date
Description: Cuantos usuarios viven en un pais que tenga mas de un habitante
*/

SELECT
	COUNT(user_id), country
FROM
	kambcode_sql.users
GROUP BY 
	Country
HAVING
	COUNT(user_id) > 1;
