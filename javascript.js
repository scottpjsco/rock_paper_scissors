// function getComputerChoice() {
// //Define an array of possible choices
// const choices = ["Rock", "Paper", "Scissors"];

// // Generate a random index to select a choice
// const randomIndex = Math.floor(Math.random() * choices.length)

// //Return the choice of the random index
// return choices[randomIndex];

// }
// const computerSelection = getComputerChoice();
// console.log("The computer chose: " + computerSelection);

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

// Example usage
const playerSelection = "rock";
const computerSelection = "scissors";
const result = playRound(playerSelection, computerSelection);
console.log(result);
