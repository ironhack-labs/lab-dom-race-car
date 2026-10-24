class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
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
    this.gameIntervalId = null;
    this.gameLoopFrequency = Math.round(1000 / 60);
  }

  start() {
    this.gameScreen.style.height = this.height + "px";
    this.gameScreen.style.width = this.width + "px";

    // hide the start screen and show the game
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
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
        // crash! lose a life
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.lives--;
        i--;
      } else if (obstacle.top > this.height) {
        // the car passed, get a point
        this.score++;
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
      }
    }

    // update the stats on the page
    document.getElementById("score").innerText = this.score;
    document.getElementById("lives").innerText = this.lives;

    if (this.lives === 0) {
      this.endGame();
    }

    // make a new red car sometimes
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }

  endGame() {
    this.player.element.remove();
    this.obstacles.forEach(function (obstacle) {
      obstacle.element.remove();
    });

    this.gameIsOver = true;

    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }
}
