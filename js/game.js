class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.gameEndScreen = document.querySelector("#game-end");
    this.width = 500;
    this.height = 600;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 60;
    this.obstacleTimeoutId = null;
    this.player = new Player(
      this.gameScreen,
      200,
      this.width,
      80,
      150,
      "../images/car.png"
    );
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
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
      return;
    }
    this.update();
  }

  update() {
    this.player.move();
    if (this.obstacles.length <= 0 && !this.obstacleTimeoutId) {
      this.obstacleTimeoutId = setTimeout(() => {
        console.log("alo");
        this.obstacles.push(new Obstacle(this.gameScreen));
        clearTimeout(this.obstacleTimeoutId);
        this.obstacleTimeoutId = null;
      }, Math.random() * (5000 - 2000) + 2000);
    }

    this.obstacles.forEach((obstacle) => {
      obstacle.move();
      if (this.player.didCollide(obstacle)) {
        obstacle.element.style.height = `0px`;
        obstacle.element.style.width = `0px`;
        this.obstacles.pop(obstacle);
        this.lives--;
        document.querySelector("#lives").innerHTML = this.lives;
      }

      if (obstacle.top === this.height) {
        obstacle.element.style.height = `0px`;
        obstacle.element.style.width = `0px`;
        this.obstacles.pop(obstacle);
        this.score++;
        document.querySelector("#score").innerHTML = this.score;
      }

      if (this.lives === 0) {
        this.endGame();
      }
    });
  }

  endGame() {
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.image.remove());
    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}
