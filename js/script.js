window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let newGame;
  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", function () {
    window.location.reload();
  });
  // Keydown listeners are for when you press the key
  document.addEventListener("keydown", (event) => {
    console.log('a key was pressed', event);
    if (event.code === "ArrowLeft") {
      newGame.player.directionX = -3;
  }
  if (event.code === "ArrowRight") {
      newGame.player.directionX = 3;
  }
  if (event.code === "ArrowUp") {
      newGame.player.directionY = -3;
  }
  if (event.code === "ArrowDown") {
      newGame.player.directionY = 3;
  }
  });
  // Keyup listeners are for when you release the key
  document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowLeft") {
      newGame.player.directionX = 0;
    }
    
  if (event.code === "ArrowRight") {
      newGame.player.directionX = 0;
  }
  if (event.code === "ArrowUp") {
      newGame.player.directionY = 0;
  }
  if (event.code === "ArrowDown") {
      newGame.player.directionY = 0;
  }
  });

  function startGame() {
    console.log("start game");
    newGame = new Game();
    newGame.start();
  }
};
