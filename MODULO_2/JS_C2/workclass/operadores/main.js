const limitAge = 18;
var userAge1 = 30;
var userAge2 = 10;

// Los operadores de comparacion básicos en Javascript son los siguinetes
// == (Igualda)
// != (Desigualdad)
// > (Mayor que)
// < (Menor que)
// >= (Mayor o igual que)
// <= (Menor o igual que)
// El resultado de una comparacion usando estos operadores 
// siempre es true o false

console.log(
    "limitAge:", limitAge, 
    "userAge1:", userAge1, 
    "userAge2:", userAge2
);
console.log("1. limitAge es igual a userAge1 ?", limitAge == userAge1); // false
console.log("2. limitAge es igual a 18 ?", limitAge == 18); // true
console.log("3. userAge1 es diferente de userAge2 ?", userAge1 != userAge2); // false
console.log("4. userAge1 es mayor que limitAge ?",userAge1 > limitAge ); // true
const user1EsMayorDeEdad = userAge1 > limitAge;
console.log("5. User1 Es mayor de edad ?", user1EsMayorDeEdad);

// Reto 2
// Suponiendo que los milenias son los nacidos a partir de 2000
// hacer un programa que me diga:
// 1. Si pedro que nacio en el 2004 es un milenial ?
// 2. Si Juan que nacio en el 1998 es un milenial ?
// 3. Si Pabl0 que nacio en el 2000 es un milenial ?

const milenialYear = 2000;
const juanBirdthYear = 1998;
const pedroBirdthYear = 2004;
const pabloBirdthYear = 2000;

// juanBirdthYear < milenialYear // true
// pabloBirdthYear == milenialYear // true 

console.log('Pedro es milenial ?', pedroBirdthYear >= milenialYear ); // true
console.log('Juan es milenial ?', juanBirdthYear >= milenialYear ); // false
console.log('Pablo es milenial ?', pabloBirdthYear >= milenialYear); // true

var password = "mycontraseña11111"
console.log("La contaseña es valida ?", password == "mycontraseña")

