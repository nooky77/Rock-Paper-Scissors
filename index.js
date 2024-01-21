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
function playOneGame(player, computerChoice) {
	// set playerChoice to lowerCase
	let playerChoice = player.toLowerCase();
	// while loop until a winner is decided
	// compare playerChoice to computerChoice.
	if (playerChoice === computerChoice) {
		return "draw";
	} else if (playerChoice === "rock") {
		if (computerChoice === "scissors") return "win";
		if (computerChoice === "paper") return "lost";
	} else if (playerChoice === "paper") {
		if (computerChoice === "rock") return "win";
		if (computerChoice === "scissors") return "lost";
	} else {
		if (computerChoice === "paper") return "win";
		if (computerChoice === "rock") return "lost";
	}
}

// fnc that plays a bo5
function game() {
	// set a var to score for human and cpu
	// for loop until 5
	// if/else call previous fnc to get a winner
	// if true, increase player score
	// .log winner of round
	// else increase cpu score
	// .log winner
	// check winner with comparaison of var score
	// return str with winner of bo5
}
