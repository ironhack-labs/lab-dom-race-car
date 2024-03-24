window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    game = new Game();
    game.start();
  }

  document.addEventListener("keydown", (event) => {
    if (event.code === "KeyW") {
      game.player.directionY = -1;
      console.log("test");
    }
    if (event.code === "KeyS") {
      game.player.directionY = 1;
    }
    if (event.code === "KeyA") {
      game.player.directionX = -1;
    }
    if (event.code === "KeyD") {
      game.player.directionX = 1;
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.code === "KeyW" || event.code === "KeyS") {
      game.player.directionY = 0;
    }
    if (event.code === "KeyA" || event.code === "KeyD") {
      game.player.directionX = 0;
    }
  });
};
