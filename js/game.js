// const { height, width } = require("@mui/system");

class Game {
    constructor() {
        this.startScreen = document.querySelector("#game-intro"); //holds the div element #game-intro. To access the element, use either document.getElementById() or document.querySelector().
        this.gameScreen = document.querySelector("#game-screen");
        this.gameEndScreen = document.querySelector("#game-end");
        this.player = new Player(
            this.gameScreen,
            200,
            500,
            100,
            150,
            "/images/car.png"
        );
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
    }
    start() {
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
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
        console.log("update");
        this.player.move();

        if (Math.random() > 0.98 && this.obstacles.length < 1) {
            this.obstacles.push(new Obstacle(this.gameScreen));
        }

        if (this.obstacles.length) {
            const obstacle = this.obstacles[0];
            obstacle.move();

            if (obstacle.top > this.height) {
                this.score++;
                obstacle.element.remove();
                this.obstacles.splice(0, 1);
            }

            if (this.obstacles.length && this.player.didCollide(obstacle)) {
                this.lives--;
                console.log(this.lives);
                obstacle.element.remove();
                this.obstacles.splice(0, 1);
            }
        }

    


        if (this.lives <= 0) {
            this.gameIsOver = true;
            {
                const gameOverDiv = document.createElement("div");
                gameOverDiv.textContent = "bayy u lost!";
                gameOverDiv.style.position = "absolute";
                gameOverDiv.style.top = "40%";
                gameOverDiv.style.left = "40%";
                gameOverDiv.style.backgroundColor = "#ffcbd9";
                gameOverDiv.style.fontSize = "115px";
                document.body.appendChild(gameOverDiv);
            }
        }


    }
}

