document.addEventListener("DOMContentLoaded", () => {
    let userScore = 0;
    let computerScore = 0;
    let userChoice = "";

    // Array containing choices
    const choices = ["rock", "paper", "scissors"];

    // Selecting necessary DOM elements
    const userScoreSpan = document.getElementById("user-score");
    const computerScoreSpan = document.getElementById("computer-score");
    const resultDiv = document.getElementById("result");
    const playButton = document.getElementById("play-button");
    const buttons = document.querySelectorAll("#selection button")

    // Listen for selection
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            userChoice = button.id; // Store user choice
            // Remove selection highlight from all buttons
            buttons.forEach(btn => btn.classList.remove("ring-4", "ring-purple-500"));
            // Highlight selected button
            button.classList.add("ring-4", "ring-purple-500");
        });
    });

    // Function to get computer choice randomly
    function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    // Function to determine the winner
    function determineWinner(user, computer) {
        if (user === computer) {
            return "It's a tie!";
        }

        if ((user === "rock" && computer === "scissors") || (user === "paper" && computer === "rock") || (user === "scissors" && computer === "paper")) {
            userScore++; // Increase user score if they win
            return "You win!";
        } else {
            computerScore++; // Increase computer score if they win
            return "Computer wins!";
        }
    }

    // Play game function
    playButton.addEventListener("click", () => {
        if (!userChoice) {
            alert("Please select Rock. Paper, or Scissors!");
            return;
        }

        const computerChoice = getComputerChoice(); // Get random computer choice
        const result = determineWinner(userChoice,  computerChoice); // Determine round result

        // Display round result and update scores
        resultDiv.textContent = `Computer chose ${computerChoice}. ${result}`;
        userScoreSpan.textContent = userScore;
        computerScoreSpan.textContent = computerScore;
    });
});