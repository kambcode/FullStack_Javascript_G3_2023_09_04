const button = document.getElementById("myButton");
const secondaryTitle = document.getElementById("secondaryTitle");
console.log(button);

function myFunction() {
    console.log("Le di click al boton");
    button.style.color = 'green';

    secondaryTitle.innerHTML = "Nuevo texto"
}

const userForm = document.getElementById("userForm");
const passwordForm = document.getElementById("passwordForm");
const buttonPassword = document.getElementById("buttonPassword");

// console.log(userForm);
// console.log(passwordForm);

const showPassword = () => {
    // Los elementos de tipo input tienen un valor
    // y puedo acceder a ese valor con la propiedad value
    // Esete value SOLO existe para los input
   console.log('valor de el campo usuario', userForm.value);

   if (passwordForm.type == "password") {
    passwordForm.type = "text";
    buttonPassword.innerHTML = "Ocultar contraseña"
   } else {
    passwordForm.type = "password";
    buttonPassword.innerHTML = "Mostrar contraseña"
   }
  
}