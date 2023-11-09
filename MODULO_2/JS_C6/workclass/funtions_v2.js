const currentYear = 2023;

function calculateBirthYear(age) {
    const personBirthDate = currentYear - age;
    // console.log('La persona nacio en', personBirthDate);
    return personBirthDate;
    console.log('Cualquier cosa despues de el return NO se ejecuta');
}

const response = calculateBirthYear(30); // response es  igual a lo que retorno la funcion
console.log('La funcion retorno', response);
console.log('Año de nacimiento * 2', response * 2);
// console.log(personBirthDate); // Esto retorna error por que personBirthDate solo existe dentro de mi funcion 