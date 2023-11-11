const fistName = "Kambcode"; // String
const age = 20; // number
const isBootcamp = true; // Boolen
const students = ["Elizabeth", "Orian", "Alejandra", "Robin", "Guillermo"]; // array

const person = {  // Objeto
    firstName: "Camilo", // la propiedad firstName es un string
    lastName: "Montoya", // la propiedad lastName es un string
    age: 31, // la propiedad age es un number
};

console.log('Objeto persona', person);
console.log('nombre de la persona', person.firstName);
console.log('edad de la persona', person.age);

const product = {
    name: "Lantas",
    description: "Estas son unas llantas de tamaño rin 15",
    price: 15.99,
    shipCost: 5,
    sizes: ["32Pcs", "16Pcs", "48Pcs"],
    stockAmmount: 100,
    shipToColombia: true, // false
    pictures: [ "http://photo1.png",  "http://photo2.png",  "http://photo3.png"],
}

console.log("Precio de mi producto", product.price);
const priceTotal = product.price + product.shipCost;
console.log("Precio de mi producto + el costo de envio", priceTotal);

const product2 = {
    name: "Esfero",
    description: "Este eun esfero de tinta",
    price: 5.99,
    sizes: ["normal"],
    stockAmmount: 30,
    shipToColombia: false, // false
    pictures: [ "http://photo1.png",  "http://photo2.png",  "http://photo3.png"]
}