'use strict';

let messageEl = document.querySelector('.message');
let numberEl = document.querySelector('.number');
let scoreEl = document.querySelector('.score');
let highScoreEl = document.querySelector('.highscore');
let guessEl = document.querySelector('.guess');
let checkButtonEl = document.querySelector('.check');
let bodyEl = document.querySelector('body');
let againButtonEl = document.querySelector('.again');



//let myNumber = Math.floor((Math.random() * 20) + 1);
let max = 20
let min = 1
let myNumber = Math.floor(Math.random() * (max - min) + min);

let score = scoreEl.textContent

const again = () => {
    messageEl.textContent = "Start guessing..."
    scoreEl.textContent = 20;
    numberEl.textContent = "?"
    guessEl.value = ""
    numberEl.style.width = "30rem"
    bodyEl.style.backgroundColor = "black";
    score = scoreEl.textContent
    myNumber = Math.floor((Math.random() * 20) + 1);

    check()
}


const check = () => {
    //console.log(`Secret number is: ${myNumber}`)
    const guess = Number(guessEl.value)

    // No valid input
    if (!guess) {
        messageEl.textContent = "No number entered"
    } else {
        // Player wins
        if (guess === myNumber) {
            messageEl.textContent = "You guessed right"
            bodyEl.style.backgroundColor = "green";
            numberEl.style.width = "30rem"
            numberEl.textContent = myNumber
            highScoreEl.textContent = Number(scoreEl.textContent) > highScoreEl.textContent ? Number(scoreEl.textContent) : Number(highScoreEl.textContent)

            // Guess too high
        } else {
            if (score > 1) {
                messageEl.textContent = guess > myNumber ? "Guess is higher than my Number" : "Guess is smaller than my Number"
                score -= 1
                scoreEl.textContent = score
            } else {
                messageEl.textContent = "You lost the game!!!"
                score = 0
                scoreEl.textContent = score
                bodyEl.style.backgroundColor = "red";
            }
        }
    }
}

checkButtonEl.addEventListener('click', check())
againButtonEl.addEventListener('click', again())
