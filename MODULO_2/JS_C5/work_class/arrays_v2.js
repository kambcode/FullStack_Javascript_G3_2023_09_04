let shoppingList = ["gelatina", "arroz", "lentejas", "manzanas", "uvas"];

console.log("Lista de compras", shoppingList);

// para agregar elementos a una lista puedo usar el metodo push
shoppingList.push("peras");
console.log("Mi nueva lista de compras es", shoppingList);

shoppingList.push("pan", "leche"); // esto agrega dos elementos a la lista
console.log("Mi nueva lista de compras es", shoppingList);

console.log("Mi lista de compras tiene uvas?", shoppingList.includes("uvas")); // true o false

if (!shoppingList.includes("huevos")) {
    console.log("Tu lista No tiene huevos");
}

// Podemos contar los elementos de un arreglo con el metodo lenght
console.log("Mi lista tiene", shoppingList.length , "elementos")