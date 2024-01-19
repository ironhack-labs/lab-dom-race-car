window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;
  startButton.addEventListener("click", function () {
    startGame();
    console.log("click");
  });

  function startGame() {
    game = new Game();
    game.start();
  }

  document.onkeydown = function (keyPress) {
    keyPress.preventDefault();
    if (keyPress.key === "ArrowLeft") {
      game.player.directionX = 3;
    } else if (keyPress.key === "ArrowRight") {
      game.player.directionX = 3;
    }
  };

  document.onkeyup = function (keyPress) {
    keyPress.preventDefault();
    if (keyPress.key === "ArrowLeft") {
      game.player.directionX = 0;
    } else if (keyPress.key === "ArrowRight") {
      game.player.directionX = 0;
    }
  };
};
