window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game; // added

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function() {
    startGame();
  });  

  function startGame() {
    console.log("start game");
    game = new Game(); // added

    game.start(); // added
  }

  // Function that handles keys events
  function handleKeydown (event) {
    const key = event.key;

    const possibleKeys = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown"
    ]

    if (possibleKeys.includes(key)) {
      event.preventDefault();

      if(game){
        switch(key){
          case 'ArrowLeft':
            game.player.directionX = -10;
            break;

            case 'ArrowUp':
            game.player.directionY = -10;
            break;

            case 'ArrowRight':
            game.player.directionX = 10;
            break;

            case 'ArrowDown':
            game.player.directionY = 10;
            break;
        }
      }
    }
  }

  function handleKeyup (event) {
    const key = event.key;

    const possibleKeys = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown"
    ]

    if (possibleKeys.includes(key)) {
      event.preventDefault();

      if(game){
        switch(key){
          case 'ArrowLeft':
            game.player.directionX = 0;
            break;

            case 'ArrowUp':
            game.player.directionY = 0;
            break;

            case 'ArrowRight':
            game.player.directionX = 0;
            break;

            case 'ArrowDown':
            game.player.directionY = 0;
            break;
        }
      }
    }
  }

  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("keyup", handleKeyup);
};