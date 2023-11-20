


// Function to play a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
  // Convert both selections to lower case for case-insensitive comparison
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // Define an array of valid selections
  const validSelections = ["rock", "paper", "scissors"];

  // Check if the player's selection is valid
  if (!validSelections.includes(playerSelection)) {
      return "Invalid selection. Please choose from rock, paper, or scissors.";
  }

  // Generate a random selection for the computer
  const randomIndex = Math.floor(Math.random() * validSelections.length);
  const randomComputerSelection = validSelections[randomIndex];

  // Function to get a random choice for the computer

}

// Get references to the buttons
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

//Add event listeners to the buttons
rockButton.addEventListener('click', function () {
    playRound ('rock');
});
paperButton.addEventListener('click', function () {
    playRound ('paper');
});
scissorsButton.addEventListener('click', function () {
    playRound ('scissors');
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

  // Compare the player and computer's selection to determine a winner
  if (playerSelection === computerSelection) {
      return "It's a draw! You both chose " + playerSelection;
  } else if ( 
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock") 
  ) {
      return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
      return "You lose! " + computerSelection + " beats " + playerSelection;
  }



// Function to simulate a game of Rock, Paper, Scissors
function game() {
  let playerScore = 0;
  let computerScore = 0;

  // Play 5 rounds of the game
  for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt(`Round ${round}: Enter your choice (Rock, Paper, or Scissors):`);
      const computerSelection = getComputerChoice();

      const result = playRound(playerSelection, computerSelection);
      console.log(result);

      // Update scores based on the result of each round
      if (result.includes("Win")) {
          playerScore++;
      } else if (result.includes("Lose")) {
          computerScore++;
      }
  }

  // Display the final score and determine the overall winner
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
