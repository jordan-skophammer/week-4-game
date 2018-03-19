// Jordan Skophammer's Cyrstal Collector Game, 2018



$(document).ready(function(){
	console.log('ready');

	var winsScore = 0;
	var lossesScore = 0;
	var playersScore = 0;
	var createNumber = Math.floor(Math.random() * 100) + 20;
	var crystalOne = Math.floor(Math.random() * 12) + 1;
	var crystalTwo = Math.floor(Math.random() * 12) + 1;
	var crystalThree = Math.floor(Math.random() * 12) + 1;
	var crystalFour = Math.floor(Math.random() * 12) + 1;

	$('.randomNumber').text(createNumber);

	function gameSetup() {
		createNumber = Math.floor(Math.random() * 100) + 20;
		crystalOne = Math.floor(Math.random() * 12) + 1;
		crystalTwo = Math.floor(Math.random() * 12) + 1;
		crystalThree = Math.floor(Math.random() * 12) + 1;
	 	crystalFour = Math.floor(Math.random() * 12) + 1;

		$('.randomNumber').text(createNumber);

		playersScore = 0;
		$('.scoreTile').text(playersScore);
		
	};

	$('#crystal1').on("click", function() {
		console.log(crystalOne);
		runningScore(crystalOne);
	});

	$('#crystal2').on("click", function() {
		console.log(crystalTwo);
		runningScore(crystalTwo);
	});

	$('#crystal3').on("click", function() {
		console.log(crystalThree);
		runningScore(crystalThree);
	});

	$('#crystal4').on("click", function() {
		console.log(crystalFour);
		runningScore(crystalFour);
	});

	function runningScore(crystalVal) {
		playersScore += crystalVal;
		gameOutcome();
		$('.scoreTile').text(playersScore);
	};

	function gameOutcome() {
		if(playersScore === createNumber) {
			winsScore++;
			gameSetup();
			$('#wins').text(winsScore);
		} else if (playersScore > createNumber) {
			lossesScore++;
			gameSetup();
			$('#losses').text(lossesScore);
		};	
	}; 
});