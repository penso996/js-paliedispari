//Chiedi all'utente di inserire una parola
let inputWord = prompt("Inserisci una parola.");

//Usa il risultato della funzione creata in modo che il valore booleano dia un messaggio personalizzato all'utente
if (isPalindrome(inputWord)) {
    console.log("La parola che hai inserito è un palindromo.");
} else {
    console.log("La parola che hai inserito NON è un palindromo.");
}

//Crea la funzione che verifica se la parola inserita sia un palindromo o meno
function isPalindrome(word) {
    let normalizedWord = word.toLowerCase();

    let reversedWord = normalizedWord.split("");
    reversedWord = reversedWord.reverse();
    reversedWord = reversedWord.join("");

    return normalizedWord === reversedWord;
}