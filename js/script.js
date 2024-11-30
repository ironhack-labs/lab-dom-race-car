window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const game = new Game();

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game.start();
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

      
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -4;
          break;
        case "ArrowUp":
          game.player.directionY = -4;
          break;
        case "ArrowRight":
          game.player.directionX = 4;
          break;
        case "ArrowDown":
          game.player.directionY = 4;
          break;
      }
    }
  }
  function handleKeyup(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];

    
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      
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

  // Add the handleKeydown function as an event listener for the keydown event
  window.addEventListener("keyup", handleKeyup);

  // Add the handleKeydown function as an event listener for the keydown event
  window.addEventListener("keydown", handleKeydown);
};

  

  
  
