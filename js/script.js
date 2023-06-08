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

  /* create event listeners for the keystrokes */
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    // Check if the pressed key is in the possibleKeystrokes array
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      // Update player's directionX and directionY based on the key pressed
      switch (key) {
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
    }
  }

  // Add the handleKeydown function as an event listener for the keydown event
  window.addEventListener("keydown", handleKeydown);

  /* avoid browser scrolling when pressing the arrow keys */
  // window.addEventListener("keydown", handleKeydown);
  /* add an event listener for the keyup event and have it reset the player's directionX and directionY properties. */
  // function handleKeyup(event) {
  //   if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
  //     game.player.directionX = 0;
  //   } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
  //     game.player.directionY = 0;
  //   }
  // }
  // window.addEventListener("keyup", handleKeyup);
  /* add an event listener for the keydown event and have it call the handleKeydown function. */
  // window.addEventListener("keydown", handleKeydown);
};
