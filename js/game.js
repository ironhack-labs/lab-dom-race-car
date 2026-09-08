class Game {
  constructor() {
    // Screens
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");

    // Stats UI elements
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");

    // Board dimensions
    this.height = 600;
    this.width = 500;

    // Player
    this.player = new Player(
      this.gameScreen,
      200,
      450,
      100,
      150,
      "./images/car.png"
    );

    // Game state
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;

    // Game loop
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 60;
  }

  start() {
    // Show game screen
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

    // Randomly spawn a new obstacle
    if (Math.random() < 0.02) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }

    // Move obstacles and check collisions / off-screen removal
    for (let i = this.obstacles.length - 1; i >= 0; i--) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      // Collision: lose a life
      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.lives -= 1;
      } 
      // Avoided obstacle: gain 1 point
      else if (obstacle.top > this.gameScreen.clientHeight) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.score += 1;
      }
    }

    // Update the DOM stats display
    this.scoreElement.textContent = this.score;
    this.livesElement.textContent = this.lives;

    // End game condition
    if (this.lives <= 0) {
      this.endGame();
    }
  }

  endGame() {
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());
    this.obstacles = [];

    this.gameIsOver = true;

    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}