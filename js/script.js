window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    game = new Game();
    game.start();
    console.log("start game");
  }

  window.addEventListener("keydown", (event) => {
    event.preventDefault();
    // console.log(event.key);
    switch (event.key) {
      case "ArrowLeft":
        game.player.directionX = -1;
        break;
      case "ArrowUp":
        game.player.directionY = -1;
        break;
      case "ArrowRight":
        game.player.directionX = 1;
        break;
      case "ArrowDown":
        game.player.directionY = 1;
        break;
    }
  });

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function restartGame() {
    location.reload();
  }
};
