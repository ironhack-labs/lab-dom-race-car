class Game {
  constructor() {
    this.startScreen = document.querySelector('#game-intro');
    this.gameScreen = document.querySelector('#game-screen');
    this.gameEndScreen = document.querySelector('#game-end');
    this.player = new Player(this.gameScreen, 200, 500, 100, 150, './images/car.png');
    this.height = 600;
    this.width = 500;
    this.obstacles = [new Obstacle(this.gameScreen)];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.display = 'block';
    this.startScreen.style.display = 'none';
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
    const obstacle = this.obstacles[0];
    obstacle.move();

    if (this.player.didCollide(obstacle)) {
      obstacle.element.remove();
      this.obstacles = [];
      this.obstacles.push(new Obstacle(this.gameScreen));
      this.lives--;
      document.querySelector('#lives').innerHTML = `${this.lives}`;

      if (this.lives === 0) {
        this.endGame();
      }
    }

    if (obstacle.top > this.height) {
      obstacle.element.remove();
      this.obstacles = [];
      this.score++;
      document.querySelector('#score').innerHTML = this.score;
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }

  endGame() {
    this.gameIsOver = true;
    this.gameScreen.style.display = 'none';
    this.gameEndScreen.style.display = 'block';
  }
}
