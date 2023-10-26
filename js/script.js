window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let awesomeGame = new Game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", () => {
    location.reload()
  });

  function startGame() {
    awesomeGame.start();
  }

  function keyPressed(event) {
    if (event.key == 'w') awesomeGame.player.directionY = -1;
    if (event.key == 'a') awesomeGame.player.directionX = -1;
    if (event.key == 's') awesomeGame.player.directionY = 1;
    if (event.key == 'd') awesomeGame.player.directionX = 1;
  }

  window.addEventListener("keydown", keyPressed);
};
