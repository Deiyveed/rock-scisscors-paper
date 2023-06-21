// Variable to store the username
let username = "";

// Function called when the "Login" button is clicked
function login() {
  const input = document.getElementById("username");
  const welcomeMessage = document.getElementById("welcome-message");
  const homeDiv = document.getElementById("home");
  const gameDiv = document.getElementById("game");

  const usernameValue = input.value.trim();

  if (usernameValue.length >= 4) {
    // Set the username and update the welcome message
    username = usernameValue;
    welcomeMessage.innerText = `Welcome, ${username}!`;

    // Hide the home screen and show the game screen
    homeDiv.style.display = "none";
    gameDiv.style.display = "block";
  } else {
    // Display an alert if the username is empty or less than four characters
    alert("Please enter a username with more than 4 characters.");
  }
}

// Function called when a game option (Rock, Paper, Scissors) is clicked
function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];
  const computerText = document.getElementById("computer")
  const playerText = document.getElementById("player")

  const resultDiv = document.getElementById("result");
  let resultText;

// conditional statements to determine who wins the game
  if (userChoice === computerChoice) {
    resultText = "It's a tie!";
    resultDiv.style.color = "black";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText = `${capitalizeFirstLetter(userChoice)} beats ${computerChoice}! YOU WIN!`;
    resultDiv.style.color = "green";
  } else {
    resultText = `${capitalizeFirstLetter(computerChoice)} beats ${userChoice}! COM WINS!`;
    resultDiv.style.color = "red";
  }

  // Display the game result
  resultDiv.innerText = resultText;
  computerText.style.display = "block";
  playerText.style.display = "block";
  computerText.textContent = `Computer's Choice: ${computerChoice.toUpperCase()}`
  playerText.textContent = `Player's Choice: ${userChoice.toUpperCase()}`
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function called when the "Go Back" button is clicked
function goBack() {
  const homeDiv = document.getElementById("home");
  const gameDiv = document.getElementById("game");
  const input = document.getElementById("username");

  // Show the home screen and hide the game screen
  homeDiv.style.display = "block";
  gameDiv.style.display = "none";

  // Clear the username input field
  input.value = "";
}

// Function called when the "Quit" button is clicked
function quitGame() {
  const resultDiv = document.getElementById("result");
  const input = document.getElementById("username");

  // Clear the game result and username input field
  resultDiv.innerText = "";
  input.value = "";

  // Reload the page to start a fresh game
  location.reload()
}
