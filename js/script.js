
window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const game = new Game("game-intro", "game-screen", "game-end");

  startButton.addEventListener("click", function () {
    startGame();
  });
  
  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function startGame() {
    game.start();
  }
  function restartGame() {
    location.reload();
  }

  function handleKeydown(event) {
      if (event.type === "keydown") {
        switch (event.key) {
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
        else if (event.type === "keyup") {
          switch (event.key) {
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


  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("keyup", handleKeydown);




};










  









