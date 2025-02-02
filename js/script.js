window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", () => {
    location.reload();
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }

  window.addEventListener('keydown', (event) => {
    const key = event.keyCode;
    const possibleKeyStrokes = [
      37,
      38,
      39,
      40,
    ];
    if (possibleKeyStrokes.includes(key)) {
      event.preventDefault();
      switch (event.keyCode) {
        case 37:
          game.player.directionX -= 1;
          break;
        case 38:
          game.player.directionY -= 1;
          break;
        case 39:
          game.player.directionX += 1;
          break;
        case 40:
          game.player.directionY += 1;
          break;
        default:
          break;
      }
    }
  })
};
