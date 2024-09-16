window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game = null;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }

  window.addEventListener("keydown", (event) => {
    event.preventDefault();
    const key = event.key;

    switch (key) {
      case "ArrowDown":
        game.player.directionY+=3;
        return;
      case "ArrowUp":
        game.player.directionY-=3;
        return;
      case "ArrowLeft":
        game.player.directionX-=3;
        return;
      case "ArrowRight":
        game.player.directionX+=3;
        return;
    }

  });

  document.querySelector("#restart-button").addEventListener("click", () => {
    location.reload();
  });

};
