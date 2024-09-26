window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game = new Game();
  
  startButton.addEventListener("click", startGame);

  restartButton.addEventListener("click", () => {
    console.log("restart button clicked");
    game = new Game();
    startGame();
  });



  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowUp", 
      "ArrowDown", 
      "ArrowLeft", 
      "ArrowRight"
    ];

    if(possibleKeystrokes.includes(key)) {
      event.preventDefault();
    }
    
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

  function handleKeyUp(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowUp", 
      "ArrowDown", 
      "ArrowLeft", 
      "ArrowRight"
    ];

    if(possibleKeystrokes.includes(key)) {
      event.preventDefault();
    }
    
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

  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("keyup", handleKeyUp);

  function startGame() {
    console.log("start game");
    game.start();
  }

  
};
