
/* 
	Created by: jdafbb
    Creation Date: yyyy/mm/dd
	Description: Cuál es la máxima edad de los usuarios?
				 Cuál es el promedio de edad de los usuarios?
                 Cuál es la minima edad?

*/
SELECT
	 MAX(age) AS 'Maxima edad', AVG(age) AS 'Promedio de edad', MIN(age) AS 'Minima edad'
FROM
	users
WHERE
	age > 35;

