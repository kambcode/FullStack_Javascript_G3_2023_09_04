/*
Created by jdafpersonal
Description: Relacion 1:1

*/

CREATE TABLE registros_civiles (
	rc_id int AUTO_INCREMENT PRIMARY KEY,
    rc_numero int NOT NULL,
    user_id int,
    UNIQUE(rc_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
)

