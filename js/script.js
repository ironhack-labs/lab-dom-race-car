let game;

window.addEventListener("load", () => {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  
  startButton.addEventListener("click", function () {
    game = new Game();
    game.start();
  });

     
  restartButton.addEventListener("click", function () {
    location.reload();    
  });

  document.addEventListener("keydown", (event) => {
    if (!game || !game.player) return;

    switch (event.key) {
      case "ArrowLeft":
        game.player.directionX = -1;
        break;
      case "ArrowRight":
        game.player.directionX = 1;
        break;
      case "ArrowUp":
        game.player.directionY = -1;
        break;
      case "ArrowDown":
        game.player.directionY = 1;
        break;
    }
  });

  document.addEventListener("keyup", () => {
    if (!game || !game.player) return;
    game.player.directionX = 0;
    game.player.directionY = 0;
  });
});
