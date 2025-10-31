let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rock = "ROCK";
    let paper = "PAPER";
    let scissors = "SCISSORS";
    let choice = undefined;
    let random = Math.random();
    if (random < 0.33) {
        choice = rock;
    }
    else if (random < 0.66) {
        choice = paper;
    }
    else {
        choice = scissors;
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    choice = choice.toUpperCase();
    if (choice !== "ROCK" && choice !== "PAPER" && choice !== "SCISSORS") {
        console.log("Please enter a valid answer!");
        return getHumanChoice();
    }
    return choice;
}


function playRound(humanChoice, computerChoice) { 

    if (humanChoice === computerChoice) return `Tie! ${humanChoice} ties with ${computerChoice}!`;
    if ((humanChoice === "ROCK" && computerChoice === "SCISSORS")
        || (humanChoice === "SCISSORS" && computerChoice === "PAPER")
        ||  (humanChoice === "PAPER" && computerChoice === "ROCK")) {
        humanScore += 1;
        return `You win! ${humanChoice} beats ${computerChoice}!`;
    } else {
        computerScore += 1;
        return `You lose! ${humanChoice} loses to ${computerChoice}!`;
    }
}

function playGame() {
    //humanScore = 0;
    //computerScore = 0;

    for(let i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
    return console.log(`You Scored: ${humanScore}!\nComputer Scored: ${computerScore}!\nYou both tied ${5 - (humanScore + computerScore)} times!`);
}

playGame();
