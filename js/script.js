window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const game = new Game("game-intro", "game-screen", "game-end");
  window.addEventListener("keydown", handleKeys);
  window.addEventListener("keyup", handleKeys);

  startButton.addEventListener("click", function () {
    startGame();
  });

  // Add an event listener to the restart button
  restartButton.addEventListener("click", function () {
    // Call the restartGame function when the button is clicked
    restartGame();
  });

  // The function that reloads the page to start a new game
  function restartGame() {
    location.reload();
  }

  function handleKeys(event) {
    if (event.type === "keydown") {
      switch (event.code) {
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
    } else if (event.type === "keyup") {
      switch (event.code) {
        case "ArrowLeft":
        case "ArrowRight":
          game.player.directionX = 0;
          break;
        case "ArrowUp":
        case "ArrowDown":
          game.player.directionY = 0;
          break;
      }

    }
  }
  

  function startGame() {
    console.log("start game");
      game.start();
  }
};
