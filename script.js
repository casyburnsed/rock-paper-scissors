// GLOBAL WIN COUNTER
let humanWins = 0;
let computerWins = 0;

// COMPUTER THROW
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1: 
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// HUMAN THROW
function getHumanChoice() {
    let userInput = '';
        while (true) {
            userInput = prompt ('Please enter rock, paper, or scissors:');
            userInput = userInput.toLowerCase();
            if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
                break;
            } else {
                alert('Invalid choice. Please enter rock, paper, or scissors.');
            }
        }
        return userInput;
}

// SCORING SYSTEM
function checkWinner(getHumanChoice, getComputerChoice) {
    if (getHumanChoice === getComputerChoice) {
        return 'Tie';
    } else if (
        (getHumanChoice == 'rock' && getComputerChoice == 'scissors') ||
        (getHumanChoice == 'scissors' && getComputerChoice == 'paper') ||
        (getHumanChoice == 'paper' && getComputerChoice == 'rock')
        ) {
            return 'You Win!';
    } else {
        return 'Computer wins!'
    }
}

// PLAY 
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    const result = checkWinner(humanChoice, computerChoice);
    if (result === 'You Win!') {
        humanWins++;
    } else if (result === 'Computer wins!') {
        computerWins++;
    }
    return result;
}


const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();
console.log(`Computer choice: ${computerChoice}`);
console.log(`Human choice: ${humanChoice}`);
const result = playRound(humanChoice, computerChoice);
console.log(result);
console.log(`Human Wins: ${humanWins}`);
console.log(`Computer Wins: ${computerWins}`);




