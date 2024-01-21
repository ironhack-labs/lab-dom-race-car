class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Player(
      this.gameScreen,
      200, //this.left --> how far away the player is from the left side
      500, //this.right --> how far away the player is from the top
      100, //this.width --> the width of the player (image)
      150, //this.height --> the height of the player (image)
      "./images/car.png"
    );
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrecuency = Math.round(1000 / 60); //60fps
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrecuency);
  }

  gameLoop() {
    this.update();
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }
  update() {
    this.player.move();
    this.obstacles.forEach((obs, index) => {
      obs.move();
      if (this.player.didCollide(obs)) {
        // Remove the image element of the obstacle from the DOM
        obs.element.remove();
        // Remove one item from the obstacle array from position "index"
        this.obstacles.splice(index, 1);
        // Reduce player's lives by 1
        this.lives--;
      } else if (obs.top > this.height) {
        // Increase the score by 1
        this.score++;
        // Remove the obstacle from the DOM
        obs.element.remove();
        // Remove one item from the obstacle array from position "index"
        this.obstacles.splice(index, 1);
      }
      if (this.lives === 0) {
        this.endGame();
      }
    });

    // Generate a random number that's above 0.98 so 1% chance and push to the
    // empty array named obstacles if it's empty
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      const newlyCreatedObstacle = new Obstacle(this.gameScreen);
      this.obstacles.push(newlyCreatedObstacle);
    }
  }

  endGame() {
    this.player.element.remove();
    this.obstacles.forEach(obs => {
      obs.element.remove();
    }) 
    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}
