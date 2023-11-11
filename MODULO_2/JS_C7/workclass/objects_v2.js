const persona = {
    fistName: "Camilo",
    lastName: "Montoya",
    age: 30,
    favouriteColors: ["black", "white"],
    // sayHello: function () {
    //     console.log('HOLA SOY UNA PERSONA');
    // }
    sayHello: () => {
        const saludo = "HOLA SOY UNA PERSONA";
        // console.log('Este console.log esat dentro de sayHello')
        return saludo;
    },
}

console.log('Nombre completo Persona ', persona.fistName + ' '+ persona.lastName);
console.log('edad', persona.age);

const response = persona.sayHello();
console.log('saludar', response);