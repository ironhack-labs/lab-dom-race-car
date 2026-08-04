window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        console.log("down"); 
        Game.player.directionY = 1;
      } 
      if (e.key === "ArrowUp") {
        console.log("up");
        Game.player.directionY = -1;
      } 
      if (e.key === "ArrowLeft") {
        console.log("left");
        Game.player.directionX = -1;
      } 
      if (e.key === "ArrowRight") {
        console.log("right");
        Game.player.directionX = 1;
      }
          if (player.directionY < 0) {
            player.directionY = 0;
          }
    });
    console
  });

  function startGame() {
    console.log("start game");
  }
};
