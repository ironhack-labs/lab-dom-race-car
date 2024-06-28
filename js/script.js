window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }

  function handleKeyDown(e) {
    const key = e.key;
    console.log(key);

    const keyStrokes = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];
    const increment = 1;

    if (keyStrokes.includes(key)) {
      e.preventDefault();

      switch (key) {
        case "ArrowLeft":
          game.player.directionX -= increment;
          break;
        case "ArrowUp":
          game.player.directionY -= increment;
          break;
        case "ArrowRight":
          game.player.directionX += increment;
          break;
        case "ArrowDown":
          game.player.directionY += increment;
          break;
      }
    }
  }

  function handleKeyUp(e) {
    const key = e.key;
    const keyStrokes = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];

    if (keyStrokes.includes(key)) {
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = 0;
          break;
        case "ArrowUp":
          game.player.directionY = 0;
          break;
        case "ArrowRight":
          game.player.directionX = 0;
          break;
        case "ArrowDown":
          game.player.directionY = 0;
          break;
      }
    }
  }
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);

  // Add an event listener to the restart button
  restartButton.addEventListener("click", function () {
    // Call the restartGame function when the button is clicked
    restartGame();
  });

  // The function that reloads the page to start a new game
  function restartGame() {
    location.reload();
  }
};
