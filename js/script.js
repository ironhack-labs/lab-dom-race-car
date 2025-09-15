window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let ourNewGame;
  //all event listeners
  startButton.addEventListener("click", function () {
    startGame();
  });
  document.addEventListener("keydown", (event) => {
    // console.log("a key was pressed", event);
    if (event.code === "ArrowLeft") {
      // console.log("going left");
      ourNewGame.player.directionX = -2;
    }
    if (event.code === "ArrowRight") {
      // console.log("going right");
      ourNewGame.player.directionX = 2;
    }
    if (event.code === "ArrowUp") {
      // console.log("going up");
      ourNewGame.player.directionY = -2;
    }
    if (event.code === "ArrowDown") {
      // console.log("going down");
      ourNewGame.player.directionY = 2;
    }
  });
  //this event listener stop the car when a key is released
  document.addEventListener("keyup", (event) => {
    if (event.code === "ArrowLeft") {
      ourNewGame.player.directionX = 0;
    }
    if (event.code === "ArrowRight") {
      ourNewGame.player.directionX = 0;
    }
    if (event.code === "ArrowUp") {
      ourNewGame.player.directionY = 0;
    }
    if (event.code === "ArrowDown") {
      ourNewGame.player.directionY = 0;
    }
  });
  //listener for the restart button
  restartButton.addEventListener("click", () => {
    //first way
    // window.location.reload();
    //'better' way
    ourNewGame = new Game();
    ourNewGame.start();
  });
  function startGame() {
    console.log("start game");
    ourNewGame = new Game();
    ourNewGame.start();
  }
};
