// initialize options and scores
const options = ["rock", "paper", "scissors"];
const maxScore = 5;
let playerScore = 0;
let computerScore = 0;

// get DOM elements
const container = document.getElementById("container");
const resultDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");
const winnerDiv = document.getElementById("winner");

// create game buttons
for (option of options) {
  const optionBtn = document.getElementById(option);
  optionBtn.addEventListener("click", () => {
    playGame(option);
  });
}

function playGame(move) {
  // don't play if game is finished
  if (playerScore == maxScore || computerScore == maxScore) {
    return;
  }

  // otherwise, play
  const result = playRound(move);

  // display result in UI
  resultDiv.innerText = result;

  // display score in UI
  scoreDiv.innerText =
    "Your score: " + playerScore + " - Computer score: " + computerScore;

  // announce winner
  if (playerScore == maxScore || computerScore == maxScore) {
    // make a "New game" button appear
    const newGameBtn = document.createElement("button");
    newGameBtn.innerHTML = "New game";
    newGameBtn.setAttribute("id", "newGameBtn");
    newGameBtn.addEventListener("click", () => {
      resetGame();
    });
    container.appendChild(newGameBtn);
    // declare winner
    if (playerScore == maxScore) {
      winnerDiv.innerText = "You win the game!";
    } else if (computerScore == maxScore) {
      winnerDiv.innerText = "You lose the game!";
    }
  }
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

// make computer play
function getComputerChoice() {
  let random = Math.floor(Math.random() * options.length);
  return options[random];
}

// helper to normalize to first-letter capital
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function resetGame() {
  // reset scores
  playerScore = 0;
  computerScore = 0;
  // reset UI
  resultDiv.innerText = "";
  scoreDiv.innerText = "";
  winnerDiv.innerText = "";
  const newGameBtn = document.getElementById("newGameBtn");
  container.removeChild(newGameBtn);
}
