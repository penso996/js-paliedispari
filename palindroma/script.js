let chosenWord = prompt("Inserisci una parola.");

let palindrome = isPalindrome(chosenWord);
if (palindrome) {
    console.log("La parola che hai inserito è un palindromo.");
} else {
    console.log("La parola che hai inserito NON è un palindromo.");
}

function isPalindrome(word) {
    let normalizedWord = word.toLowerCase();

    let reversedWord = normalizedWord.split("");
    reversedWord = reversedWord.reverse();
    reversedWord = reversedWord.join("");

    return normalizedWord === reversedWord;
}