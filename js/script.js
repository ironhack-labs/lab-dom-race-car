window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let ourGame;

  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", () => {
    window.location.reload();
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowRight") ourGame.player.directionX = 1;
    if (event.code === "ArrowLeft") ourGame.player.directionX = -1;
    if (event.code === "ArrowUp") ourGame.player.directionY = -1;
    if (event.code === "ArrowDown") ourGame.player.directionY = 1;
  });
  document.addEventListener("keyup", (event) => {
    if (event.code === "ArrowRight") ourGame.player.directionX = 0;
    if (event.code === "ArrowLeft") ourGame.player.directionX = 0;
    if (event.code === "ArrowUp") ourGame.player.directionY = 0;
    if (event.code === "ArrowDown") ourGame.player.directionY = 0;
  });

  function startGame() {
    console.log("start game");

    //actually creates the game object and stores it in the variable
    ourGame = new Game();
    ourGame.start();
  }
};
