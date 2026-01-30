var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    var randomNr = Math.random();

    if (randomNr < 0.33) {
        return "rock"
    } else if (randomNr < 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    return prompt("Type your choice here (rock, paper or scissors)").toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            return "It's a draw"
        } else if (computerChoice === "paper") {
            computerScore++
            return "You lose, paper beats rock"
        } else {
            humanScore++
            return "You win, rock beats scissors"
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++
            return "You win, paper beats rock"
        } else if (computerChoice === "paper") {
            return "It's a draw"
        } else {
            computerScore++
            return "You lose, scissors beat paper"
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++
            return "You lose, rock beats scissors"
        } else if (computerChoice === "paper") {
            humanScore++
            return "You win, scissors beat paper"
        } else {
            return "It's a draw"
        }
    }

    return "A false value was entered, please choose out of rock, paper or scissors"

}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log("ROUND " + (i + 1))
        console.log(playRound(getHumanChoice(), getComputerChoice()))
        console.log("SCORE -> You: " + humanScore + ", Computer: " + computerScore);
    }
}

playGame()