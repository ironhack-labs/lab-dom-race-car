window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    location.reload();
  });

  function startGame() {
    game = new Game();
    game.start();
  }

  function handleKeyDown(event) {
    const key = event.key;
    const possibleKeyStrokes = [
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
    ];

    if (possibleKeyStrokes.includes(key)) {
      event.preventDefault();

      switch (key) {
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
    }
  }

  window.addEventListener("keydown", handleKeyDown);
};
