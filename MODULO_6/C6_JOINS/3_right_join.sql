/*
CREATED BY: jdafbb
Created date
Description: Indiqueme toda los datos de los registros civiles, incluyendo los datos de los usuarios
*/


SELECT
	*
FROM
	kambcode_sql.users as u
RIGHT JOIN
	kambcode_sql.registros_civiles as rc
ON
	u.user_id = rc.user_id;