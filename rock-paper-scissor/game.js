function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissor") {
        return "The player wins! Rock beats scissor"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "The computer wins! Paper beats rock"
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        return "The computer wins! Scissor beats paper"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "The player wins! Paper beats rock"
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        return "The player wins! Scissor beats paper"
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        return "The computer wins! Rock beats scissor"
    } else if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else {
        return "please input a correct value"
    }
}

function game(playerSelection, computerSelection) {
    for (i = 0; i < 5; i++) {
        return playRound(playerSelection, computerSelection)
    }
}

const pMove = window.prompt("Enter your move (rock, paper or scissor)");
const cMove = computerPlay();
console.log(game(pMove, cMove));