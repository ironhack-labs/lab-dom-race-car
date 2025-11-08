window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    const game = new Game("game-intro", "game-screen", "game-end");
    startGame();
  });

  function startGame() {
    console.log("start game");
  }
};
