// Arrays o Arreglos. Son otro tipo de dato comunmente usados en lenguages de programación
// https://www.w3schools.com/js/js_array_methods.asp

const number = 34; // Numero
const firstName = "Kambcode"; // string
const isWomen = true; // boolean

// Tipo de dato (objeto) que permite almacenar una lista de otros datos
const myArray = [ 2, 3, 5, 7, 11, 13, 17 ]; // Lista de numeros primos
const shoppingList = ["arroz", "lentejas", "manzanas", "uvas"];

const mixedArray = ["arroz", 3, "lentejas", 2, "manzanas", false];

const option1 = "Masculino";
const option2 = "Femenino";
const option3 = "Otro";
const selectGender = [option1, option2, option3];
// const selectGender = ["Masculino", "Femenino", "Otro"];

// Ejercicios 
let shoppingList2 = ["gelatina", "arroz", "lentejas", "manzanas", "uvas"];

console.log("El primer elemento [0] de mi lista de compras es", shoppingList2[0]);
console.log("El segundo elemento [1] de mi lista de compras es", shoppingList2[1]);
console.log("El tercero elemento [2] de mi lista de compras es", shoppingList2[2]);
console.log("El cuarto elemento [3] de mi lista de compras es", shoppingList2[3]);
console.log("El ultimo elemento de mi lista de compras es", shoppingList2[4]);

console.log("Si intento acceder a un elemento que no existe, el resultado es", shoppingList2[9]);

// para agregar elementos a una lista puedo usar el metodo push
shoppingList2.push("peras");
shoppingList2.push("pasta");
console.log("Mi nueva lista de compras es", shoppingList2);

// Voy a concatenar la lista de compras 2 con la lista 1
const otherList = ["jabon", "shampoo"];
const newList = shoppingList2.concat(otherList);
console.log("Mi nueva lista de compras es concatenando los elementos de aseo es", newList);

// Puedo ordenar el arreglo con el metodo sort
console.log("Mi lista de compras ordenada alfabeticamente", newList.sort())
