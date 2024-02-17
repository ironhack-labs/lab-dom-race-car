window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", function() {
    restartGame()
  })
  function startGame() {
    console.log("start game");
    game = new Game()

    game.start()
  }

  function restartGame() {
    location.reload()
  }


  document.addEventListener("keydown", (e) => {
    const key = e.key
    const possibleKeyStrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown"
    ];
  
    if (possibleKeyStrokes.includes(key)) {
      e.preventDefault()
  
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -3
          break
        case "ArrowUp":
          game.player.directionY = -3
          break
        case "ArrowRight":
          game.player.directionX = 3
          break
        case "ArrowDown":
          game.player.directionY = 3
          break
      }
  
    }
  })

  document.addEventListener("keyup", (e) => {
    let key = e.key
    e.preventDefault()

    const possibleKeyStrokes = [
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight"
    ]

    if (possibleKeyStrokes.includes(key)) {
      switch (key) {
        case "ArrowUp":
        case "ArrowDown":
          game.player.directionY = 0
          break
        case "ArrowRight":
        case "ArrowLeft":
          game.player.directionX = 0
          break
      }
    }

  })
  
};

