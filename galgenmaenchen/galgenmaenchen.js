
// Add your JavaScript code here
// Example:
const words = ["apfel", "banane", "kirsche", "dattel", "holunderbeere", "fenster", "schrank", "haus", "baum", "richter", "kirche", "schleichen", "kreischen"];
let word = "";
let guessedLetters = [];

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

function startGame() {
    word = getRandomWord();
    guessedLetters = [];
    displayWord();
    displayGuesses();
}

document.addEventListener("keydown", event => {
    const letter = event.key.toLowerCase();
    if (/[a-z]/.test(letter) && !guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        displayWord();
        displayGuesses();
    }
});

startGame();
