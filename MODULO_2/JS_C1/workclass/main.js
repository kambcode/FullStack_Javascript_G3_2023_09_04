// Este es un archivo de javascript 

// Existen diferentes tipos de datos en JavaScript
// 1. Datos de tipo texto (string)
//     Ejemplo:
//         "Lo que va en comillas es un texto"
//         'Este es un string'
//         "Camilo Montoya"
//         'camilo'
// 2. Datos de tipo numerico (number)
//     Ejemplo:
//         18
//         32234432432423
//         4.8
//         0.3333333
//         3.1416
//         4,8 -> NO es valido, el decimal se escribe con punto 

// 3. Datos de tipo condicional (boolean)
//     Solo existen dos:
//         true  -> Indica que algo es verdadero
//         false -> Indica que algo es falso

// VARIABLES
var articulosDisponibles;
// Para asignarle un valor a una variable utilizamos el operador =
articulosDisponibles = 20;

// Puedo crear una variable y asignarle el valor automaticamente
var nombreProducto = "Nintendo switch";

document.write("Cantidad de articulos disponibles: <br>");
// document.write(20);
document.write(articulosDisponibles);
document.write("<br/> vamos a actualizar la cantidad de articulos disponibles <br/>");
// Puedo cambiar el valor de una variable
// asignadole el nuevo valor asi:
articulosDisponibles = 15;
articulosDisponibles = 20 * 3;
document.write(articulosDisponibles);

// Existen un par de funciones que nos permiten interactuar 
// con el usuario

// alert("Esta es una alerta generada por JS")
var edad;
edad = prompt("Escribe tu edad");

document.write("<br><br> Edad: ");
document.write(edad)

// Puedo trabajar con operadores
// Suma +
// resta -
// multiplicacion *
// division /

document.write("<br><br> Edad por dos: ");
var edadPorDos = edad * 2;
document.write(edadPorDos);
// document.write("<br><br> Noten como el valor de la edad original no cambia ");
// document.write(edad);

document.write("<br><br> Edad dividida por dos: ");
var edadDivididadPorDos = edad / 2;
document.write(edadDivididadPorDos)