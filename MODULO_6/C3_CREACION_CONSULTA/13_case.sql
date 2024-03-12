
/* 
	Created by: jdafbb
    Creation Date: yyyy/mm/dd
	Description: Quiero organizar los usuario por categoria edad.
				si el usuario tiene más de 60 años esta en la categoria de tercera edad
				si el usuario tiene màs de 30 años y menos o igual 60 años esta en la categoria de mediana edad
                si el usuario tiene menos edad esta en joven


*/
SELECT
	*,
	 CASE
		WHEN age > 60 THEN 'tercera edad'
        WHEN age BETWEEN 30 AND 60 THEN 'mediana edad'
        ELSE 'joven'
	 END AS 'Categoria de edad'
FROM
	users
ORDER BY
	age;