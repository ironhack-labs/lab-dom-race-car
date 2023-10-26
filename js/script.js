window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    const startGame = new Game();
    game.start();
  }
  function handleKeydown(event) {
    console.log(event.key);
    const key = event.key;
    const possibleKeydown = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];

    if (possibleKeydown.includes(key)) {
      event.preventDefault();
      //stoppe propagation du bouton

      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -1;
          break;
        case "ArrowUp":
          game.player.directionY = 1;
          break;
        case "ArrowRight":
          game.player.directionX = 1;
          break;
        case "ArrowDown":
          game.player.directionY = 1;
          break;
      }
    }
  }
  window.addEventListener("keydown", handleKeydown);

  restartButton.addEventListener("click", function () {
    location.reload();
  });
};
