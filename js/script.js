window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function restartGame() {
    location.reload();
  }

  function startGame() {
    console.log("start game");
    game = new Game();

    game.start();
  }

  document.onkeydown = (event) => {
    //This is alternative way to bind event.
    // window.addEventListener("keydown", function (event) {

    let direction = event.key;
    let possibleMove = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
    console.log(`user pressed ${direction}`);

    if (possibleMove.includes(direction)) {
      event.preventDefault();

      switch (direction) {
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
  };
};
