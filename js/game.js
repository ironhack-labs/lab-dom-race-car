class Game {
    constructor() {
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');
        this.player = new Player(this.gameScreen, 200, 500, 100, 150, 'images/car.png');
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
        this.gameIntervalId = null;
        this.gameLoopFrecuency = 1000 / 60;
    }

    start() {
        // Set the height and width of the game screen
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';

        this.gameIntervalId = setInterval(() => {
            this.gameLoop()
        }, this.gameLoopFrecuency);

    }

    gameLoop() {
        this.update()
        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId);
            this.gameEndScreen.style.display = 'block';
            this.gameScreen.style.display = 'none';
        }
    }

    update() {
        this.player.move()
        if(this.obstacles.length ===0) {
          let obstacle = new Obstacle(this.gameScreen);
            this.obstacles.push(obstacle);

        }
        this.obstacles.forEach((obstacle) => {
            obstacle.move();
            if (obstacle.top > this.height) {
                obstacle.element.remove();
                this.obstacles.shift(); // Remove the obstacle from the array
                this.score++; // Increase score when an obstacle goes off screen
          document.querySelector('#score').innerText = `${this.score}`;
            }
            if (this.player.didCollide(obstacle)) {
                this.lives -= 1; // Decrease lives on collision
                obstacle.element.remove();
                this.obstacles.shift(); // Remove the collided obstacle
                if (this.lives <= 0) {
                    this.gameIsOver = true; // End the game if no lives left
                }
            }
            document.querySelector('#lives').innerText = `${this.lives}`;
        })
    }
}