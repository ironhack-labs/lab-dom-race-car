// js/game.js

class Game {
    constructor() {
      this.startScreen = document.getElementById("game-intro");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
  
      this.player = null;
      this.height = 600;
      this.width = 500;
      this.obstacles = [];
      this.score = 0;
      this.lives = 3;
      this.gameIsOver = false;
      this.gameIntervalId = null;
      this.gameLoopFrequency = Math.round(1000 / 60); // 60fps
    }
  
    start() {
      // Set the game screen dimensions
      this.gameScreen.style.height = `${this.height}px`;
      this.gameScreen.style.width = `${this.width}px`;
  
      // Hide the start screen and show the game screen
      this.startScreen.style.display = "none";
      this.gameScreen.style.display = "block";
  
      // Initialize player
      this.player = new Player(this.gameScreen, 200, 500, 100, 150, "./images/car.png");
  
      // Start the game loop
      this.gameIntervalId = setInterval(() => {
        this.gameLoop();
      }, this.gameLoopFrequency);
    }
  
    gameLoop() {
      // Check for the game over condition
      if (this.gameIsOver) {
        clearInterval(this.gameIntervalId);
        return;
      }
  
      this.update();
    }
  
    update() {
      this.player.move();
  
      // Check for collisions and obstacle updates
      for (let i = 0; i < this.obstacles.length; i++) {
        const obstacle = this.obstacles[i];
        obstacle.move();
  
        if (this.player.didCollide(obstacle)) {
          // Remove the obstacle element from the DOM
          obstacle.element.remove();
          this.obstacles.splice(i, 1);
  
          // Decrease lives
          this.lives--;
          i--;
        } else if (obstacle.top > this.height) {
          // Increase score if obstacle is passed
          this.score++;
          obstacle.element.remove();
          this.obstacles.splice(i, 1);
          i--;
        }
      }
  
      // Create new obstacles randomly
      if (Math.random() > 0.98 && this.obstacles.length < 1) {
        this.obstacles.push(new Obstacle(this.gameScreen));
      }
  
      // End the game if lives are zero
      if (this.lives === 0) {
        this.endGame();
      }
    }
  
    endGame() {
      // Remove player and obstacles from the DOM
      this.player.element.remove();
      this.obstacles.forEach(obstacle => obstacle.element.remove());
  
      // Display the end screen
      this.gameIsOver = true;
      this.gameScreen.style.display = "none";
      this.gameEndScreen.style.display = "block";
    }
  }
  
    
  
  
  