class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro")
    this.gameScreen = document.querySelector("#game-screen")
    this.endScreen = document.querySelector("#game-end")
    this.gameContainer = document.querySelector("#game-container")
    this.scoreboard = document.querySelector("#score")
    this.livesContainer = document.querySelector("#lives")
    this.player = null
    this.height = 600
    this.width = 500
    this.obstacles = []
    this.score = 0
    this.lives = 3
    this.gameIsOver = false
    this.gameIntervalId = null
    this.obstacleInterval = null
  }
  start() {
    this.gameScreen.style.height = this.height + "px"
    this.gameScreen.style.width = this.width + "px"
    this.startScreen.style.display = "none"
    this.gameScreen.style.display = "block"
    this.gameIntervalId = setInterval(() => {
      this.gameLoop()
    }, 16)
  }

  gameLoop() {
    this.update()
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId)
      clearInterval(this.obstacleInterval)
    }
  }

  update() {
    this.player.move()
    this.obstacles.forEach((obstacle, i) => {
      obstacle.top += obstacle.velocity
      obstacle.obstacle.style.top = obstacle.top + "px"

      if (
        this.player.left < obstacle.left + 50 &&
        this.player.left + this.player.width > obstacle.left &&
        this.player.top < obstacle.top + 100 &&
        this.player.top + this.player.height > obstacle.top
      ) {
        this.lives--
        this.livesContainer.innerText = this.lives

        if (this.lives > 0) {
          this.obstacles.splice(i, 1)
          obstacle.obstacle.remove()
        }

        if (this.lives === 2) {
          this.player.element.src = "../images/car-wreck1.png"
        }
        if (this.lives === 1) {
          this.player.element.src = "../images/car-wreck1 - Copia.png"
        }

        if (this.lives <= 0) {
          const explosion = document.createElement("img")
          explosion.src =
            "https://media.tenor.com/2FL76f6q7u8AAAAj/explosion.gif"
          explosion.style.width = "150px"
          explosion.style.height = "150px"
          explosion.style.position = "absolute"
          explosion.style.top = (this.player.top + obstacle.top - 30) / 2 + "px"
          explosion.style.left =
            (this.player.left + obstacle.left - 30) / 2 + "px"
          this.gameScreen.appendChild(explosion)
          this.gameIsOver = true
          setTimeout(() => {
            this.gameContainer.style.display = "none"
            this.endScreen.style.display = "block"
          }, 2000)
        }
      }

      if (obstacle.top > 620) {
        this.obstacles.splice(i, 1)
        obstacle.obstacle.remove()

        this.score += 10

        this.scoreboard.innerText = this.score
      }
    })
  }
}