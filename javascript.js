function playRound(playerSelection, computerSelection) {
    //Convert both selections to lower case
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //Define an array of valid selections
    const validSelections = ["rock", "paper", "scissors"];

    //check if the player's Selection is valid
    if (!validSelections.includes(playerSelection)) {
        return "Invalid selection. Please choose from rock, paper or scissors.";
    }

    //Generate a random selection for the computer
    const randomIndex = Math.floor(Math.random() * validSelections.length);
    const randomComputerSelection = validSelections[randomIndex];

    // Compare the player and computers selection to determine a winner
    if (playerSelection === computerSelection) {
        return "It's a draw! You both chose " + playerSelection;
    } else if ( 
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock") 
    ) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt(`Round ${round}: Enter your choice (Rock, Paper, or Scissors):`);
      const computerSelection = getComputerChoice();
  
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes("Win")) {
        playerScore++;
      } else if (result.includes("Lose")) {
        computerScore++;
      }
    }
  
    console.log("Game over! Here's the final score:");
    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Sorry, you lose the game.");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  // Call the game function to start the game
  game();
