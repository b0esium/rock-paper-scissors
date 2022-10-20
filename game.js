let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * options.length);
  return options[random];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  // normalize playerSelection to first-letter capital
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

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

  for (let i = 0; i < 5; i++) {
    playRound(prompt("Your move?"));
  }
  if (playerScore > computerScore) {
    return "You win! " + playerScore + "-" + computerScore;
  } else if (playerScore < computerScore) {
    return "You lose! " + playerScore + "-" + computerScore;
  } else {
    return "It's a draw!";
  }
}
