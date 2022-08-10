function getComputerChoice() {
    const computerPick = ["Rock", "Paper", "Scissors"];
    const randomChoice = computerPick[Math.floor(Math.random() * computerPick.length)]

    return randomChoice;
}

const playerSelection = prompt("Rock, Paper or Scissors? Please Make Your Choice").toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

console.log(playerSelection);
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("You Win! " + playerSelection + " beats " + computerSelection + "!");
    }
    else if ((playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "paper")) {
        console.log("You Lose... " + computerSelection + " beats " + playerSelection + "!");
    }
    else if (playerSelection === computerSelection) {
        console.log("Tie Game! You both played " + playerSelection);
    }
}

playRound(playerSelection, computerSelection);
