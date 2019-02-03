alert('Welcome to the Rock Paper and Scissors game!');

while(true) {
  var choice = prompt('What will you play? rock, paper or scissors?');
  var opponentChoice = Math.ceil(Math.random() * 3);

  switch(opponentChoice) {
    case 1: opponentChoice = 'paper'; 
    case 2: opponentChoice = 'rock';
    case 3: opponentChoice = 'scissors';
  }

  var playAgain;
  if (choice === opponentChoice) {
    playAgain = confirm('Opponent had: ' + opponentChoice + '. DRAW!');
  } else if (choice === 'paper' && opponentChoice === 'rock') {
    playAgain = confirm('Opponent had: ' + opponentChoice + '. YOU WON :)!');
  } else if (choice === 'paper'  && opponentChoice === 'scissors') {
    playAgain = confirm('Opponent had: ' + opponentChoice + '. YOU LOST :(!');
  } else if (choice === 'rock' && opponentChoice === 'scissors') {
    playAgain = confirm('Opponent had: ' + opponentChoice + '. YOU WON :)!');
  } else if (choice === 'rock'  && opponentChoice === 'paper') {
    playAgain = confirm('Opponent had: ' + opponentChoice + '. YOU LOST :(!');
  } else if (choice === 'scissors'  && opponentChoice === 'paper') {
    playAgain = confirm('Opponent had: ' + opponentChoice + '. YOU WON :)!');
  } else if (choice === 'scissors' && opponentChoice === 'rock') {
    playAgain = confirm('Opponent had: ' + opponentChoice + '. YOU LOST :(!');
  } 
}