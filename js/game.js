class Game {
  // code to be added
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
    this.obstacles = [new Obstacle(this.gameScreen)];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
  }

  start() {
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.gameLoop();
  }

  gameLoop() {
    // console.log("in the game loop");

    if (this.gameIsOver) {
      return;
    }

    this.update();
    window.requestAnimationFrame(() => this.gameLoop());
  }
  update() {
    // console.log("in the update")
    this.player.move();
    const obstacle = this.obstacles[0];
    obstacle.move();

    if (this.player.didCollide(obstacle)) {
      this.lives--;
      obstacle.element.remove();
      this.obstacles = [];
      this.obstacles.push(new Obstacle(this.gameScreen));
    }

    if (obstacle.top > this.height) {
      if (Math.random() > 0.98) {
        obstacle.element.remove();
        this.obstacles = [];
        this.obstacles.push(new Obstacle(this.gameScreen));
      }
    }

    if (!this.lives) {
      this.endGame();
    }
  }

  endGame() {
    this.gameIsOver = true;
    this.player.element.remove();
    this.obstacles[0].element.remove();
    this.obstacles = [];
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }

}

window.onload = function(){
  restartButton.addEventListener("click", function () {
    restartGame();
  });
  function restartGame() {
    location.reload();
  }
};
