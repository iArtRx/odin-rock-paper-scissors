getComputerChoice = () => {
    const computerPick = ["rock", "paper", "scissors"];
    const randomChoice = computerPick[Math.floor(Math.random() * computerPick.length)]

    return randomChoice;
}


playRound = (playerSelection, computerSelection) => {
    if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        return win;
    }else if((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        return lose;
    }else if(playerSelection === computerSelection) {
        return tie;
    }   
}

let win = `You won the round`;
let lose = `You lost the round`;
let tie = `Round tied`;


game = () => {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {

        let playerSelection = prompt("Choose your weapon: Rock, Paper or Scissors?").toLowerCase();
        console.log(playerSelection);

        let computerSelection = getComputerChoice();
        console.log(computerSelection);

        let result = (playRound(playerSelection, computerSelection));
        if(result === win){
            playerScore += 1;
        }else if(result === lose){
            computerScore += 1;
        }

        console.log(result);
    }

    if(playerScore > computerScore){
        console.log(`Your Score is ${playerScore}. The Computer Score is ${computerScore}. You Won the Game!`)
    }else if(computerScore > playerScore){
        console.log(`Your Score is ${playerScore}. The Computer Score is ${computerScore}. You Lost the Game...`)
    }else if(playerScore === computerScore){
        console.log(`You and the Computer both ended with a score of: ${playerScore}. The Game was a Draw.`)
    }
}


game();