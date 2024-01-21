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
	// compare playerChoice to computerChoice.
	// if ties, replay the round
	// return the winner with str
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
