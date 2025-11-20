class Game {
    constructor() {
      this.startScreen = document.getElementById('game-intro');
      this.gameScreen = document.getElementById('game-screen');
      this.gameEndScreen = document.getElementById('game-end');
      this.player = null;
      this.height = 600;
      this.width = 500;
      this.obstacles = [];
      this.score = 0;
      this.lives = 3;
      this.gameIsOver = false;
      this.gameIntervalId = null;
      this.gameLoopFrequency = 1000 / 60; // 60fps
    }
  
    start() {
      this.startScreen.classList.add('hidden');
      this.gameScreen.classList.remove('hidden');
      this.player = new Player(this.gameScreen, this.width / 2 - 50, this.height - 160, 100, 150, 'images/blue-car.png'); // replace with your image
      this.gameLoop();
    }
  
    gameLoop() {
      this.gameIntervalId = setInterval(() => this.update(), this.gameLoopFrequency);
    }
  
    update() {
      if (this.gameIsOver) return;
  
      this.player.move();
  
      // Randomly create obstacles
      if (Math.random() < 0.02) {
        this.obstacles.push(new Obstacle(this.gameScreen));
      }
  
      // Move obstacles
      this.obstacles.forEach(obstacle => obstacle.move());
  
      // Check for collisions
      this.obstacles.forEach(obstacle => {
        if (this.player.didCollide(obstacle)) {
          this.lives -= 1;
          obstacle.top = this.height + 100; // move obstacle out of view
          if (this.lives <= 0) {
            this.endGame();
          }
        } else if (obstacle.top > this.height) {
          this.score += 1;
          obstacle.top = -200; // move obstacle out of view
        }
      });
  
      // Remove off-screen obstacles
      this.obstacles = this.obstacles.filter(o => o.top <= this.height);
    }
  
    endGame() {
      this.gameIsOver = true;
      clearInterval(this.gameIntervalId);
      this.gameScreen.classList.add('hidden');
      this.gameEndScreen.classList.remove('hidden');
    }
  }
  