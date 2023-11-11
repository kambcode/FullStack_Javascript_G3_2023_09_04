
// function calcSum(array) {
//     let sum = 0;
//     for (let index = 0; index < array.length; index++) {
//         sum += array[index]; // sum = sum + numberArray[index];
//         // sum -= 2; // sum = sum - 2;
//     }
//     return sum;
// }

const calcSum = (numberArray) => { // function calcSum(numberArray) {
    let sum = 0;
    for (let index = 0; index < numberArray.length; index++) {
        sum += numberArray[index]; // sum = sum + numberArray[index];
        // sum -= 2; // sum = sum - 2;
    }
    return sum;
}

function calcAverage(numberArray) {
    // let sum = 0;
    // for (let index = 0; index < numberArray.length; index++) {
    //     sum += numberArray[index]; // sum = sum + numberArray[index];
    // }
    const sum = calcSum(numberArray);
    const average = sum / numberArray.length;
    return average;
}

const suma = calcSum([1,4,6]);
const average = calcAverage([1,4,6]);
console.log('Suma = ', suma);
console.log('Promedio = ', average);
