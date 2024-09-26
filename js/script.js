window.addEventListener("load", () => {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
    document.addEventListener("keydown", (event) => {
      const key = event.key;
      const possibleKeystrokes = [
        "ArrowLeft",
        "ArrowUp",
        "ArrowRight",
        "ArrowDown",
      ];
      if (possibleKeystrokes.includes(key)) {
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -2;
            break;
          case "ArrowUp":
            game.player.directionY = -2;
            break;
          case "ArrowRight":
            game.player.directionX = 2;
            break;
          case "ArrowDown":
            game.player.directionY = 2;
            break;
        }
      }
    });
    document.addEventListener("keyup", (event) => {
      const key = event.key;
      const possibleKeystrokes = [
        "ArrowLeft",
        "ArrowUp",
        "ArrowRight",
        "ArrowDown",
      ];
      if (possibleKeystrokes.includes(key)) {
        switch (key) {
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
      game.player.directionX = 0;
      game.player.directionY = 0;
    });
  }

  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", () => {
    location.reload;
  })
});
