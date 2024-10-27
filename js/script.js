window.onload = function () {
  const startButton = document.getElementById("start-button")
  const restartButton = document.getElementById("restart-button")
  let game

  startButton.addEventListener("click", function () {
    startGame()
  })

  function startGame() {
    console.log("start game")
    game = new Game()

    game.start()
  }

  const keys = {
    LEFT: ArrowLeft,
    UP: ArrowUp,
    RIGHT: ArrowRight,
    DOWN: ArrowDown,
  }

  document.onkeydown = function (event) {
    switch (event.code) {
      case this.keys.LEFT:
        game.player.directionX = -1
        break
      case this.keys.RIGHT:
        game.player.directionX = 1
        break
      case this.keys.UP:
        game.player.directionY = -1
        break
      case this.keys.DOWN:
        game.player.directionY = 1
        break
    }
  }
}