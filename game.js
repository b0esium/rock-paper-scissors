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
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")
  ) {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  } else {
    return "It's a draw!";
  }
}

playRound("scissors");
