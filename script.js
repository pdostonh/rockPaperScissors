let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection=== options[0] && computerSelection === options[0]) {
        return "Tie! Rocks"
    } else if (playerSelection=== options[0] && computerSelection === options[1]) {
        return "You lost! Paper beats Rock"
    } else if (playerSelection=== options[0] && computerSelection === options[2]) {
        return "You won! Rock beats Scissors"
    } else if (playerSelection=== options[1] && computerSelection === options[0]) {
        return "You won! Paper beats Rock"
    } else if (playerSelection=== options[1] && computerSelection === options[1]) {
        return "Tie! Papers"
    } else if (playerSelection=== options[1] && computerSelection === options[2]) {
        return "You lost! Scissors beats Paper"
    } else if (playerSelection=== options[2] && computerSelection === options[0]) {
        return "You lost! Rock beats Scissors"
    } else if (playerSelection=== options[2] && computerSelection === options[1]) {
        return "You won! Scissors beats Paper"
    } else if (playerSelection=== options[2] && computerSelection === options[2]){
        return "Tie! Scissors"
    } else return "Something's wrong"
}


function game() {
    for (let i = 0; i < 5; i++) {
        const newPlayerSelection = prompt("choose and type rock, paper or scissors: ");
        const newComputerSelection = getComputerChoice();
        alert(playRound(newPlayerSelection, newComputerSelection));
    }
}

game();
/*
prompt method happened to be a pop-up in the page not from console
therefore I found using alert as it's also pop-up instead of console.log
because it's uncomfortable to open console and 
    you have to choose all 5 choice before seeing if you won or not
*/