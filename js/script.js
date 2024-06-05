window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game

  startButton.addEventListener("click", function () {
    startGame();

  });
  restartButton.addEventListener("click", function () {
    restartGame();
  });

  window.addEventListener("keydown", handleKeydown)


  function startGame() {
    console.log("start game");
    game = new Game()
    game.startGame()
  }
  function restartGame() {
    console.log("restart game");
    location.reload()
  }

  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      game.player.directionX = 0;
      game.player.directionY = 0;

      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -10;
          break;
        case "ArrowUp":
          game.player.directionY = -10;
          break;
        case "ArrowRight":
          game.player.directionX = 10;
          break;
        case "ArrowDown":
          game.player.directionY = 10;
          break;
      }
      game.player.move()
    }
  }
};
