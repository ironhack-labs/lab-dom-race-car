window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    location.reload();
  });

  function startGame() {
    game = new Game();
    game.start();
  }

  // Handle key presses (movement start)
  document.onkeydown = function (event) {
    if (!game || !game.player) return;

    switch (event.key) {
      case "ArrowLeft":
        game.player.directionX = -5;
        break;
      case "ArrowRight":
        game.player.directionX = 5;
        break;
      case "ArrowUp":
        game.player.directionY = -5;
        break;
      case "ArrowDown":
        game.player.directionY = 5;
        break;
    }
  };

  // Handle key releases (movement stop)
  document.onkeyup = function (event) {
    if (!game || !game.player) return;

    if (["ArrowLeft", "ArrowRight"].includes(event.key)) {
      game.player.directionX = 0;
    }
    if (["ArrowUp", "ArrowDown"].includes(event.key)) {
      game.player.directionY = 0;
    }
  };
};