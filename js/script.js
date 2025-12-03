window.onload = function () {
  let ourGame;
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", () => {
    window.location.reload();
  });

  window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
      ourGame.player.directionX = -4;
    }
    if (event.code === "ArrowRight") {
      ourGame.player.directionX = 4;
    }
    if (event.code === "ArrowUp") {
      ourGame.player.directionY = -4;
    }
    if (event.code === "ArrowDown" || event.code === "KeyS") {
      ourGame.player.directionY = 4;
    }
  });

  window.addEventListener("keyup", (event) => {
    if (event.code === "ArrowLeft") {
      ourGame.player.directionX = 0;
    }
    if (event.code === "ArrowRight") {
      ourGame.player.directionX = 0;
    }
    if (event.code === "ArrowUp") {
      ourGame.player.directionY = 0;
    }
    if (event.code === "ArrowDown" || event.code === "Space") {
      ourGame.player.directionY = 0;
    }
  });

  function startGame() {
    console.log("start game");
    ourGame = new Game();
    ourGame.start();
  }
};
