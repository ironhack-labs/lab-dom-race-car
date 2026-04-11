window.onload = function () {
  const startButton = document.getElementById("start-button")
  const restartButton = document.getElementById("restart-button")

  startButton.addEventListener("click", function () {
    startGame()
  })

  function startGame() {
    const game = new Game()

    document.onkeydown(() => {})

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        game.player.directionY += 1
      }

      if (e.key === "ArrowUp") {
      }

      if (e.key === "ArrowLeft") {
      }

      if (e.key === "ArrowRight") {
      }
    })

    game.start()
  }
}