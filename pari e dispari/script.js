//FUNZIONI
//Crea una funzione per generare un numero random
function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

//Crea una funzione per verificare se un numero è pari o dispari
function oddOrEven(number) {
    if (number % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

//ESERCIZIO
//Chiedi all'utente di inserire un numero da 1 a 5
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5."));

if (userNumber > 0 && userNumber < 6) {
    console.log("Hai inserito: " + userNumber);
}
else {
    console.log("Selezione non valida. Riaggiorna la pagina.");
}

//Chiedi all'utente di scegliere fra "Pari" o "Dispari"
let userChoice = prompt("Scegli Pari o Dispari");
userChoice = userChoice.toLowerCase();

if (userChoice === "pari") {
    console.log("Hai scelto pari.");
}
else if (userChoice === "dispari") {
    console.log("Hai scelto dispari.");
}
else {
    console.log("Selezione non valida. Riaggiorna la pagina.");
}

//Sommiamo il numero dell'utente al numero generato casualmente dal computer
const sumNumbers = userNumber + randomNumber();
console.log("La somma dei vostri numeri è: " + sumNumbers);

//Annunciamo il vincitore
if (userChoice === oddOrEven(sumNumbers)) {
    console.log("Hai vinto!")
}
else {
    console.log("Hai perso!")
}