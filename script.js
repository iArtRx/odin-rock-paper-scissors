function getComputerChoice() {
    const computerPick = ["Rock", "Paper", "Scissors"];
    const randomChoice = computerPick[Math.floor(Math.random() * computerPick.length)]

    return randomChoice;
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        console.log("You Win! " + playerSelection + " beats " + computerSelection + "!");
    }
    else if ((playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock") || (playerSelection === "Rock" && computerSelection === "Paper")) {
        console.log("You Lose... " + computerSelection + " beats " + playerSelection + "!");
    }
    else {
        console.log("Tie Game!");
    }
}


playRound(playerSelection,computerSelection);
