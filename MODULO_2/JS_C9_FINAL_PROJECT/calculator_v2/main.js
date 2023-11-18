const screenContainer = document.getElementById("screenContainer");

// function displayScreen() {
// }
const displayScreen = (number) => {
    // screenContainer.innerHTML = number;
    // screenContainer.innerHTML = screenContainer.innerHTML + number;
    screenContainer.innerHTML += number;
}

const clearScreen = () => {
    screenContainer.innerHTML = "";
}

const add = () => {
    screenContainer.innerHTML += " + ";
}

const result = () => {
   const textoEnPantalla = screenContainer.innerHTML;
   console.log('texto en pantalla', textoEnPantalla);
   const resultado = eval(textoEnPantalla);
   console.log("resultado", resultado);
   screenContainer.innerHTML = resultado;
}