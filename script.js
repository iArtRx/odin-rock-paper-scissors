//DOM selectors
const buttons = document.querySelectorAll("button");
const scoreBoard = document.querySelector(".scoreboard");
const scoreBoardMessage = document.querySelector("#scoreboardMessage");
const displayPlayerScore = document.querySelector("#playerScore");
const displayComputerScore = document.querySelector("#computerScore");
const gameBoard = document.querySelector("#game-board");
const displayGameOver = document.querySelector(".game-over");


//variables
let playerSelection;
let computerSelection;
let playerScore = 0
let computerScore = 0;

//Game Logic
getComputerChoice = () => {
    const computerPick = ["Rock", "Paper", "Scissors"];

    return random(computerPick);
}

playRound = (playerSelection) => {
    computerSelection = getComputerChoice();
    if((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Rock")) {
        scoreBoardMessage.textContent = winMessage(playerSelection, computerSelection);
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
    gameBoard.style.display = "none";
    scoreBoard.style.display = "none";
    displayGameOver.style.display = "block";
    const para = document.createElement("p");
    
    if(playerScore === 5){
        para.textContent = "Congratulations! You are Victorious!";
        displayGameOver.append(para);
    }else {
        para.textContent = "You have been defeated...";
        displayGameOver.append(para);
    }
}

// Scoreboard that keeps track of the score.
scoreboard = () => {
    displayPlayerScore.textContent = `Player: ${playerScore}`;
    displayComputerScore.textContent = `Computer: ${computerScore}`;
};

winMessage = (playerSelection, computerSelection) => {
    const winArray = [];
    winArray[0] = `You win this round! ${playerSelection} beats ${computerSelection}`;
    winArray[1] = `${computerSelection} was no match for ${playerSelection}. You win!`;
    winArray[2] = `${playerSelection} dominates ${computerSelection}. You take this round!`;
    return random(winArray);
}

//Helper Functions
random = (array) => {
    return array[[Math.floor(Math.random() * array.length)]];
} 











    





