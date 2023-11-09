
const pabloAge = 20;
const juanAge = 33;
const pedroAge = 47;

function calculateBirthYear(age) {
    const currentYear = 2023;
    const personBirthDate = currentYear - age;
    console.log('La persona nacio en', personBirthDate);
}

calculateBirthYear(30);
calculateBirthYear(50);
calculateBirthYear(pabloAge);


// const pabloBrithYear =  currentYear - pabloAge; // 2003
// console.log('pablo nacio en', pabloBrithYear);

// const juanBrithYear =  currentYear - juanAge;
// console.log('juan nacio en', juanBrithYear);

// const pedroBrithYear =  currentYear - pedroAge; 
// console.log('pedro nacio en', pedroBrithYear);