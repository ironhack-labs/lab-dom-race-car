class Game {
    constructor () {
        this.startScreen = document.querySelector("#game-intro");
        this.gameScreen = document.querySelector("#game-screen");
        this.gameEndScreen = document.querySelector("#game-end");
        this.player = new Player(
            this.gameScreen,
            200,
            500,
            100,
            150,
            "../images/car.png"
        );
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.scoreElement = document.querySelector("#score");
        this.livesElement = document.querySelector("#lives");
        this.gameIsOver = false;
    }
    start () {
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
        this.player.move();

        for (let i = 0; i < this.obstacles.length; i++) {
            const obstacle = this.obstacles[i];
            obstacle.move();

            if (this.player.didCollide(obstacle)) {
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
                this.lives--;
                i--;
                this.livesElement.textContent = `${this.lives}`;
                
            }
            else if (obstacle.top > this.height) {
                this.score++;
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
                i--;
                this.scoreElement.textContent = `${this.score}`;
                
            }
        }

        if (this.lives === 0) {
            this.endGame();
          }
        
        /* or:

         if (this.obstacles.length) {
            const obstacle = this.obstacles[0];
            obstacle.move();
        }

        if (obstacle.top > this.height) {
            this.score++;
            obstacle.element.remove();
            this.obstacles.splice(0, 1);
        } */

        //next line controls frequency of red car popping up
        if (Math.random() > 0.98 && this.obstacles.length < 1) {
            this.obstacles.push(new Obstacle(this.gameScreen, "../images/redCar.png"));
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