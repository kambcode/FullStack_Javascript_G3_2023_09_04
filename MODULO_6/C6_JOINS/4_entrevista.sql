create database INTERVIEW;
 
 
create table socios (
    id int identity(1,1) primary key,
    nombre string,
    fecha_nacimiento date,
    titulo string,
);
  
create table cenas (
    id int identity(1,1) primary key,
    socio_id int foreign key references socios (id),
    fecha_inicio timestamp_ntz,
    fecha_final timestamp_ntz,
    calidad int --1 a 100, 100 el mejor
    localizacion string,
);


select * from  cenas;
select * from  socios;

insert into socios (id, fecha_nacimiento, nombre, titulo)
select 1, '1/8/1950','Pedro Hernandez','Socio junior' union
select 2, '11/4/2001','Alfonso suarez','Socio parcial' union
select 3, '7/7/1984','Martin Robledo','Socio VIP'
;

insert into cenas(socio_id,fecha_incio,fecha_final,localizacion,calidad)
select 1, '2020-01-01 12:30', '2020-01-01 1:00', 'China', 70 union
select 1, '2020-01-02 12:30', '2020-01-02 1:00', 'Cuba', 100 union
select 2, '2020-01-01 12:30', '2020-01-01 1:00', 'Moscu', 10 union
select 3, '2020-01-02 11:30', '2020-01-02 1:00', 'China', 100 union
select 1, '2020-01-02 10:28', '2020-01-02 3:21', 'Moscu', 100 union
select 1, '2020-01-02 10:28', '2020-01-02 3:20', 'China', 100
;


-- ¿Cuáles socios tiene un nombre que inicie por la letra P
-- ¿Cuáles socios han cenado en "china"?
-- ¿Cuántas veces ha cenado cada socio?
-- ¿Cuál es el porcentage de satisfacción de cada localizaciòn?
--    Ordene los resultados del mejor al peor
-- ¿Cuàl es la cena más larga que un empleado ha tomado?