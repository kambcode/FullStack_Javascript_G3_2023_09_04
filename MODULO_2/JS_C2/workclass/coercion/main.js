const firstName = "Camilo";
const lastName = "Montoya";
const age = 30;

console.log("Mi edad es:", age); // 30
const agePlusTwo = age + 2;
console.log("Mi edad mas dos años es:", agePlusTwo); // 32
// vamos a ver que pasa cuando sumo dos strings
const fullName = firstName + lastName;
console.log("Fullname: ", fullName); // CamiloMontoya

const weightString = prompt("Digita tu peso en kilogramos");
console.log("El peso de el usuario es ", weightString);
console.log("Peso + 10Kg ", weightString + 10);

// Podemos convertir un String en Number de la siguiente forma
const weight = Number(weightString); // la salida de Number(string) será el valor convertido en numero
console.log("El peso de el usaurio es ", weight);
console.log("El peso + 10Kg es", weight + 10 );

// RETO: Crear un programa que le pregunte el año de nacimiento a el usuario,
// e imprimir en consola ¿Cuántos años tiene el usuario?
const birthYearStr = prompt("Digita tu año de nacimiento");
const year = Number(birthYearStr);
console.log("La edad de el usaurio es", 2023 - year);