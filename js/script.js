window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });

  let game;

  function startGame() {
    console.log("start game");

    game = new Game();

    game.start();
  }

  // Function that handles keydown events
  function handleKeyDown(event) {
    const key = event.key;
    possibleKeyStrokes = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    // Check if pressed key belongs to the array of possible keys
    if (possibleKeyStrokes.includes(key)) {
      // Prevent the defaault action from happening
      event.preventDefault();
      // Only once thhe game is loaded can we move the player
      if (game) {
        //Update the plaayer position based on the key press
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -1;
            break;
          case "ArrowRight":
            game.player.directionX = 1;
            break;
          case "ArrowUp":
            game.player.directionY = -2;
            break;
          case "ArrowDown":
            game.player.directionY = 1.5;
            break;
        }
      }
    }
  }

  // Function that handles keyup events
  function handleKeyUp(event) {
    const key = event.key;
    possibleKeyStrokes = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    // Check if pressed key belongs to the array of possible keys
    if (possibleKeyStrokes.includes(key)) {
      // Prevent the defaault action from happening
      event.preventDefault();
      // Only once thhe game is loaded can we move the player
      if (game) {
        //Update the plaayer position based on the key press
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = 0;
            break;
          case "ArrowRight":
            game.player.directionX = 0;
            break;
          case "ArrowUp":
            game.player.directionY = 0;
            break;
          case "ArrowDown":
            game.player.directionY = 0;
            break;
        }
      }
    }
  }

  //Associate the handleKeyDown and handleKeyUp functions with the Event Listener
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
};
