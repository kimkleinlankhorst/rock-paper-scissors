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
    var resultStr = ""

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            return "It's a draw, you both chose rock"
        } else if (computerChoice === "paper") {
            computerScore++
            return "You lose, paper beats rock"
        } else if (computerChoice === "scissors") {
            humanScore++
            return "You win, rock beats scissors"
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++
            return "You win, paper beats rock"
        } else if (computerChoice === "paper") {
            return "It's a draw, you both chose paper"
        } else if (computerChoice === "scissors") {
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
        } else if (computerChoice === "scissors") {
            return "It's a draw, you both chose scissors"
        }
    }

    if (resultStr === "") {
        resultStr = "A false value was entered, please choose out of rock, paper or scissors"
    }

    return resultStr;

}

// function playGame() {
//     humanScore = 0;
//     computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         console.log("ROUND " + (i + 1))
//         console.log(playRound(getHumanChoice(), getComputerChoice()))
//         console.log("SCORE -> You: " + humanScore + ", Computer: " + computerScore);
//     }
// }

// playGame()

function createScoreText() {
    if (humanScore <= 4 && computerScore <= 4) {
        return "SCORE = You: " + humanScore + ", Computer: " + computerScore;
    } else if (humanScore > 4) {
        humanScore = 0;
        computerScore = 0;
        return "You won! Now you can start a new game, first to five wins"
    } else if (computerScore > 4) {
        humanScore = 0;
        computerScore = 0;
        return "The computer won, Now you can start a new game, first to five wins"
    }
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const resultDiv = document.querySelector(".result");
const scoreDiv = document.querySelector(".score");

scoreDiv.textContent = createScoreText();

rockButton.onclick = () => {
    resultDiv.textContent = (playRound("rock", getComputerChoice()));
    scoreDiv.textContent = createScoreText();
};
paperButton.onclick = () => {
    resultDiv.textContent = (playRound("paper", getComputerChoice()))
    scoreDiv.textContent = createScoreText();
};
scissorsButton.onclick = () => {
    resultDiv.textContent = (playRound("scissors", getComputerChoice()))
    scoreDiv.textContent = createScoreText();
};


