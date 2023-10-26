// Un programa que calcule el precio de entrada a un museo

//  30 UDS -> menores de 14 años
//  100 USD -> personas entre 14 y 50 años
//  50 USD -> mayores de 50

const age = Number(prompt("Escribe tu edad"));

if (age < 14) {
    document.write("Precio: 30 USD");
} else if (age > 14 && age <= 50) {
    document.write("Precio: 100 USD");
} else {
    document.write("Precio: 50 USD");
}

// // Escribir un programa que pregunte 
// // la talla de una camiseta (s, m)
// // y el genero de la camiseta (male, female)

// // El programa debe mostrar la cantidad disponible en stock
// // Camiseta talla S => 30 male, 32 female
// // camisetas talla M => 10 male, 8 female

// const size = prompt("Escribe la talla de la camiseta (s / m)")
// const gender = prompt("Escribe el genero de la camiseta (male / female)")

// if (size == "s") {
//     // Si al talla es S
//     if (gender == "male") {
//         document.write(" 30 Camisetas dsiponibles");
//     }
// }
// // OPERADORES LOGICOS
// // 1 AND (y) -> &&
// // 2 OR (ó) -> ||


// // Si talla es S y el genero es male

// if (size == "s" && gender == "male") {
//     document.write(" 30 Camisetas dsiponibles");
// } else if (size == "s" && gender == "female") {
//     document.write(" 32 Camisetas dsiponibles");
// } else if (size == "m" && gender == "male") {
//     document.write(" 10 Camisetas dsiponibles");
// } else {
//     document.write(" 8 Camisetas dsiponibles");
// }

// console.log("FIN de programa")


// RETO
// Un programa que calcule el precio de entrada a un bar

// Tiene que preguntar el genero de la persona (male / female)
// preguntar la edad

// Los menores de 18 Años -> NO PUEDEN ENTRAR
// Los mayores de 18 Años -> Pagan un cover de $30.000
// Las mujeres siempre entran gratis

