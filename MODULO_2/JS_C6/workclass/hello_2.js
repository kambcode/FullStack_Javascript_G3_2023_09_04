function sayHello(name, lastName, age) {
    // La funcion va a recibir un nombre y una edad
    // Y va a imprimir en consola el nombre de la persona y el año de nacimiento
    const birthYear = 2023 - age;
    const fullName = name + " " + lastName;
    console.log("Hola", fullName, ', nacisite en', birthYear);
}

sayHello("Pablo", "Perez", 22);
sayHello("Ana", "Rodirguez", 35);