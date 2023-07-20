window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  // Iteration 2: Start the Game - action of click in the button
  let game;

  startButton.addEventListener("click", function() {
    startGame();
  });

  restartButton.addEventListener('click', function() {
    location.reload;
  })

  function startGame() {
    console.log("start game");

    game = new Game(); // initialize the 'let game'

    game.start();
  }

  // Function that handles keydown (pressing a key) events (Iteration 5: Handle Keyboard Input)
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown"
    ]

    // Check if the pressed key belongs to the array of possible keys
    if(possibleKeystrokes.includes(key)) {
      // prevent the default key actions from happening
      // in this case, it0s scroll-up / scroll-down / scroll-left / scroll-right in the browser window
      event.preventDefault();

      // Only when we have a game loaded, we can move the player
      if(game) {
        switch(key) {
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
  }

    // Function that handles keyup (releasing the key) events
    function handleKeyUp(event) {
      const key = event.key;
      const possibleKeystrokes = [
        "ArrowLeft",
        "ArrowUp",
        "ArrowRight",
        "ArrowDown"
      ]
  
      // Check if the pressed key belongs to the array of possible keys
      if(possibleKeystrokes.includes(key)) {
        // prevent the default key actions from happening
        // in this case, it0s scroll-up / scroll-down / scroll-left / scroll-right in the browser window
        event.preventDefault();
  
        // Only when we have a game loaded, we can move the player
        if(game) {
          switch(key) {
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
    }

    // Associate the handleKeydown function with an Event Listener
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyUp);
};
