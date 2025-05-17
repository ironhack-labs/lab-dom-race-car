window.onload = function () {
  const startButton = document.getElementById("start-button")
  const restartButton = document.getElementById("restart-button")
  let game = null
  let player = null

  startButton.addEventListener("click", function (e) {
    startGame()
  })

  restartButton.addEventListener("click", (e) => {
    window.location.reload()
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      player.directionX = 2.5
    }
    if (e.key === "ArrowLeft") {
      player.directionX = -2.5
    }
    if (e.key === "ArrowUp") {
      player.directionY = -2.5
    }
    if (e.key === "ArrowDown") {
      player.directionY = 2.5
    }
  })

  document.addEventListener("keyup", () => {
    player.directionY = 0
    player.directionX = 0
  })

  function generateObstacle() {
    let obstacle = document.createElement("img")
    obstacle.style.width = "50px"
    obstacle.style.height = "100px"
    obstacle.style.position = "absolute"

    let top = 0
    let left = Math.floor(Math.random() * 450)
    game.obstacles.push({
      obstacle,
      top: top,
      left: left,
      velocity: 1.5,
    })

    obstacle.style.top = top + "px"
    obstacle.style.left = left + "px"
    obstacle.style.rotate = "180deg"
    obstacle.src = "../images/redCar.png"

    game.gameScreen.appendChild(obstacle)
  }

  function startGame() {
    game = new Game()
    player = new Player(game.gameScreen, 223, 520, 100, 50)

    game.player = player
    game.start()

    game.obstacleInterval = setInterval(() => {
      generateObstacle()
    }, 3000)
  }
}