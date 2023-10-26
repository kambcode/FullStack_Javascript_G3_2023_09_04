// const gender = prompt("Escribe tu genero (male /female)");

// const isFemale = gender == "female"; // true or false

// // ! -> operador NOT
// // !isFemale -> NO es Mujer

// if (!isFemale) {
//     document.write("NO Eres mujer");
// } else {
//     document.write("Eres mujer");
// }

// 2. Switch Case

// Cantidad de camisetas dependiendo de el genero y la edad
// Para niños tenemos 1 camisetas
// Para niñas tenemos 2 camisetas
// Para hombres tenemos 3 camisetas
// Para mujer tenemos 4 camisetas

const type = prompt(
    "Escribe el tipo de camiseta que necesitas (nino / nina / hombre / mujer)");

// if (type == "nino") {
//     console.log("1 camiseta disponible");
// } else if (type == "nina"){
//     console.log("2 camiseta disponible");
// }else if (type == "hombre"){
//     console.log("3 camiseta disponible");
// }else {
//     console.log("4 camiseta disponible"); 
// }

switch (type) {
    case "nino":
        document.write("1 camiseta disponible");
        break;
    case "nina":
        document.write("2 camiseta disponible");
        break;
    case "hombre":
        document.write("3 camiseta disponible");
        break;
    default:
        document.write("4 camiseta disponible");
        break;
}



