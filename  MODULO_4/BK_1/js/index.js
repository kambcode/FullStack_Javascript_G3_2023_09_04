/*
    Este es un comentario
*/

// Variables

const userName = "Daniel"; //No la puedo modificar
let userAge = 18; //Si se puede modificar
var userEmail = "lala@lala.com"; //No tiene en cuenta scoopes, si se puede modificar

// console.log("name: ", userName);
// console.log("age: ", userAge);
// console.log("email: ", userEmail);

userAge = 23;
userEmail = "lolo@lolo.com";

// console.log("age: ", userAge);
// console.log("email: ", userEmail);

//functions

function sum(a, b) {
  console.log("age: ", userAge);
  console.log("email: ", userEmail);

  const result1 = a + b;

  return result1;
}

const sumResult = sum(2, 2);

const divider = (a, b) => {
  return a / b;
}; //arrow function

const dividerResult = divider(2, 2);

//conditions

if (true) {
  console.log("si entra");
}

const number10 = 10;

if (10 === number10) {
  console.log("si entra");
}

if (0 < number10) {
  console.log("si entra");
}

if (12 >= number10) {
  console.log("si entra");
}

if (0 !== number10) {
  console.log("si entra");
}

if (true && true) {
  console.log("si entra");
}

if (true || false) {
  console.log("si entra");
}

if (false) {
  console.log("no entra");
} else {
  console.log("entra al else");
}

// loops

for (let i = 0; i <= 10; i++) {
  console.log("i: ", i);
}

// objects

const user = {
  name: "Daniel",
  age: 18,
  email: "daniel@lala.com",
};

console.log(user.name);
user.age;
user.email;

user.id = 12;

delete user.age;

user.name = "alejandra";

console.log(user);

// arrays(list)

const dog = "perro";
//                   0          1           2       3
const animales = ["jirafa", "elefante", "caballo", dog];

console.log("animales: ", animales);

// array methods

console.log(animales[2]);

//length
console.log(animales.length);
//push
animales.push("gato");

for (let i = 0; i < animales.length; i++) {
  console.log(animales[i]); // muestra los animales uno a uno
}

animales.forEach((animal) => console.log(animal));

// abstraer
// Callbacks - funcion que se ejecuta dentro de otra funcion

function forEach(arr, callbacks) {
  for (let i = 0; i < arr.length; i++) {
    callbacks(arr[i]);
  }
}

function cb(item) {
  console.log(item);
}

// forEach(animales, (item) => console.log(item));
forEach(animales, cb);
