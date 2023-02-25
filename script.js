let options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection=== options[0] && computerSelection === options[0]) {
        return "Tie! Rocks"
    } else if (playerSelection=== options[0] && computerSelection === options[1]) {
        computerScore++;
        return "You lost! Paper beats Rock"
    } else if (playerSelection=== options[0] && computerSelection === options[2]) {
        playerScore++;
        return "You won! Rock beats Scissors"
    } else if (playerSelection=== options[1] && computerSelection === options[0]) {
        playerScore++;
        return "You won! Paper beats Rock"
    } else if (playerSelection=== options[1] && computerSelection === options[1]) {
        return "Tie! Papers"
    } else if (playerSelection=== options[1] && computerSelection === options[2]) {
        computerScore++;
        return "You lost! Scissors beats Paper"
    } else if (playerSelection=== options[2] && computerSelection === options[0]) {
        computerScore++;
        return "You lost! Rock beats Scissors"
    } else if (playerSelection=== options[2] && computerSelection === options[1]) {
        playerScore++;
        return "You won! Scissors beats Paper"
    } else if (playerSelection=== options[2] && computerSelection === options[2]){
        return "Tie! Scissors"
    } else return "Something's wrong"
}

let scoreDisplay = document.getElementById('scoreDisplay');

function fight(playerSelection) {
    const computerSelection = getComputerChoice();
    scoreDisplay.innerText = playRound(playerSelection, computerSelection);
    scoreDisplay.innerText += " | Your Score: " + playerScore + " Computer: " + computerScore;
    if (computerScore === 5) {
        scoreDisplay.innerText = "LOST!!!";
        document.getElementById('bts').style.visibility = 'hidden';
    } else if (playerScore === 5) {
        scoreDisplay.innerText = "WON!!!";
        document.getElementById('bts').style.visibility = 'hidden';
    }
}

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        fight(playerSelection);
    });
});
