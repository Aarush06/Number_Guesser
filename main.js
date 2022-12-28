//HTML VARIABLES
let guessBtn = document.getElementById('btn');
let guessInput = document.getElementById('guess');
let restartGame = document.getElementById("restart-btn");
let guessOutput = document.getElementById('guesses');
let textOutput = document.getElementById('difficultyText');
let easyMode = document.getElementById('easy');
let mediumMode = document.getElementById('medium');
let hardMode = document.getElementById('hard');

//JS VARIABLES

let randomNumber = randomNum(20);
let guesses = [];


//BUTTON CLICKED
easyMode.addEventListener('click', easy);
mediumMode.addEventListener('click', medium);
hardMode.addEventListener('click', hard);
restartGame.addEventListener('click', reload);
guessBtn.addEventListener("click", clickButton);

//FUNCTIONS
function outputRange(max) {
    textOutput.innerHTML = `Please enter a number between 0-${max}!`;
}
function randomNum(max) {
    return Math.floor(Math.random() * (max + 1))
}

function easy() {
    let max = 10;
    randomNumber = randomNum(max);
    outputRange(max);
}
function medium() {
    let max = 20;
    randomNumber = randomNum(max);
    outputRange(max);
}
function hard() {
    let max = 50;
    randomNumber = randomNum(max);
    outputRange(max);
}

function reload() {
    location.reload();
}

function clickButton() {
    //Print Guesses to Output Element
    guessOutput.innerHTML += guessInput.value + ", ";

    guesses.push(guessInput.value);
    if (guessInput.value == randomNumber) {
        alert("Congratulations! You Have Correctly Guessed The Number!")

        //Unnecessary grammar pet peeve fix
        if (guesses.length === 1) {
            guessOutput.innerHTML = `You correctly guessed the number 1 in 1 guess!`
        } else {
            guessOutput.innerHTML = `You correctly guessed the number ${randomNumber} in ${guesses.length} guesses!`
        }


    } else {
        alert("Incorrect. Submit Another Guess.");

    }
}


