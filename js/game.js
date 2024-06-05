class Game {
    constructor() {
        this.startScreen = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.gameEndScreen = document.getElementById('game-end')

        this.player = new player(this.gameScreen, 200, 500, 100, 150, './images/car.png')

        this.height = 600
        this.width = 500
        this.obstacles = []
        this.score = 0
        this.lives = 3
        this.gameIsOver = false
        this.gameIntervalId = null
        this.gameLoopFrequency = Math.round(100 / 60) //unos 60 frames se

    }
    startGame() {

        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`
        this.startScreen.style.display = 'none'
        this.gameScreen.style.display = 'block'

        this.gameIntervalId = null
        this.obstacles.push(new obstacle(this.gameScreen))

        this.gameIntervalId = setInterval(() => {
            this.gameLoop()
        }, this.gameLoopFrequency)
    }

    gameLoop() {
        console.log('in the gameLOOOP')

        this.update()

        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId)
        }
    }
    update() {
        console.log('updating the game...')
        this.player.move()

        for (let i = 0; i < this.obstacles.length; i++) {
            const obstacle = this.obstacles[i];
            obstacle.move();

            if (this.player.didCollide(obstacle)) {
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
                this.lives--;
                i--;
            }
            else if (obstacle.top > this.height) {
                this.score++;
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
                i--;
            }
        }
        if (this.lives === 0) {
            this.endGame();
        }

        if (Math.random() > 0.98 && this.obstacles.length < 1) {
            this.obstacles.push(new obstacle(this.gameScreen));
        }

    }
    endGame() {
        this.player.element.remove();
        this.obstacles.forEach(obstacle => obstacle.element.remove());

        this.gameIsOver = true;

        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "block";
    }

}
