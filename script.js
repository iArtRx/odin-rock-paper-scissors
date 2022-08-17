let win = `You won the round`;
let lose = `You lost the round`;
let tie = `Round tied`;
let playerSelection;
let computerSelection;
let playerScore = 0
let computerScore = 0;


getComputerChoice = () => {
    const computerPick = ["rock", "paper", "scissors"];
    const randomChoice = computerPick[Math.floor(Math.random() * computerPick.length)]

    return randomChoice;
}


playRound = (playerSelection) => {
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        playerScore ++;
        return win;
    }else if((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore ++;
        return lose;
    }else if(playerSelection === computerSelection) {
        return tie;
    }   
}


const buttons = document.querySelectorAll("button");
const gameBoard = document.querySelector("#game-board");

const start = document.querySelector("#start-menu");
start.addEventListener("click", e => {
    start.style.display = "none";
    gameBoard.style.display = "block";
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.id;
        console.log(playerSelection);

        let result = (playRound(playerSelection));
        console.log(result);

        scoreboard();

       if(playerScore === 5 || computerScore === 5){
        gameOver();
       }
       
    });
});
// Game Over Screen after the player or computer reaches the maximum score. 
gameOver = () => {
    console.log("Game Over");
    gameBoard.style.display = "none";
    playerScore = 0;
    computerScore = 0;
    start.style.display = "block";
}

// Scoreboard that keeps track of the score.
scoreboard = () => {
    console.log(playerScore);
    console.log(computerScore);
}








    





