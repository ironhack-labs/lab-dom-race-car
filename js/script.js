window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", function() {
    startGame();
  })

  document.addEventListener("keydown", (e) =>{ 
    if (e.key === "ArrowDown") {
      if(game.player.directionY < 4) {
      game.player.directionY += 1;
      }
    }
    if (e.key === "ArrowUp") {
      if (game.player.directionY > -4) {
      game.player.directionY = -1;
      }
    }
    if (e.key === "ArrowLeft") {
      if (game.player.directionX > -4){
      game.player.directionX = -1;
      }
    }
    if (e.key === "ArrowRight") {
      if (game.player.directionX < 4) {
      game.player.directionX = 1;
      }
    }
  });

  function startGame() {
    console.log("start game");
    game = new Game()
    game.start();
  }
};
