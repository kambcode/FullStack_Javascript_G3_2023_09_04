let userPassword = prompt("Escribe la contraseña");

// if (userPassword == "123456") {
//     document.write("Acceso consedido")
// }

while (userPassword != "123456") {
    // Siempre que la condicion sea verdadera
    userPassword = prompt("Escribe la contraseña")
}
// Cuando la condicion de el while es falsa, el sale de el programa
document.write("Acceso consedido")