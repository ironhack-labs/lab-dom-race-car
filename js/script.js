window.onload = function () { // waits for browser window to open and load
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
      let game = new Game();

  startButton.addEventListener("click", function () {
    startGame();

  });

  function startGame() {
    // let game = new Game();
    game.start();
  }

window.addEventListener("keydown", (event) => {
  event.preventDefault();
  switch(event.key) {
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
});


restartButton.addEventListener("click", function () {
    location.reload()
  });
};
