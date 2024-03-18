
// Add your JavaScript code here
// Example:
const words = ["apfel", "banane", "kirsche", "dattel", "holunderbeere", "fenster", "schrank", "haus", "baum", "richter", "kirche", "schleichen", "kreischen", "wolken", "ananas"];
let word = "";
let guessedLetters = [];
let typedWrong = 0;

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
    const wordDisplay = document.getElementById("word-display");
    wordDisplay.textContent = word
        .split("")
        .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
        .join(" ");
}

function displayGuesses() {
    const guessesDisplay = document.getElementById("guesses");
    guessesDisplay.textContent = `Erratene Buchstaben: ${guessedLetters.join(", ")}`;
}


function checkIfGuessedCorrectly(letter){
    let result = word.includes(letter);
    if (!result) {
        typedWrong++;
        const wrongDisplay = document.getElementById("typed-wrong-display");
        wrongDisplay.textContent = typedWrong.toString();
    }
    return result;
}

function startGame() {
    word = getRandomWord();
    guessedLetters = [];
    typedWrong = 0;
    displayWord();
    displayGuesses();
}

document.addEventListener("keydown", event => {
    const letter = event.key.toLowerCase();
    if (/[a-z]/.test(letter) && !guessedLetters.includes(letter)) {
        guessedLetters.push(letter);

        checkIfGuessedCorrectly(letter);
        displayWord();
        displayGuesses();
    }
});

startGame();
