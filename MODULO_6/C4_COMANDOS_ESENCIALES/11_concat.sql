
/* 
	Created by: jdafbb
    Creation Date: yyyy/mm/dd
	Description: Necesito el nombre completo de los usuarios de mayor a menor edad

*/
SELECT
	CONCAT('Nombre: ', name, ' Apellido: ',  surname) AS 'Nombre completo'
FROM
	users
ORDER BY
	age DESC;

