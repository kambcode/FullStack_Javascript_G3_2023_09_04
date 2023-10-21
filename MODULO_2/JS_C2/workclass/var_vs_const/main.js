// // var se usa para variables que pueden cambiar de valor
// var age = 30;
// console.log("Valor de variable age: ", age);
// age = 15;
// console.log("Valor de variable age: ", age);

// // Puedo declarar variables como constantes
// const fullName = "Kambcode";
// console.log("valor de la constante fullName", fullName);
// // // A una constante no le puedo cambiar el valor
// // fullName = 2000;
// // console.log("valor de la constante fullName", fullName);

// // Ejercicio
// const currentYear = 2023;
// var userAge = 30;
// // Vamos a calcular cual es la año de nacimiento de el usuario
// const birdthYear = currentYear - userAge;
// console.log("El usuario nacio en:", birdthYear);
// console.log("edad de el usuario x 2:", userAge * 2);
// console.log("valor de la variable:", userAge); // El valor de userAge no cambia

// userAge = userAge*2;
// console.log("Nuevo valor de la variable", userAge)

var height = 170; // Altura en cm
const weight = 50; // Peso en kg
console.log("Altura", height);
height = height/100; // Ahora la altura está en metros
console.log("Altura", height);
const imc = weight / (height*height);
console.log("IMC", imc);

// RETO:
// Si lo gano 100 pesos por dia
// Hacer un programa que calcule cuanto voy a ganar en un 
// año y cuanto voy a ganar en 1 mes

const salaryDay = 100;
const monthlySalary = 30;
var newSalary = salaryDay*monthlySalary;
console.log('salario mensual', newSalary)
const anualSalary = 365;
newSalary = salaryDay*anualSalary;
console.log('salario anual', newSalary);







