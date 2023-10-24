const userAge = Number(prompt("Digita tu edad en años"));
const userGender = prompt("Escribe tu genero M / F / Other");
const minAge = 18;
// Los operadores de comparacion básicos en Javascript son los siguinetes
// == (Igualda)
// != (Desigualdad)
// > (Mayor que)
// < (Menor que)
// >= (Mayor o igual que)
// <= (Menor o igual que)
// El resultado de una comparacion usando estos operadores 
// siempre es true o false
console.log("El usuario es menor de edad ? ", userAge < minAge); // true / false
const esMenorDeEdad = userAge < minAge; // true or false

console.log("El usuario es Masculino ? ", userGender == "M" );
const isMale = userGender == "M"; // true or false

// if (userAge < minAge) {
if (esMenorDeEdad) {
    // Todo el codigo que incluyamos dentro de los
    // corchetes { } solo se va a ejecutar si la condición
    // es verdadera (true) 
    document.write("Error: Acceso restringido, eres menor de edad<br>");
} else {
    // Si la condicion es false se va a ejecutar este codigo
    document.write("Eres mayor de edad puedes continuar<br>");

    document.write("<h2> Bienvenido </h2>");
    document.write("<button> Navega por nuestra pagina </button>");
}

if (esMenorDeEdad) {
    // Este codigo se va a ejecutar 
    // si el usuario es menor de edad 
    console.log("Es menor de edad");
    if (isMale) {
        // Este codigo solamente se ejecutara 
        // si el usuario es menor de edad y es masculino
        console.log("Es menor de edad y es masculino")
    } else {
        // Este codigo solamente se va a ejecutar
        // si es menor de edad y NO es masculino
        console.log("Es menor de edad y NO es masculino")
    }
} else {
    // Este codigo se va a ejecutar 
    // si el usuario NO es menor de edad 
    console.log("El usuario NO es menor de edad")
    if (isMale) {
        // este codigo se va a ejecutar si NO es menor de edad
        // y si ademas es masculino
        console.log("El usuario NO es menor de eadad y es masculino")
    }
}



