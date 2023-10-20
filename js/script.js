window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let newGame;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    restartGame();
  })

  const startGame = () => {
    newGame = new Game();
    newGame.start();
  }

  const restartGame = () => {
    location.reload();
  }

  const handleKeydown = event => {
    const key = event.key;
    const keystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown"
    ];

    if(keystrokes.includes(key)) {
      event.preventDefault();
    

      switch(key) {
        case "ArrowLeft":
          newGame.player.directionX = -1;
          break;
        case "ArrowUp":
          newGame.player.directionY = -1;
          break;
        case "ArrowRight":
          newGame.player.directionX = 1;
          break;
        case "ArrowDown":
          newGame.player.directionY = 1;
          break;
      }
    }
  }

  window.addEventListener("keydown", handleKeydown);
};
