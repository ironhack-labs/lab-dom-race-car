class Game {
    constructor() {
        this.startScreen = document.querySelector('#game-intro');// - holds the div element #game-intro. To access the element, use either document.getElementById() or document.querySelector().
        this.gameScreen = document.querySelector('#game-screen');//- holds the div element #game-screen.
        this.gameEndScreen = document.querySelector('#game-end');//- holds the div element #game-end.
        this.player = new Player(
            this.gameScreen,
            200,
            500,
            100,
            150,
            "./images/car.png"
        );                  // leave it as null for now. We will use this property to save the instance of the Player class that we'll create it in the next iteration.
        this.height = 600;// the height of the game screen in pixels. We will set it to 600.
        this.width = 500;// the width of the game screen in pixels. We will set it to 500.
        this.obstacles = [];// an empty array. We'll use it to store the obstacle instances we create later.
        this.score = 0;// a score increases every time an obstacle is passed. Set its initial value to 0.
        this.livesElement = document.querySelector("#lives");
        this.lives = 3;// the number of remaining lives the player has. Set its initial value to 3.
        this.livesElement.textContent = this.lives;
        this.gameIsOver = false;// a flag used to track whether the game is over. Set the initial value to false.
    }

    start() {
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.height}px`;
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.gameLoop();
    }

    gameLoop() {
        if (this.gameIsOver) {
            return;
        }

        this.update();
        window.requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        this.player.move();

        for (let i = 0; i < this.obstacles.length; i++) {
            const obstacle = this.obstacles[i];
            obstacle.move();
        

            if(this.player.didCollide(obstacle)) {
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
                this.lives--;
                i--;
                this.livesElement.textContent = this.lives;

            } else if (obstacle.top > this.height - obstacle.height) {
                this.score++;
                const scoreElement = document.querySelector('#score');
                scoreElement.textContent = this.score;
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
                i--;
            }
        }

        if (this.lives === 0) {
            this.endGame();
        }

        if(Math.random() > 0.98 && this.obstacles.length < 1) {
            this.obstacles.push(new Obstacle(this.gameScreen));
        }
    }

    endGame() {
        this.player.element.remove();
        this.obstacles.forEach((obstacle) => {
            obstacle.element.remove();
        });

        this.gameIsOver = true;
        this.gameScreen.style.display = "none";
        this.gameEndScreen.style.display = "block";
    }
}