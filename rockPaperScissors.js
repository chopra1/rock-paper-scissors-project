console.log('hi');

const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  return userInput;
} else {
  console.log('Error');
};
};
getUserChoice('rock');

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  };
};
getComputerChoice();

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
  return "the game was a tie.";
  };
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
    return "computer won";
  } else {
    return 'you won';
  };
};
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'computer won';
} else {
  return 'you won';
};
};
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'computer won'
  } else {
    return 'you won';
  };
};
if (userChoice === 'bomb') {
  return 'you won'; 
};
};
determineWinner('paper', 'stone');
//console.log(determineWinner('paper', 'stone'));

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('Computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();