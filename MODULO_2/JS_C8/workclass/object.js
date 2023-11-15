const book = {
    name: "Memorias de una Geisha",
    author: "Not defined",
    price: 50,
    // getPrice: (unit) => {
    //     return "60 "+unit;
    // },
    getPrice: function(unit) {
        // const fullPrice = this.price + " " + unit;
        // return fullPrice;

        return this.price + " " + unit;
    },
    getPriceWithIva: function() {
        const iva = 19;
        const ivaAmount = this.price * iva / 100;
        const fullPrice = this.price + ivaAmount;
        return fullPrice;
    }
}
console.log('book name', book.name);
console.log('book price', book.price);
console.log('book price with unit', book.getPrice("COP"));
const response = book.getPriceWithIva();  
console.log('book price with unit', response);