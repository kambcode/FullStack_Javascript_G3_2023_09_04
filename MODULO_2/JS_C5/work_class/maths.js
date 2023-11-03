// Vamos a trabajar con la libreria Maths de Javascript
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math

// 1. Como calcula la raiz cuadrada de un numero
const raizCuadrada = Math.sqrt(25);
console.log('Raiz cudrada de 25 es', raizCuadrada);

// 2. Como redondear un numero
const roundNumber = Math.round(25.7);
console.log('25.7 redondeado es igual a', roundNumber);

// 3. Podemos redondar al entero más cercano (inferior)
console.log('25.7 redondeado hacia abajo es', Math.floor(25.7) );

// 4. Podemos redondar al entero más cercano (superior)
console.log('25.2 redondeado hacia arriba es', Math.ceil(25.2) );

// 5. Podemos generar un numero aleatorio,  ejemplo 0.34
const randomNumber = Math.random();  
// Solo nos retorna un numero aleatorio entre 0 y 1
console.log('Este es un numero aleatorio', randomNumber);

// 6. Podemos generar un numero aleatorio entre 0 y 10, ejemplo 0.34 * 10 = 3.4
const randomNumber10 = Math.random() * 10;
const randomNumber10Rounded = Math.round(randomNumber10);
// const randomNumber10 =  Math.round(  Math.random() * 10 );
console.log('Este es un numero aleatorio entre 0 y 10', randomNumber10Rounded);

// 7. Calcular el minimo de dos o más numero
const min = Math.min(2,4,6,1,5,6);
console.log("El minimo entre 2,4,6,1,5,6 es", min)

// 7. Calcular el minimo de dos o más numero
const max = Math.max(2,4,6,1,5,6);
console.log("El maximo entre 2,4,6,1,5,6 es", max)
