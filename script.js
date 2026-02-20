
const choices = ["Bear", "Ninja", "Hunter"];
// count of each win with the player and the computer
let playerWins = 0;
let computerWins = 0;
const btnBear = document.getElementById("btn-bear");
const btnNinja = document.getElementById("btn-ninja");
const btnHunter = document.getElementById("btn-hunter");
const btnPlayAgain = document.getElementById("btn-play-again");
const resultsArea = document.getElementById("results-area");
const roundResultText = document.getElementById("round-result-text");
const playerScoreDisplay = document.getElementById("player-score");
const compScoreDisplay = document.getElementById("comp-score");

// event listeners for each choice
btnBear.addEventListener("click", function() { playGame("Bear"); });
btnNinja.addEventListener("click", function() { playGame("Ninja"); });
btnHunter.addEventListener("click", function() { playGame("Hunter"); });
btnPlayAgain.addEventListener("click", function() {
    resultsArea.style.display = "none";
});
// this is the function for the main game where you have the random choice for the computer
function playGame(playerChoice) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    let matchResult = "";
    // conditionals for each case
    if (playerChoice === computerChoice) {
        matchResult = "It's a tie!";
    } else if (
        (playerChoice === "Bear" && computerChoice === "Ninja") ||
        (playerChoice === "Ninja" && computerChoice === "Hunter") ||
        (playerChoice === "Hunter" && computerChoice === "Bear")
    ) {
        matchResult = "You win!";
        playerWins++; 
    } else {
        matchResult = "Computer wins!";
        computerWins++; 
    }

    // end result
    roundResultText.innerHTML = `You chose ${playerChoice}.<br>The computer chose ${computerChoice}.<br><br><strong>${matchResult}</strong>`;

    playerScoreDisplay.textContent = playerWins;
    compScoreDisplay.textContent = computerWins;

    resultsArea.style.display = "block";
}