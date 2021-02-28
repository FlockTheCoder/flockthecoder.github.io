// Word Riddle

var playerName = "";
var score = 0;
var wordToGuess = "";
var wordToGuessTrue = "";
var wordToGuessShown = "";

var wordList = ["Affe", "Katze", "Hund", "Banane", "Apfel", "Zitrone", "Ananas", "Birne", "Mango", "Tomate", "Kuh", "Eichhoernchen", "Karina", "Florian", "Liebe", "Avocado", "Rucola", "Cashewmus", "Haferbroetchen", "Hummus"]

var wordRiddleButton = document.querySelector(".btn-word-riddle");
var wordToGuess = document.querySelector(".word-to-guess");


wordRiddleButton.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random()*wordList.length);

    wordToGuessTrue = wordList[randomNumber].toUpperCase();
    wordToGuessShown = wordToGuessTrue.replace(/[a-zA-Z0-9]/g,"-");

    wordToGuess.innerText = wordToGuessShown;
})


var charGuessBtn = document.querySelector(".btn-word-guess");
var charGuessInput = document.querySelector(".word-riddle-guess");

charGuessBtn.addEventListener("click", function() {
    var charGuess = charGuessInput.value;

    checkCharGuess(charGuess);

    charGuessInput.value = "";
})

charGuessInput.addEventListener("keypress", function(anyKey) {
    if (anyKey.key === "Enter") {
        var charGuess = charGuessInput.value;

        checkCharGuess(charGuess);
    
        charGuessInput.value = "";
    }
})

function checkCharGuess(guess) {

    guess = guess.toUpperCase();

    if (guess.length === 1) {
        
        for (let i = 0; i < wordToGuessShown.length; i++) {      
            if (wordToGuessTrue[i] == guess) {
                wordToGuessShown = wordToGuessShown.substr(0,i) + guess + wordToGuessShown.substr(i + guess.length)
                wordToGuess.innerText = wordToGuessShown;
            } 
        }
    } else
    
    if (guess == wordToGuessTrue) {        
        wordToGuessShown = guess;
        wordToGuess.innerText = wordToGuessShown;
    }
}


