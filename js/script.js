window.onload = function () {
	const startButton = document.getElementById('start-button');
	const restartButton = document.getElementById('restart-button');
	let game;

	startButton.addEventListener('click', function () {
		startGame();
	});
	restartButton.addEventListener('click', function () {
		location.reload();
	});
	function startGame() {
		console.log('start game');
		game = new Game();
		game.start();
	}

	function keyActionHandler(event) {
		const key = event.key;
		const possibleKeystrokes = [
			'ArrowLeft',
			'ArrowUp',
			'ArrowRight',
			'ArrowDown',
		];
		if (possibleKeystrokes.includes(key)) {
			event.preventDefault();
		}

		if (key === 'ArrowLeft') {
			game.player.directionX = -1;
		}
		if (key === 'ArrowUp') {
			game.player.directionY = -1;
		}

		if (key === 'ArrowRight') {
			game.player.directionX = 1;
		}
		if (key === 'ArrowDown') {
			game.player.directionY = 1;
		}
	}
	window.addEventListener('keydown', keyActionHandler);
};
