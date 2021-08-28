let playerPoints = 0;
let computerPoints = 0;
let message = "";

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

function playerPlay(move) {
    return move
}

document.getElementById("button-rock").addEventListener("click", playerPlay("rock")); 
document.getElementById("button-paper").addEventListener("click", playerPlay("paper")); 
document.getElementById("button-scissor").addEventListener("click", playerPlay("scissor"));
document.button.addEventListener("click", game());

function playRound() {
    // let playerSelection = window.prompt("Enter your move (rock, paper or scissor)");
    let computerSelection = computerPlay();
    playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "scissor") {
        playerPoints++;
        message = "The player wins! Rock beats scissor"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerPoints++;
        message = "The computer wins! Paper beats rock"
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        computerPoints++;
        message = "The computer wins! Scissor beats paper"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerPoints++;
        message = "The player wins! Paper beats rock"
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        playerPoints++;
        message = "The player wins! Scissor beats paper"
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        computerPoints++;
        message = "The computer wins! Rock beats scissor"
    } else if (playerSelection === computerSelection) {
        message = "It's a tie!"
    } else {
        message = "please input a correct value"
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        playRound();
        document.getElementById("statusMessage").innerHTML = message;
    }
}
