window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
    // creating a variable let game
    let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  
  function startGame() {
    console.log("start game");

    //added  //       initialiving the class?
    game = new Game();
    game.start();
  }



  restartButton.addEventListener('click', function(){
    location.reload();
  });

  // Connect the ARROW KEYS to the direction in which we want the car to move
  // Function that handles keydown Events

  function handleKeyDown(event) {
    const key = event.key;
    const possibleKeyStrokes = [  // does the order matter?
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    // Check is the pressed key belongs to the array of possible keys
    if (possibleKeyStrokes.includes(key)) {
      event.preventDefault(); // preventing scrolling left right up down in the browser window

      // Only when we have the game loaded, we can move the player
      if (game) {
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -1;   // why -1 on the ArrowLeft and ArrowUp
            break;

          case "ArrowUp":
            game.player.directionY = -1; // why -1 on the ArrowLeft and ArrowUp
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
  }

  // Function that handles keyup Events

  function handleKeyUp(event) {
    const key = event.key;
    const possibleKeyStrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    // Check is the pressed key belongs to the array of possible keys
    if (possibleKeyStrokes.includes(key)) {
      event.preventDefault(); // preventing scrolling left right up down in the browser window

      // Only when we have the game loaded, we can move the player
      if (game) {
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = 0; // only moving once not continuassly
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
  }

  //Associate the handleKeyDown function with Event Listener
  window.addEventListener("keydown", handleKeyDown);

  //Associate the handleKeyUp function with Event Listener
  window.addEventListener("keyup", handleKeyUp);
};
