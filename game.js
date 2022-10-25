const options = ["rock", "paper", "scissors"];

for (option of options) {
  const optionBtn = document.getElementById(option);
  optionBtn.addEventListener("click", () => {
    const result = playRound(option);
    // display result in UI
    const resultDiv = document.getElementById("results");
    resultDiv.innerText = result;
  });
}

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * options.length);
  return options[random];
}

// normalize to first-letter capital
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  computerSelection = capitalize(getComputerChoice());
  playerSelection = capitalize(playerSelection);

  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    playerScore++;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")
  ) {
    computerScore++;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  } else {
    return "It's a draw!";
  }
}

function game() {
  // reset scores
  playerScore = 0;
  computerScore = 0;

  if (playerScore > computerScore) {
    return "You win the game! " + playerScore + "-" + computerScore;
  } else if (playerScore < computerScore) {
    return "You lose the game! " + playerScore + "-" + computerScore;
  } else {
    return "It's a draw!";
  }
}
