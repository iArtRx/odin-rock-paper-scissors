//DOM selectors
const inputs = document.querySelectorAll("input");
const scoreBoard = document.querySelector(".scoreboard");
const scoreBoardMessage = document.querySelector("#scoreboardMessage")
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const gameBoard = document.querySelector(".gameboard");
const displayGameOver = document.querySelector(".game-over");


//variables 
let playerChoice;
let computerChoice;
let playerScore = 0
let computerScore = 0;

//Game Logic
getComputerChoice = () => {
    const computerPick = ["Rock", "Paper", "Scissors"];

    return random(computerPick);
}

playRound = (playerChoice) => {
    computerChoice = getComputerChoice();
    if((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Scissors" && computerChoice === "Paper") || (playerChoice === "Paper" && computerChoice === "Rock")) {
        scoreBoardMessage.textContent = winMessage(playerChoice, computerChoice);
        playerScore ++;
    }else if((playerChoice === "Rock" && computerChoice === "Paper") || (playerChoice === "Paper" && computerChoice === "Scissors") || (playerChoice === "Scissors" && computerChoice === "Rock")) {
        scoreBoardMessage.textContent = loseMessage(playerChoice, computerChoice);
        computerScore ++;
    }else if(playerChoice === computerChoice) {
        scoreBoardMessage.textContent = drawMessage(playerChoice);
    }   
}


//Start Game and controls
const start = document.querySelector(".start-menu");
start.addEventListener("click", () => {
    start.style.display = "none";
    scoreBoard.style.display = "flex";
    gameBoard.style.display = "flex";
    scoreboard();
});

inputs.forEach((input) => {
    input.addEventListener("click", () => {
        playerChoice = input.id;

        playRound(playerChoice);

        scoreboard();
        
       if(playerScore === 5 || computerScore === 5){
        gameOver();
       }
       
    });
});
// Game Over Screen after the player or computer reaches the maximum score. 
gameOver = () => {
    document.body.style.backgroundColor = "black";
    gameBoard.style.display = "none";
    scoreBoard.style.display = "none";
    displayGameOver.style.display = "flex";
    const gameOverMessage = document.createElement("h2");
    const endGameMessage = document.createElement("p");
    const resetButton = document.createElement("button");
    
    if(playerScore === 5){
        gameOverMessage.textContent = "YOU WON!"
        displayGameOver.append(gameOverMessage);
        endGameMessage.textContent = "Congratulations Champion.";
        displayGameOver.append(endGameMessage);
    }else {
        gameOverMessage.textContent = "GAME OVER";
        displayGameOver.append(gameOverMessage);
        endGameMessage.textContent = "You have been defeated...";
        displayGameOver.append(endGameMessage);
    }

    displayGameOver.append(resetButton);
    resetButton.textContent = "Play Again";
    resetButton.addEventListener("click", () => {
        reset();
        //clears the Game Over Screen
        displayGameOver.removeChild(gameOverMessage)
        displayGameOver.removeChild(endGameMessage);
        displayGameOver.removeChild(resetButton);
        document.body.style.backgroundColor = "white";      
    });
}

// Resets variables and displays
reset = () => {
    playerScore = 0;
    computerScore = 0;
    scoreboard();
    scoreBoardMessage.textContent = "";
    scoreBoard.style.display = "flex";
    gameBoard.style.display = "flex";
}

// Scoreboard that keeps track of the score.
scoreboard = () => {
    player.textContent = `Player`;
    const displayPlayerScore = document.createElement("p");
    displayPlayerScore.textContent = `${playerScore}`;
    player.appendChild(displayPlayerScore);
    computer.textContent = `Computer`;
    const displayComputerScore = document.createElement("p");
    displayComputerScore.textContent = `${computerScore}`;
    computer.appendChild(displayComputerScore);
};

//End of Round messages
winMessage = (playerChoice, computerChoice) => {
    const winArray = [];
    winArray[0] = `You win this round! ${playerChoice} beats ${computerChoice}`;
    winArray[1] = `Easy Win there for ${playerChoice}. ${computerChoice} stood no chance!`;
    winArray[2] = `${playerChoice} dominates ${computerChoice}.`;
    return random(winArray);
}

loseMessage = (playerChoice, computerChoice) => {
    const loseArray = [];
    loseArray[0] = `${computerChoice} easily defeats ${playerChoice}.`;
    loseArray[1] = `${playerChoice} was no match ${computerChoice}.`;
    loseArray[2] = `Take the L. No way ${playerChoice} can beat ${computerChoice}`;
    return random(loseArray);
}

drawMessage = (playerChoice) => {
    const drawArray = [];
    drawArray[0]=`This time you are evenly matched.`;
    drawArray[1]=`Both of you picked ${playerChoice}. It's a draw.`;
    drawArray[2]=`You played ${playerChoice}. They played ${playerChoice}. Insert Spiderman meme.`;
    return random(drawArray);
}

//Randomiser
random = (array) => {
    return array[[Math.floor(Math.random() * array.length)]];
} 

//Icon Selector
let rockIcon = document.createElement("img");
rockIcon.src = "images/rock.png";












    





