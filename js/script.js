window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let startaGame;
  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    startaGame = new Game();
    startaGame.start();
  }
};
