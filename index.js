const btnStart = document.querySelector(".btn-start");
const btnChoices = document.querySelectorAll(".btn-choices");
const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");
let gameRunning = false;

btnStart.addEventListener("click", gameStarted);
btnRock.addEventListener("click", clicked);
btnRock.addEventListener("click", clicked);
btnPaper.addEventListener("click", clicked);
btnScissors.addEventListener("click", clicked);

function clicked(e) {
	let playerChoice = e.target.textContent;
	console.log(playerChoice);
}

function gameStarted() {
	// Set the game as running and hidding buttons
	gameRunning = true;
	btnStart.classList.toggle("invisible");
	[...btnChoices].forEach((choice) => choice.classList.toggle("invisible"));
}

// GAME LOGICS
// getComputerChoice fnc will return rock, paper or scissors.
function getComputerChoice() {
	// Use math.random to generate a nbr between 1 and 3
	const cpuChoice = Math.floor(Math.random() * 3) + 1;
	// Use switch to assign a nbr to a rock, paper or scissors.
	switch (cpuChoice) {
		case 1:
			return "rock";
		case 2:
			return "paper";
		case 3:
			return "scissors";
	}
}

// playGames takes 2 args, playerChoice and cpuChoice
// args must be case-insensitive and
function playOneGame(playerChoice, computerChoice) {
	// while loop until a winner is decided
	// compare playerChoice to computerChoice.
	if (playerChoice === computerChoice) {
		console.log("Draw.");
		return "draw";
	} else if (playerChoice === "rock") {
		if (computerChoice === "scissors") {
			console.log("You Win! Rock beats Scissors");
			return "win";
		}
		if (computerChoice === "paper") {
			console.log("You Lose! Paper beats Rock");
			return "lost";
		}
	} else if (playerChoice === "paper") {
		if (computerChoice === "rock") {
			console.log("You Win! Paper beats Rock");
			return "win";
		}
		if (computerChoice === "scissors") {
			console.log("You Lose! Scissors beats Paper");
			return "lost";
		}
	} else {
		if (computerChoice === "paper") {
			console.log("You Win! Scissors beats Paper");
			return "win";
		}
		if (computerChoice === "rock") {
			console.log("You Lose! Rock beats Scissors");
			return "lost";
		}
	}
}

// fnc that plays a bo5
function game() {
	// set a var to score for human and cpu
	let cpuScore = 0;
	let userScore = 0;
	// for loop until 5
	while (true) {
		// ask user for input
		let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
		let cpuChoice = getComputerChoice();
		// check who won the game
		let checkWinner = playOneGame(playerChoice, cpuChoice);
		// if true, increase player score
		if (checkWinner === "win") userScore++;
		// else increase cpu score
		else if (checkWinner === "lost") cpuScore++;
		if (userScore === 5 || cpuScore === 5) break;
	}
	// check winner with comparaison of var score
	if (userScore > cpuScore) {
		return `You won the game! ${userScore} - ${cpuScore}`;
	} else {
		return `You lost the game! ${userScore} - ${cpuScore}`;
	}
}
