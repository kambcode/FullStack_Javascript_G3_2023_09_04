const ages = [23, 18, 30, 34, 27, 15];
// console.log("La edad minima es", Math.min(...ages));
console.log('Longitud de el arreglo, o cantidad de elementos', ages.length) // 6
// 1 vamos a imprimir uno a uno los valores de la edad

// INICIA con index = 0 
// y mientras que index sea menor a la longitud de age[]
// haga lo que este adentro de el for
// despues sume 1 a index (index++)
// y repita el proceso
// for (let index = 0; index < 6; index++){
//     console.log(ages[index])
// }

const agesCount = ages.length; // 6
for (let index = 0; index < agesCount; index++){
    console.log(ages[index]);
}

// console.log(ages[0])
// console.log(ages[1])
// console.log(ages[2])
// console.log(ages[3])
// console.log(ages[4])
// console.log(ages[5])

// RETO 
// Crea un array de números, que contendrá los números del 1 al 1000. 
