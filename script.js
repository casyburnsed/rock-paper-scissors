// GLOBAL WIN COUNTER
let humanWins = 0;
let computerWins = 0;
let ties = 0;

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

// HUMAN CHOICE EVENTS TO DOM
document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('rock').addEventListener('click', () => getHumanChoice('rock'));
    document.getElementById('paper').addEventListener('click', () => getHumanChoice('paper'));
    document.getElementById('scissors').addEventListener('click', () => getHumanChoice('scissors'));
});

// HUMAN THROW
function getHumanChoice(userInput) {
    if (humanWins >= 5 || computerWins >= 5) {
        return;
    }
    console.log('User choice:', userInput);
    playRound(userInput);
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
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    console.log(`computer choice: ${computerChoice}`);
    const result = checkWinner(humanChoice, computerChoice);

    updateChoiceImages(humanChoice, computerChoice);
    
    if (result === 'You Win!') {
        humanWins++;
    } else if (result === 'Computer wins!') {
        computerWins++;
    } else if (result === 'Tie') {
        ties++;
    }
    
    console.log(`Human Wins: ${humanWins}`);
    console.log(`Computer Wins: ${computerWins}`);
    console.log(`Ties: ${ties}`);

    updateScoreBoard();
    checkGameWinner();
}

// DISPLAY SCOREBOARD TO DOM
function updateScoreBoard() {
    document.getElementById('human-score').textContent = humanWins;
    document.getElementById('computer-score').textContent = computerWins;
    document.getElementById('ties').textContent = ties;
}

// DISPLAY WINNER TO DOM
function checkGameWinner() {
    if (humanWins >= 5) {
        document.getElementById('message').textContent = 'You win the game!';
    } else if (computerWins >= 5) {
        document.getElementById('message').textContent = 'Computer wins the game!';
    }
}

// UPDATE CHOICE IMAGES
function updateChoiceImages(humanChoice, computerChoice) {
    const humanChoiceImage = document.getElementById('human-choice-image');
    const computerChoiceImage = document.getElementById('computer-choice-image');

    humanChoiceImage.src = `./images/${humanChoice}`;
    computerChoiceImage.src = `./images/${computerChoice}`;

    humanChoiceImage.style.display = 'block';
    computerChoiceImage.style.display = 'block';
}

