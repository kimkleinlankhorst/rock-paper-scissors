console.log("TEST");

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

console.log(getComputerChoice());