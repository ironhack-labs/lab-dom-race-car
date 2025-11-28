window.onload = function () {
  let game;
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", () => {
    window.location.reload();
  });

  window.addEventListener("keydown", (event) => {
    console.log("a key was pressed", event);
    if (event.code === "ArrowLeft") {
      game.player.directionX = -2;
    }
    if (event.code === "ArrowRight") {
      game.player.directionX = 2;
    }
    if (event.code === "ArrowUp") {
      game.player.directionY = -2;
    }
    if (event.code === "ArrowDown") {
      game.player.directionY = 2;
    }
  });
  window.addEventListener("keyup", (event) => {
    console.log("a key was pressed", event);
    if (event.code === "ArrowLeft") {
      game.player.directionX = 0;
    }
    if (event.code === "ArrowRight") {
      game.player.directionX = 0;
    }
    if (event.code === "ArrowUp") {
      game.player.directionY = 0;
    }
    if (event.code === "ArrowDown") {
      game.player.directionY = 0;
    }
  });
  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }
};
