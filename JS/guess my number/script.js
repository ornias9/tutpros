'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'π Correct Number! π';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 5;

document.querySelector('.guess').value = 23; //inputting value 23 from js
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //WHEN THERE IS NO INPUT
  if (!guess) {
    // document.querySelector('.message').textContent = 'π« No Number';
    displayMessage('π« No Number');

    //WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'ππ Correct Number';
    displayMessage('ππ Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //    **********   CODE FOR BELLOW DUPLICATE CODE AFTER REFACTORING   ********
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'πToo High!' : 'πToo Low!';
      displayMessage(guess > secretNumber ? 'πToo High!' : 'πToo Low!');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = 'π₯ You lost the game';
      displayMessage('π₯ You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  /*                      ********  duplicate code present(REFACTORING EXAMPLE)   ********
  //WHEN GUESS IS TOO HIGH
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'πToo High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'π₯ You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } 
  //WHEN GUESS IS TOO LOW
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'πToo Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'π₯ You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
*/
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.score').textContent = score;
  displayScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
