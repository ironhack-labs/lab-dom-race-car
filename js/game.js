class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");

    this.scoreValue = 0;
    this.livesValue = 3;

    // Select the DOM elements for the score and lives
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");

    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "./images/car.png"
    );
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60);
  }

  // reset() {
  //   this.obstacles = [];
  //   this.score = 0;
  //   this.lives = 3;
  //   this.gameIsOver = false;
  // }

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
    console.log("in the game loop");
    this.update();
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }

  update() {
    this.player.move();

    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.livesValue--;
        this.livesElement.textContent = this.livesValue;
        console.log("Collision! Lives:", this.livesValue);
        i--;
      }

      if (obstacle.top > this.height) {
        this.scoreValue++;
        this.scoreElement.textContent = this.scoreValue;
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        console.log("Scored! Score:", this.scoreValue);
        i--;
      }
    }

    if (this.livesValue === 0) {
      this.endGame();
    }

    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }

  endGame() {
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());
    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}
