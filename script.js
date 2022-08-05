function getComputerChoice() {
    const computerPick = ["Rock", "Paper", "Scissors"];
    const randomChoice = computerPick[Math.floor(Math.random() * computerPick.length)]

    console.log(randomChoice);
}

getComputerChoice();
