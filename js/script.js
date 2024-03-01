window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const game = new Game();

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener('click', () => {
    console.log('restart clicked');
    game.gameEndScreen.style.display = 'none';
    game.gameIsOver = false; // Reset gameIsOver flag
    game.score = 0; // Reset score
    game.lives = 3; // Reset lives
    game.scoreElement.innerText = game.score; // Update score display
    game.livesElement.innerText = game.lives; // Update lives display

    // Clear existing obstacles
    game.obstacles.forEach(obstacle => {
      obstacle.element.remove();
    });
    game.obstacles = [new Obstacle(game.gameScreen, "../images/redCar.png")]; // Create new obstacles

    game.start(); // Start the game again
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") {
      game.player.directionX = 1;
    } else if (event.code === 'ArrowLeft') {
      game.player.directionX = -1;
    }
  });

  document.addEventListener("keyup", () => {
    game.player.directionX = 0;
  });

  function startGame() {
    console.log("start game");
    game.start();
  }
};
