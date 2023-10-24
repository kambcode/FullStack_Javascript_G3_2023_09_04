const size = prompt("Escribe la talla de la camiseta (s / m)");
const gender = prompt("Escribe el genero de la camiseta (male / female)");

const isSizeS = size == "s"; // true / false
const isSizeM = size == "m";
const isMale = gender == "male";
const isFemale = gender == "female";

if (isSizeS) {
    if (isMale) {
        document.write("30 camisetas disponibles");
    }
    
    if (isFemale){
        document.write("32 camisetas disponibles");
    }
}


if (isSizeM) {
    if (isMale) {
        document.write("10 camisetas disponibles");
    }

    if (isFemale) {
        document.write("8 camisetas disponibles");
    }
}


