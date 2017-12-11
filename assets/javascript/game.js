var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var userGuess = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Random computer letter guess, logged to console
var letterComp = letters[Math.floor(Math.random() * letters.length)];
	console.log(letterComp);

var updateGuessesLeft = function () {
	document.querySelector("#guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
};

var updateUserGuess = function() {
	this.UserGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
};

var updateSoFar = function() {
	// Display each letter pressed by user as a string separated by commas
	document.querySelector("#soFar").innerHTML = "Your guesses so far: " + userGuess.join(", ");
};


// When a letter key is released, it counts as a guess. guesses left reduced by 1
document.onkeyup = function(event) {
	guessesLeft--;
	// When a letter is pressed, that letter is displayed within a string
	// string.fromcharcode method returns a string created by user press
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	guessedLetters.push(userGuess);
	updateGuessesLeft();
	updateSoFar();

		if (guessesLeft > 0) {
			// If the user guesses the right letter, the win count increases, game restarts
			if (userGuess == letterComp) {
				wins++;
				document.querySelector("#wins").innerHTML = "Wins: " + wins;
				alert("Congrats! You're psychic.");
				reset();
			}
		} else if (guessesLeft == 0) {
			// Otherwise the loss count will increase and the game will restart
			losses++;
			document.querySelector("#losses").innerHTML = "Losses: " + losses;
			alert("Your crystal ball must be too cloudy.  Try again.");
			reset();
		}

//Funtion to reset all values after a win or loss
function reset() {
	guesses = 9;
	guessesLeft = 9;
	guessedLetters = [];
	updateletterComp();
	updateGuessesLeft();
	updateSoFar();
}
};





