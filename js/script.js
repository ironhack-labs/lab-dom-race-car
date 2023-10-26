window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  const game = new Game();

  startButton.addEventListener("click", function () {
    startGame(); //hoisting
    game.start();
  });

  function startGame() {
    console.log("start game");
  }

  function handleKeydown(event) {
    const key = event.key;
    //console.log(key);
    const possibleArr = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
    if (possibleArr.includes(key)) {
      event.preventDefault();
      switch (key) {
        case "ArrowLeft":
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

  function handleKeyup(event) {
    const key = event.key;
    //console.log(key);
    const possibleArr = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
    if (possibleArr.includes(key)) {
      event.preventDefault();
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = 0;
          break;
        case "ArrowUp":
          game.player.directionY = 0;
          break;
        case "ArrowRight":
          game.player.directionX = 0;
          break;
        case "ArrowDown":
          game.player.directionY = 0;
          break;
      }
    }
  }

  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("keyup", handleKeyup);
};
