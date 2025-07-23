class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");

    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");

    this.player = null;
    this.height = 600;
    this.width = 500;

    this.obstacles = [];
    this.score = 0;
    this.lives = 3;

    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 60;
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "./images/car.png"
    );

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    this.update();

    if (this.lives <= 0) {
      this.endGame();
    }
  }

  update() {
    this.player.move();

    if (Math.random() < 0.03) {
      const newObstacle = new Obstacle(this.gameScreen);
      this.obstacles.push(newObstacle);
    }

    this.obstacles.forEach((obstacle, index) => {
      obstacle.move();

      if (this.player.didCollide(obstacle)) {
        this.lives--;
        obstacle.element.remove();
        this.obstacles.splice(index, 1);
      } else if (obstacle.top > this.height) {
        this.score++;
        obstacle.element.remove();
        this.obstacles.splice(index, 1);
      }
    });

    this.updateHUD();
  }

  updateHUD() {
    this.scoreElement.textContent = `Score: ${this.score}`;
    this.livesElement.textContent = `Lives: ${this.lives}`;
  }

  endGame() {
    clearInterval(this.gameIntervalId);
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";

    const finalScore = document.getElementById("final-score");
    if (finalScore) {
      finalScore.textContent = `Your final score: ${this.score}`;
    }
  }
}