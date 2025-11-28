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
  //these are the keyboard event listeners
  window.addEventListener("keydown", (event) => {
    console.log("a key was pressed", event);
    if (event.code === "ArrowLeft") {
      ourGame.player.directionX = -4;
    }
    if (event.code === "ArrowDown") {
      ourGame.player.directionY = 4;
    }
    if (event.code === "ArrowRight") {
      ourGame.player.directionX = 4;
    }
    if (event.code === "ArrowUp") {
      ourGame.player.directionY = -4;
    }
  });
  window.addEventListener("keyup", (event) => {
    if (event.code === "ArrowLeft") {
      ourGame.player.directionX = 0;
    }
    if (event.code === "ArrowDown") {
      ourGame.player.directionY = 0;
    }
    if (event.code === "ArrowRight") {
      ourGame.player.directionX = 0;
    }
    if (event.code === "ArrowUp") {
      ourGame.player.directionY = 0;
    }
  });
  function startGame() {
    console.log("start game");
    ourGame = new Game();
    ourGame.start();
  }
};
