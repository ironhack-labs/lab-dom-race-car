window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;
  startButton.addEventListener("click", function () {
    startGame();
  });

  document.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key === "ArrowDown") {
      game.player.directionY = 1;
    }
    if (e.key === "ArrowUp") {
      game.player.directionY = -1;
    }
    if (e.key === "ArrowLeft") {
      game.player.directionX = -1;
    }
    if (e.key === "ArrowRight") {
      game.player.directionX = 1;
    }
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }
};