class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.endScreen = document.getElementById("game-end");
        this.livesElement = document.getElementById("lives");
        this.scoreElement = document.getElementById("score");

        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
        this.gameIntervalId = null;
        this.gameLoopFrequency = Math.round(1000 / 60);

        this.player = new Player(this.gameScreen, this.width / 2 - 25, this.height - 100, 50, 100, "./images/car.png");
    }

    start() {
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.endScreen.style.display = "none";

        this.gameIntervalId = setInterval(() => {
            this.gameLoop();
        }, this.gameLoopFrequency);
    }

    gameLoop() {
        this.update();

        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId);
        }
    }

    update() {
        this.player.move();
        if (Math.random() > 0.75 && this.obstacles.length < 1) {
            this.obstacles.push(new Obstacle(this.gameScreen));
        }

        this.obstacles.forEach((obstacle) => {
            obstacle.move();

            if (this.player.didCollide(obstacle)) {
                obstacle.element.remove();
                this.obstacles.splice(0, 1);
                this.lives--;
                this.livesElement.textContent = this.lives;
            } else if (obstacle.top > this.height) {
                obstacle.element.remove();
                this.obstacles.splice(0, 1);
                this.score++;
                this.scoreElement.textContent = this.score;
            }
        });
        this.lives === 0 ? this.endGame() : null;
    }

    endGame() {
        this.player.element.remove();
        this.obstacles.forEach((o) => {
            o.element.remove();
        });
        this.gameIsOver = true;
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "none";
        this.endScreen.style.display = "block";
    }
}
