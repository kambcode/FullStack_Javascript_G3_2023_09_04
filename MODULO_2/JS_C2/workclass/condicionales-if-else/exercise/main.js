// Escribir un programa que pregunte 
// la talla de una camiseta (s, m)
// y el genero de la camiseta (male, female)

// El programa debe mostrar la cantidad disponible en stock
// Camiseta talla S => 30 male, 32 female
// camisetas talla M => 10 male, 8 female

const size = prompt("Escribe la talla de la camiseta (s / m)");
const gender = prompt("Escribe el genero de la camiseta (male / female)");

console.log('Talla seleccionada', size, 'Genero', gender);
console.log('Es talla S ?', size == "s" )

const isSizeS = size == "s"; // true / false
const isMale = gender == "male";

if (isSizeS) {
    // Si la camiseta es talla S
    if (isMale) {
        // Si es para Hombre
        document.write("30 camisetas disponibles");
    } else {
        // Si NO es hombre
        document.write("32 camistetas disponibles");
    }
} else {
    // Esto se ejecuta si NO es Talla S
    if (isMale) {
        document.write("10 camisetas disponibles");
    } else {
        document.write("8 camisetas disponibles");
    }
}