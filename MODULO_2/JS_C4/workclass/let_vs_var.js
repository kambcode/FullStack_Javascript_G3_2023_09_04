const maxAge = 18;

var personName = "Kambcode";
var personAge = 10;

if (personAge > maxAge) {
    console.log(personName, ' Eres mayor de edad')
} else {
    console.log(personName, ' NO Eres mayor de edad')
}

console.log('Name', personName)
var personName = "Camilo"; // Esta linea NO genera error porque una variable tipo VAR si se puede crear dos veces con el mismo nombre
console.log('Name', personName)
var personAge = 31;

if (personAge > maxAge) {
    console.log(personName, ' Eres mayor de edad')
} else {
    console.log(personName, ' NO Eres mayor de edad')
}

let personName2 = "Guillermo"
console.log('let Name', personName2)
personName2 = "Juan"
console.log('let Name', personName2)
// let personName2 = "Camilo" // Esta linea genera error porque una variable tipo let no se puede crear dos veces con el mismo nombre
