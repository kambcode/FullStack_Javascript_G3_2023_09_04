const screenContainer = document.getElementById("screenContainer");
let resultado = 0;
// function displayScreen() {
// }
const displayScreen = (number) => {
    // screenContainer.innerHTML = number;
    // screenContainer.innerHTML = screenContainer.innerHTML + number;
    screenContainer.innerHTML += number;
}

const clearScreen = () => {
    screenContainer.innerHTML = "";
    resultado = 0;
}

const add = () => {
    const screenNumber = Number(screenContainer.innerHTML);
    resultado = resultado + screenNumber;
    screenContainer.innerHTML = "";
}

const result = () => {
    const screenNumber = Number(screenContainer.innerHTML);
    resultado = resultado + screenNumber;
    screenContainer.innerHTML = resultado;
}