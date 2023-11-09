function getComputerChoice() {
    let number = Math.floor(Math.random()*3);
    if (number === 1) {
        return "rock";
    } else if (number === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return("It's a tie!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return("You Lose! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return("You Lose! Scissors beats paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return("You Lose! Rock beats Scissors");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return("You Win! Paper beats Rock");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return("You Win! Scissors beats paper");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return("You Win! Rock beats Scissors");
    } return "Something went wrong";
}

function game() {
    let wins = 0;
    let loses = 0;

    while (wins != 5 && loses != 5) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.slice(0, 8) === "You Lose") {
            loses++;
        } else if (result.slice(0, 7) == "You Win") {
            wins++;
        }
    }
    console.log(`You won ${wins} times and lost ${loses} times.`);
}

game();