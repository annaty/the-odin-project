const rock = "rock";
const paper = "paper";
const scissor = "scissor";

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

const event_handler1 = (playRound, rock) => playRound(rock);

document.getElementById("button-rock").addEventListener("click", event_handler1); 
document.getElementById("button-paper").addEventListener("click", playRound("paper")); 
document.getElementById("button-scissor").addEventListener("click", playRound("scissor"));

function playRound(playerSelection) {
    let computerSelection = computerPlay;

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
    
    document.getElementById("statusMessage").innerHTML = message;
}
