
/*
CREATED BY: jdafbb
Created date
Description: Indiqueme toda los datos de los usuarios incluyendo los datos de los registros civiles
*/


SELECT
	*
FROM
	kambcode_sql.users as u
LEFT JOIN
	kambcode_sql.registros_civiles as rc
ON
	u.user_id = rc.user_id;