window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let raceGame;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    raceGame = new Game();
    raceGame.start();
  }

  //Check if arrow keys were pressed  
  document.body.addEventListener("keydown", keyDownPressed);
  function keyDownPressed(e) {

    if (e.keyCode == '38') {// up arrow
      raceGame.player.directionY -= 1;
    }
    else if (e.keyCode == '40') {// down arrow
      raceGame.player.directionY += 1;
    }
    else if (e.keyCode == '37') {// left arrow
      raceGame.player.directionX -= 1;
    }
    else if (e.keyCode == '39') {// right arrow
      raceGame.player.directionX += 1;
    }
  }

  //Check if arrow keys were released  
  document.body.addEventListener("keyup", keyUpPressed);
  function keyUpPressed(e) {
    //Reset the Direction values on key release

    if (e.keyCode == '38') {// up arrow
      raceGame.player.directionY = 0;
    }
    else if (e.keyCode == '40') {// down arrow
      raceGame.player.directionY = 0;
    }
    else if (e.keyCode == '37') {// left arrow
      raceGame.player.directionX = 0;
    }
    else if (e.keyCode == '39') {// right arrow
      raceGame.player.directionX = 0;
    }
  }

  restartButton.addEventListener("click", function () {
    location.reload();
  });
};
