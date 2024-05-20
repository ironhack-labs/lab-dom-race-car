class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Player(
      this.gameScreen,
      120,
      180,
      400,
      250,
      "./images/car.png"
    );
    this.height = 600;
    this.width = 500;
    this.obstacles = [new Obstacle(this.gameScreen)];
    this.score = 0;
    this.lives = 3;
    this.isGameOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 60;
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  gameLoop() {
    // console.log("inside the game loop");
    this.update();
    if (this.isGameOver) {
      clearInterval(this.gameIntervalId);
      this.gameOver()
    }
  }
  update() {
    // console.log("inside the update function");
    this.player.move();
    this.obstacles.forEach((oneObstacle, oneObstacleIndex) => {
        oneObstacle.move();

        // if there is a collision
        const thereWasACollision = this.player.didCollide(oneObstacle);
        if (thereWasACollision) {
            this.obstacles.splice(oneObstacleIndex, 1);
            oneObstacle.element.remove();
            this.obstacles.push(new Obstacle(this.gameScreen));
            this.lives -= 1;
            if (this.lives === 0) {
                this.isGameOver = true;
            }
            const livesElement = document.getElementById("lives");
            livesElement.innerText = this.lives;
        }

        // wrap in a function
        // this checks if the top of redCar is bigger (on the bottom) than the game page
        if (oneObstacle.top > 700){ // this.gameScreen.width ?
            this.obstacles.splice(oneObstacleIndex, 1)
            oneObstacle.element.remove();
            // and increase score by 1
            this.score += 1;
            // always update the DOM with the new score
            const scoreElement = document.getElementById("score");
            scoreElement.innerText = this.score;
            this.obstacles.push(new Obstacle(this.gameScreen))
        } 
    })
  }

  gameOver() {
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block"
  }
}
