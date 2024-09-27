window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }

  restartButton.addEventListener("click", function () {
    startGame();
  });

  const keyDownHandler = (e) => {
    const key = e.key;
    let movements = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

    if (movements.includes(key)) {
      e.preventDefault();

      if (key === "ArrowUp") {
        game.player.directionY = -1;
      } else if (key === "ArrowDown") {
        game.player.directionY = 1;
      } else if (key === "ArrowLeft") {
        game.player.directionX = -1;
      } else if (key === "ArrowRight") {
        game.player.directionX = 1;
      }
    }
  };

  const keyUpHandler = (e) => {
    const key = e.key;
    let movements = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    if (key === "ArrowUp" && game.player.directionY === -1) {
      game.player.directionY = 0;
    } else if (key === "ArrowDown" && game.player.directionY === 1) {
      game.player.directionY = 0;
    } else if (key === "ArrowLeft" && game.player.directionX === -1) {
      game.player.directionX = 0;
    } else if (key === "ArrowRight" && game.player.directionX === 1) {
      game.player.directionX = 0;
    }
  };

  window.addEventListener("keydown", keyDownHandler);
  window.addEventListener("keyup", keyUpHandler);
};
