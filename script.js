// Choices array
const choices = ['rock', 'paper', 'scissors'];

// Function to generate a random AI move
function getAIChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function getWinner(player, ai) {
    if (player === ai) {
        return "It's a tie!";
    } else if (
        (player === 'rock' && ai === 'scissors') ||
        (player === 'scissors' && ai === 'paper') ||
        (player === 'paper' && ai === 'rock')
    ) {
        return "You win! 🎉";
    } else {
        return "AI wins! 🤖";
    }
}

// Function to play the game
function playGame(playerChoice) {
    const aiChoice = getAIChoice();

    // Display the moves
    document.getElementById('player-move').textContent = playerChoice;
    document.getElementById('ai-move').textContent = aiChoice;

    // Display the winner
    const result = getWinner(playerChoice, aiChoice);
    document.getElementById('winner').textContent = result;

     // Show the Replay button after the game
     document.getElementById('replay-btn').style.display = 'inline-block';
}

// Function to reset the game
function resetGame() {
    // Clear result display
    document.getElementById('player-move').textContent = "❓";
    document.getElementById('ai-move').textContent = "❓";
    document.getElementById('winner').textContent = "❓";

    // Hide the Replay button again
    document.getElementById('replay-btn').style.display = 'none';
}