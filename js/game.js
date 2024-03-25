class Game {
    // code to be added
    constructor() {
        this.startScreen = document.querySelector("#game-intro");
        this.gameScreen = document.querySelector("#game-screen");
        this.gameEnd = document.querySelector("#game-end");
        this.player;    // To store player
        this.height = 600;
        this.width = 500;
        this.obstacles = []; // To store obstacles
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;    // game status
        this.gameIntervalId;    // stores interval id
        this.gameLoopFrecuency = Math.round(1000 / 60); // update 60 frames per second
        this.currentFrame = 0;
    }

    start() {
        // Hide the start screen
        this.startScreen.style.display = "none";

        // Show the game screen
        this.gameScreen.style.display = "block";

        // Set the height and width of the game screen
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        this.player = new Player(this.gameScreen);
        this.animate();
    }

    animate() {
        // Runs the gameLoop on a fequency of 60 times per second. Also stores the ID of the interval.
        this.gameIntervalId = setInterval(() => {
            this.player.render();

            this.currentFrame += 1;
            if (this.currentFrame % 100 === 0)
                this.obstacles.push(new Obstacle(this.gameScreen));

            let nextObstacles = [];
            this.obstacles.forEach(obstacle => {
                obstacle.render();
                if (this.player.didCollide(obstacle)) {
                    this.lives -= 1;
                    obstacle.element.remove();
                    if (this.lives === 0) {
                        this.gameIsOver = true;
                    }
                } else if (obstacle.top < this.gameScreen.clientHeight) {
                    nextObstacles.push(obstacle);
                } else {
                    this.score += 1;
                    obstacle.element.remove();
                }
            })
            this.obstacles = nextObstacles;
            document.getElementById('score').innerText = this.score;
            document.getElementById('lives').innerText = this.lives;

            if (this.gameIsOver) {
                clearInterval(this.gameIntervalId);
                this.player.element.remove();
                this.obstacles.forEach(currentObstacle => {
                    currentObstacle.element.remove()
                });
                this.gameScreen.style.display = "none";
                this.gameEnd.style.display = "block";
            }
        }, this.gameLoopFrecuency);
    }

}