document.addEventListener('DOMContentLoaded', function () {
let playerScore = 0;
let computerScore = 0;

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
}

// Get references to the buttons
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

const buttons =[rockButton, paperButton, scissorsButton];

//Add event listeners to the buttons
rockButton.addEventListener('click', function () {
   const result = playRound ('rock', getComputerChoice());
   displayResult(result);
   checkForWinner();
});
paperButton.addEventListener('click', function () {
    const result = playRound('paper', getComputerChoice());
    displayResult(result);
    checkForWinner();
  });

 scissorsButton.addEventListener('click', function () {
    const result = playRound('scissors', getComputerChoice());
    displayResult(result);
    checkForWinner();
  });


// Function to display the results in the result-container div
function displayResult(result) {
    const resultContainer = document.getElementById('result-container');
    const roundResultElement = document.getElementById('round-result');
    const gameScoreElement = document.getElementById('game-score');

    roundResultElement.textContent = result;

    //update scores based on the result of each round
    if (result.includes("win")){
        playerScore++;
    }
    else if (result.includes("lose")){
        computerScore++;
    }

    //Display the updated Score
    gameScoreElement.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    enableButtons(buttons);
}

function handleClick(event) {
    const result = playRound(event.target.id.replace('-button', ''), getComputerChoice());
    displayResult(result);
    checkForWinner();
}

function checkForWinner() {
    const roundResultElement = document.getElementById('round-result');
    const gameScoreElement = document.getElementById('game-score');
    if (playerScore === 5) {
        roundResultElement.textContent = "Congratulations! You win the game!";
        disableButtons();
        resetGame();

    } else if (computerScore === 5) {
        roundResultElement.textContent = "Sorry, you're not a winner.";
        disableButtons();
        resetGame();

    }
}

function disableButtons(){
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    };


    function enableButtons() {
        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
    }

    // Add event listeners to the buttons outside of the event listener for DOMContentLoaded
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});

});


