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


// Explicacion extra, esto no tiene nada que ver con la calculadora

// const baseDeDatos = ["camilo", "robin", "alejandra"]
// const baseDeDatosTel = [32434234, 424234234, 45656456]

// let base = [
//     { name: "camilo", tel: 24324234},
//     { name: "robin", tel: 3333333},
//     { name: "alejandra", tel: 77777777}
// ]

// console.log(base[0]) //  { name: "camilo", tel: 24324234}
// console.log(base[1]) //  { name: "robin", tel: 3333333}
// console.log(base[2]) //  { name: "alejandra", tel: 77777777}


// function register () {
//     // 
//     base.push({ name: "Gullermo", tel: 646464646})
// }