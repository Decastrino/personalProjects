'use strict';

var messageEl = document.querySelector('.message');
var numberEl = document.querySelector('.number');
var scoreEl = document.querySelector('.score');
var highScoreEl = document.querySelector('.highscore');
var guessEl = document.querySelector('.guess');
var checkButtonEl = document.querySelector('.check');
var bodyEl = document.querySelector('body');
var againButtonEl = document.querySelector('.again'); //let myNumber = Math.floor((Math.random() * 20) + 1);

var max = 20;
var min = 1;
var myNumber = Math.floor(Math.random() * (max - min) + min);
var score = scoreEl.textContent;

var again = function again() {
  messageEl.textContent = "Start guessing...";
  scoreEl.textContent = 20;
  numberEl.textContent = "?";
  guessEl.value = "";
  numberEl.style.width = "30rem";
  bodyEl.style.backgroundColor = "black";
  score = scoreEl.textContent;
  myNumber = Math.floor(Math.random() * 20 + 1);
  check();
};

var check = function check() {
  //console.log(`Secret number is: ${myNumber}`)
  var guess = Number(guessEl.value); // No valid input

  if (!guess) {
    messageEl.textContent = "No number entered";
  } else {
    // Player wins
    if (guess === myNumber) {
      messageEl.textContent = "You guessed right";
      bodyEl.style.backgroundColor = "green";
      numberEl.style.width = "30rem";
      numberEl.textContent = myNumber;
      highScoreEl.textContent = Number(scoreEl.textContent) > highScoreEl.textContent ? Number(scoreEl.textContent) : Number(highScoreEl.textContent); // Guess too high
    } else {
      if (score > 1) {
        messageEl.textContent = guess > myNumber ? "Guess is higher than my Number" : "Guess is smaller than my Number";
        score -= 1;
        scoreEl.textContent = score;
      } else {
        messageEl.textContent = "You lost the game!!!";
        score = 0;
        scoreEl.textContent = score;
        bodyEl.style.backgroundColor = "red";
      }
    }
  }
};

checkButtonEl.addEventListener('click', check);
againButtonEl.addEventListener('click', again);