// function getComputerChoice (choice){
//     return "The computer chose " + choice

// }

// console.log(getComputerChoice("Rock" || "Paper" || "Scissors"));



//function to get computers choice 
    // inside is a function to get a random number between 1 and 3
// 1 is assiagned to rock
// 2 is assigned to paper
// 3 is asigned to scissors

function getComputerChoice() {
//Define an array of possible choices
const choices = ["Rock", "Paper", "Scissors"];

// Generate a random index to select a choice
const randomIndex = Math.floor(Math.random() * choices.length)

//Return the choice of the random index
return choices[randomIndex];

}
const computerSelection = getComputerChoice();
console.log("The computer chose: " + computerSelection);
