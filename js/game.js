class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen")
        this.gameEndScreen = document.getElementById("game-end")
        this.player = new Player(this.gameScreen, 200, 390, 100, 150, "./images/car.png")
        this.height = 600
        this.width = 500
        this.obstacles = []
        this.score = 0
        this.lives = 3
        this.gameOver = false
        this.gameIntervalId;
        this.gameLoopFrequency = 1000/60
        this.frames = 0
    }

    start() {
        // Set the height and width of the game screen
        this.gameScreen.style.width = `${this.width}px`
        this.gameScreen.style.height = `${this.width}px`

        // Hide the start screen
        this.startScreen.style.display = "none"

        // Show the game screen

        this.gameScreen.style.display = "block"

        // Runs the gameLoop on a fequency of 60 times per second. Also stores the ID of the interval.
        this.gameIntervalId = setInterval(() => {
            this.gameLoop()
        }, this.gameLoopFrequency);
    }

    gameLoop() {
        this.frames += 1
        if (this.frames % 125 === 0) {
            this.obstacles.push(new Obstacle(this.gameScreen))
        }
        this.update()

        // If "gameIsOver" is set to "true" clear the interval to stop the loop
        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId)
        }

    }

    update() {
        this.player.move()
        console.log("in the update")
        this.obstacles.forEach((obstacle, index) => {
            obstacle.move()

            if (this.player.didCollide(obstacle)) {
                obstacle.element.remove()
                this.obstacles.splice(index, 1)
                this.lives--
                document.getElementById("lives").innerText = `${this.lives}`
            } 
            else if (obstacle.top > this.height) {
                this.score++
                obstacle.element.remove()
                console.log(this.score)
                document.getElementById("score").innerText = `${this.score}`
                this.obstacles.splice(index, 1)
            }
        })
        
    
        if (this.lives === 0) {
            this.endGame()
        }
        
    }

    endGame() {
        this.player.element.remove()
        this.obstacles.forEach(obstacle => obstacle.element.remove())

        this.gameIsOver = true

        this.gameScreen.style.display = "none"

        this.gameEndScreen.style.display = "block"
    }


}