window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  restartButton.addEventListener('click', function restartGame() {
    location.reload();
  });

  function handleKeyDown (event) {
    const key = event.key;
    const possibleKeys = [
      "ArrowLeft",
      "ArrowUp", 
      "ArrowRight",
      "ArrowDown"
    ]

    if (possibleKeys.includes(key)) {
      event.preventDefault()

      switch(key) {
        case "ArrowLeft":
          console.log(key)
          console.log(game.player.directionX)
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
    }
  }

  window.addEventListener("keydown", handleKeyDown)

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game()
    game.start()
  }
};

