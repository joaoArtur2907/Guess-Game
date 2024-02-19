'use strict';

let num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highNum = 0;

const displayM = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayS = function (message) {
  document.querySelector('.score').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let attempt = Number(document.querySelector('.guess').value);

  console.log(attempt);

  // if there is no input
  if (!attempt) {
    displayM('no value');
  }
  // if guess is wrong
  else if (attempt !== num) {
    if (score > 1) {
      displayM(attempt > num ? 'Lower' : 'Higher');
      score--;
      document.querySelector('.score').textContent = score;
      displayS(score);
    } else {
      displayM('you lost!');
      displayS(0);
    }
  }

  // when guess is correct
  else {
    displayM('Correct!');
    document.querySelector('.number').textContent = attempt;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highNum) {
      highNum = score;
      document.querySelector('.highscore').textContent = highNum;
    }
  }
});

// new game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  num = Math.trunc(Math.random() * 20) + 1;
  displayS(score);
  displayM('Start Guessing....');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
});
