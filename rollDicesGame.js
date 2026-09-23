let playerScore = 0;
let computerScore = 0;
let rollButton = document.getElementById("rollButton");
let dicePlayer = document.getElementById("dicePlayer");
let diceComputer = document.getElementById("diceComputer");
let playerScoreDisplay = document.getElementById("playerScore");
let computerScoreDisplay = document.getElementById("computerScore");
let winnerDisplay = document.getElementById("winner");
let restartButton = document.getElementById("restartButton");

function rollDice() {
    restartButton.disabled = true;
    var randomPlayerNumber = Math.floor(Math.random() * 6) + 1;
    var randomComputerNumber = Math.floor(Math.random() * 6) + 1;
    dicePlayer.src = "image/dice-" + randomPlayerNumber + ".png";
    diceComputer.src = "image/dice-" + randomComputerNumber + ".png";
    playerScore += randomPlayerNumber;
    computerScore += randomComputerNumber;
    playerScoreDisplay.textContent = "Player's Score: " + playerScore;
    computerScoreDisplay.textContent = "Computer's Score: " + computerScore;
    if (playerScore >= 50 && computerScore >= 50) {
        winnerDisplay.textContent = "Draw the game!!";
        rollButton.disabled = true;
        restartButton.disabled = false;
    } else if (playerScore >= 50) {
        winnerDisplay.textContent = "🎉🎉🎉 Player is the winner 🎉🎉🎉";
        rollButton.disabled = true;
        restartButton.disabled = false;
    } else if (computerScore >= 50) {
        winnerDisplay.textContent = "🎉🎉🎉 Computer is the winner 🎉🎉🎉";
        rollButton.disabled = true;
        restartButton.disabled = false;
    } else {
        winnerDisplay.textContent = "";
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "Player's Score: 0";
    computerScoreDisplay.textContent = "Computer's Score: 0";
    dicePlayer.src = "image/dice-6.png";
    diceComputer.src = "image/dice-6.png";
    winnerDisplay.textContent = "";
    rollButton.disabled = false;
}