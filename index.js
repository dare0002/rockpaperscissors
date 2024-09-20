
// Oprætter variabler 

let playerChoice; 
let computerChoice;

// Eventlisteners for knapperne rock, paper, scissors

const rock = document.querySelector("button.rock").addEventListener("click", () => {
    playerChoice = "rock";
    startGame ();
}); 

const paper = document.querySelector("button.paper").addEventListener("click", () => {
    playerChoice = "paper";
    startGame ();
}); 

const scissors = document.querySelector("scissors.rock").addEventListener("click", () => {
    playerChoice = "scissors";
    startGame ();
}); 



// const rock = document.querySelector("button.rock").addEventListener("click", rockClicked); 
// const paper = document.querySelector("button.paper").addEventListener("click", paperClicked); 
// const scissors = document.querySelector("button.scissor").addEventListener("click", scissorsClicked); 

// De forskellige muligheder

const choices = ["rock", "paper", "scissors"];


// Funtion for at starte spillet

let result;

// Oprætter funktion for computern

function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

// Funktion for at starte spillet

let userGuess; 
let computerGuess; 
// let result; 

// funktion for at finde rock, paper, scissors 
function rockClicked() {
  //   console.log("ROCK CLICKED");
  userGuess = "rock";
  computerGuess = getComputerChoice();
  whoIsTheWinner(computerGuess, userGuess); 
}
function paperClicked() {
  //   console.log("Paper CLICKED");
  userGuess = "paper";
  computerGuess = getComputerChoice();
  whoIsTheWinner(computerGuess, userGuess); 
}
function scissorsClicked() {
  //   console.log("Scissors CLICKED");
  userGuess = "scissors";
  computerGuess = getComputerChoice();
  whoIsTheWinner(computerGuess, userGuess); 
}

// funktion for at finde rock, paper, scissors for computer 
function computerChoice(){
    let max = 3; 
    const randomNumber = Math.floor(Math.random(max)); 
    if(randomNumber == 0){
    computerGuess = "paper";     
    }else if(randomNumber == 1){
    computerGuess = "rock";     
    }else{
    computerGuess = "scissors"    
    }
}

function whoIsTheWinner(computerGuess, userGuess){
    if(userGuess == "paper" && computerGuess == "rock"){
        result = "user"; 
    }
    if(userGuess == "rock" && computerGuess == "scissors"){
        result = "user"; 
    }
    if(userGuess == "scissors" && computerGuess == "paper"){
        result = "user"; 
    }
    if(userGuess == "paper" && computerGuess == "paper"){
        result = "draw"; 
    }
    if(userGuess == "rock" && computerGuess == "rock"){
        result = "draw"; 
    }
    if(userGuess == "scissors" && computerGuess == "scissors"){
        result = "draw"; 
    }
    if(userGuess == "paper" && computerGuess == "scissors"){
        result = "computer"; 
    }
    if(userGuess == "rock" && computerGuess == "paper"){
        result = "computer"; 
    }
    if(userGuess == "scissors" && computerGuess == "rock"){
        result = "computer"; 
    }
    console.log("result:", result); 
}


// Starter animationer

function startGame () {
    resetScoreBoard ();
    document.querySelector("#player1").addEventListener("animationend", handAnimationsEnd);

    // Starter shake animation
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");

function handAnimationsEnd () {
    // Fjerner shake animation
    document.querySelector("#player1").classList.remove("shake", "rock", "paper", "scissors");
    document.querySelector("#player2").classList.remove("shake", "rock", "paper", "scissors");

    console.log("Animation ended");
    // Viser de korrekte signs

    if (userGuess === "rock") {
        document.querySelector("#player1").classList.add("rock");
    } else if (userGuess === "paper") {
        document.querySelector("#player1").classList.add("paper");
    } else {
        document.querySelector("#player1").classList.add("scissors");
    }
    if (computerGuess === "rock") {
        document.querySelector("#player2").classList.add("rock");
    } else if (computerGuess === "paper") {
        document.querySelector("#player2").classList.add("paper");
    } else {
        document.querySelector("#player2").classList.add("scissors");
    }

    showWinnerScreen ();
}

function showWinnerScreen (){
    if (result === "user") {
        document.querySelector("#win").classList.remove("hidden");
    } else if (result === "computer") {
        document.querySelector("#lose").classList.remove("hidden");
    } else {
        document.querySelector("#draw").classList.remove("hidden");
    }
}

function resetGame () {
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
}

}







