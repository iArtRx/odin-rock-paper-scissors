//DOM selectors
const buttons = document.querySelectorAll("button");
const scoreBoard = document.querySelector(".scoreboard");
const scoreBoardMessage = document.querySelector("#scoreboardMessage");
const displayPlayerScore = document.querySelector("#playerScore");
const displayComputerScore = document.querySelector("#computerScore");
const gameBoard = document.querySelector("#game-board");


//variables
let playerSelection;
let computerSelection;
let playerScore = 0
let computerScore = 0;

//Game Logic
getComputerChoice = () => {
    const computerPick = ["Rock", "Paper", "Scissors"];
    const randomChoice = computerPick[Math.floor(Math.random() * computerPick.length)]

    return randomChoice;
}

playRound = (playerSelection) => {
    computerSelection = getComputerChoice();
    console.log(computerSelection);
    if((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Rock")) {
        scoreBoardMessage.textContent = `${playerSelection} beats ${computerSelection}`;
        playerScore ++;
    }else if((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {
        scoreBoardMessage.textContent = `${computerSelection} beats ${playerSelection}`;
        computerScore ++;
    }else if(playerSelection === computerSelection) {
        scoreBoardMessage.textContent = `You both selected ${playerSelection}. Game tied.`
    }   
}


//Start Game and controls
const start = document.querySelector("#start-menu");
start.addEventListener("click", e => {
    start.style.display = "none";
    scoreBoard.style.display = "block";
    gameBoard.style.display = "block";
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.id;

        playRound(playerSelection);
        
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
    displayPlayerScore.textContent = `Player: ${playerScore}`;
    displayComputerScore.textContent = `Computer: ${computerScore}`;
};










    





