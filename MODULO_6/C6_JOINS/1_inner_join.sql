/*
CREATED BY: jdafbb
Created date
Description: Indiqueme toda los datos de los usuarios que tienen registros civiles
*/


SELECT
	*
FROM
	kambcode_sql.users as u
INNER JOIN
	kambcode_sql.registros_civiles as rc
ON
	u.user_id = rc.user_id;


/*
CREATED BY: jdafbb
Created date
Description: Indiqueme el nombre y el titulo los empleados que tiene titulos.
Relacion 1 a N
*/

SELECT
	*
FROM
	employees AS e
INNER JOIN
	titles AS t
ON
	e.emp_no = t.emp_no;