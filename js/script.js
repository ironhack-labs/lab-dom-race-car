window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game; // added

  startButton.addEventListener("click", function () {
    startGame();
  });

  
  restartButton.addEventListener("click", function () {
    // Call the restartGame function when the button is clicked
    restartGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game(); // added

    game.start(); // added
  }

  function restartGame() {
    location.reload();
  }


  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];

    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -2;
          break;
        case "ArrowUp":
          game.player.directionY = -2;
          break;
        case "ArrowRight":
          game.player.directionX = 2;
          break;
        case "ArrowDown":
          game.player.directionY = 2;
          break;
      }
    }
  }

  // Function that handles keyup event
  function handleKeyup(event) {
    const key = event.key;
    // Reset player's directionX or directionY when arrow keys are released
    if (key === "ArrowLeft" || key === "ArrowRight") {
      game.player.directionX = 0;
    }
    if (key === "ArrowUp" || key === "ArrowDown") {
      game.player.directionY = 0;
    }
  }

  // Add event listeners for both keydown and keyup events
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("keyup", handleKeyup);
};