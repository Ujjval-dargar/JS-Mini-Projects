let num = Math.floor(Math.random() * 100) + 1;

let guessInput = document.getElementById("guessInput");
let submitGuess = document.getElementById("submitGuess");
let guessList = document.getElementById("guessList");
let resetGame = document.getElementById("resetGame");
let message = document.getElementById("result-msg");
let guessLeft = document.querySelector(".guess-left");

let attempts = 10;

function resetGameFunc() {
    num = Math.floor(Math.random() * 100) + 1;
    guessInput.value = "";
    guessList.innerHTML = "";
    attempts = 10;
    guessLeft.textContent = `Guesses Left : ${attempts}`;
    guessLeft.style.color = "#333";
    message.textContent = "";
    message.style.color = "#666";
    guessInput.disabled = false;
    submitGuess.disabled = false;
}

function submitGuessFunc() {
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a valid number from 1 to 100.";
        return;
    }
    if (guess === num) {
        message.textContent = "Congratulations! You guessed the number!";
        guessLeft.textContent = "You won!";
        message.style.color = "green";
        guessLeft.style.color = "green";
        guessInput.disabled = true;
        submitGuess.disabled = true;
        return;
    } else {
        attempts--;
        guessList.innerHTML += `<li>${guess}</li>`;
        if (attempts > 0) {
            if (guess < num) {
                message.textContent = "Too low! Try again.";
            } else {
                message.textContent = "Too high! Try again.";
            }
            guessLeft.textContent = `Guesses Left: ${attempts}`;
            guessInput.value = "";
        } else {
            message.textContent = `Game Over! The number was ${num}.`;
            guessLeft.textContent = "No guesses left!";
            message.style.color = "red";
            guessLeft.style.color = "red";
            guessInput.disabled = true;
            submitGuess.disabled = true;
        }
    }
}

resetGame.addEventListener("click", resetGameFunc);
submitGuess.addEventListener("click", submitGuessFunc);
