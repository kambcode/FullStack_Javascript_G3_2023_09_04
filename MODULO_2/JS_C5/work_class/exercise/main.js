const validWords = ["esfero", "pan", "kambcode"];
let history = [];

let userWord = prompt("Escribe una palabra");

while( !validWords.includes(userWord) ){
    // todo esto se ejecuta mientras que la codicion sea verdadera
    history.push(userWord);
    console.log('historial', history);
    userWord = prompt("Palabra invalida, Escribe otra palabra");
}

document.write("<h2>GANASTE!!</h2>")

