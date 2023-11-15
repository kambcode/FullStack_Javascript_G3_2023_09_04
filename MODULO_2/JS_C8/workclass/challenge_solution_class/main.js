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