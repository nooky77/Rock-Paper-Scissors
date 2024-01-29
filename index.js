const btnStart = document.querySelector(".btn-start");
const btnChoices = document.querySelectorAll(".btn-choices");
const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");
const resultText = document.querySelector(".result");
const p1Score = document.querySelector(".p1Score");
const p2Score = document.querySelector(".p2Score");
let cpuScore = 0;
let userScore = 0;

btnStart.addEventListener("click", startGame);
btnRock.addEventListener("click", getPlayerChoice);
btnPaper.addEventListener("click", getPlayerChoice);
btnScissors.addEventListener("click", getPlayerChoice);

function game(playerChoice) {
	let cpuChoice = getComputerChoice();
	// check who won the game
	let checkWinner = playOneGame(playerChoice, cpuChoice);
	if (checkWinner === "win") {
		userScore += 1;
		p1Score.textContent = userScore;
	}
	if (checkWinner === "lost") {
		cpuScore += 1;
		p2Score.textContent = cpuScore;
	}
	// check winner with comparaison of var score
	if (cpuScore >= 5 || userScore >= 5) {
		if (userScore > cpuScore) {
			resultText.textContent =
				"You won the game! Press start to play again.";
		} else {
			resultText.textContent =
				"You lost the game! Press start to play again.";
		}
		resetGame();
	}
}

function startGame() {
	// Set the game as running and hidding buttons
	btnStart.classList.toggle("invisible");
	resultText.textContent = "";
	p1Score.textContent = userScore;
	p2Score.textContent = cpuScore;
	[...btnChoices].forEach((choice) => choice.classList.toggle("invisible"));
}

function resetGame() {
	cpuScore = 0;
	userScore = 0;
	btnStart.classList.toggle("invisible");
	[...btnChoices].forEach((choice) => choice.classList.toggle("invisible"));
}

function getPlayerChoice(e) {
	const playerChoice = e.target.innerText.toLowerCase();
	game(playerChoice);
}

// getComputerChoice fnc will return rock, paper or scissors.
function getComputerChoice() {
	// Use math.random to generate a nbr between 1 and 3
	const allChoices = ["rock", "paper", "scissors"];
	const cpuChoice = Math.floor(Math.random() * 3);
	return allChoices[cpuChoice];
}

// playGames takes 2 args, playerChoice and cpuChoice
// args must be case-insensitive and
function playOneGame(playerChoice, computerChoice) {
	// while loop until a winner is decided
	// compare playerChoice to computerChoice.
	if (playerChoice === computerChoice) {
		resultText.textContent = "Draw.";
		return "draw";
	} else if (playerChoice === "rock") {
		if (computerChoice === "scissors") {
			resultText.textContent = "You Win! Rock beats Scissors";
			return "win";
		}
		if (computerChoice === "paper") {
			resultText.textContent = "You Lose! Paper beats Rock";
			return "lost";
		}
	} else if (playerChoice === "paper") {
		if (computerChoice === "rock") {
			resultText.textContent = "You Win! Paper beats Rock";
			return "win";
		}
		if (computerChoice === "scissors") {
			resultText.textContent = "You Lose! Scissors beats Paper";
			return "lost";
		}
	} else {
		if (computerChoice === "paper") {
			resultText.textContent = "You Win! Scissors beats Paper";
			return "win";
		}
		if (computerChoice === "rock") {
			resultText.textContent = "You Lose! Rock beats Scissors";
			return "lost";
		}
	}
}
