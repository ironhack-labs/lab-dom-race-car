window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");

    startButton.addEventListener("click", function () {
        startGame();
    });

  function startGame() {
      console.log("start game");
      const game = new Game();
      game.start();

      function handleKeyDown(e) {
          switch (e.key) {
              case "ArrowLeft":
                  game.player.directionX = -5;
                  break;
              case "ArrowRight":
                  game.player.directionX = 5;
                  break;
              case "ArrowUp":
                  game.player.directionY = -5;
                  break;
              case "ArrowDown":
                  game.player.directionY = 5;
                  break;
          }
      }

      function handleKeyUp(e) {
          switch (e.key) {
              case "ArrowLeft":
              case "ArrowRight":
                  game.player.directionX = 0;
                  break;
              case "ArrowUp":
              case "ArrowDown":
                  game.player.directionY = 0;
                  break;
          }
      }

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
  }
        restartButton.addEventListener("click", function () {
            location.reload(); // Reload the page to restart the game
        });



};