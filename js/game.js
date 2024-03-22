class Game {
    constructor(){
        this.startScreen = document.querySelector(`#game-intro`);
        this.gameScreen = document.querySelector(`#game-screen`);
        this.gameEndScreen = document.querySelector(`#game-end`);
        this.player = null;
        this.dimensions = { height: 600, width: 500 };
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
        this.gameIntervalId;
        this.gameLoopFrequency = Math.round(1000/60); // Approximately 16.67 milliseconds for 60 FPS
        this.lastUpdateTime = Date.now();
        this.player = new Player(
            this.gameScreen,
            200,
            500,
            100,
            150,
            "./images/car.png"
          );
    }

    start() {
        // Set the height and width of the game screen
        this.gameScreen.style.height = `${this.dimensions.height}px`;
        this.gameScreen.style.width = `${this.dimensions.width}px`;

        // Hide the start screen
        this.startScreen.style.display = "none";
        
        // Show the game screen
        this.gameScreen.style.display = "block";

        // Begin the game loop with delta time correction
        this.gameIntervalId = setInterval(() => {
            const now = Date.now();
            const deltaTime = now - this.lastUpdateTime;
            this.lastUpdateTime = now;
            this.gameLoop(deltaTime);
        }, this.gameLoopFrequency);
    }
    
    gameLoop(deltaTime) {
        console.log("in the game loop", deltaTime);
        this.update();

        if (this.gameIsOver) {
            this.endGame();
        }
    }
    
    update = () => {
        console.log("Updating game state");
        this.player.move();
        // Game update logic here, potentially using this.currentTime for time-based calculations
        
    // Check for collision and if an obstacle is still on the screen
    for (let i = 0; i < this.obstacles.length; i++) {
        const obstacle = this.obstacles[i];
        obstacle.move();
  
        // If the player's car collides with an obstacle
        if (this.player.didCollide(obstacle)) {
          // Remove the obstacle element from the DOM
          obstacle.element.remove();
          // Remove obstacle object from the array
          this.obstacles.splice(i, 1);
          // Reduce player's lives by 1
          this.lives--;
          // Update the counter variable to account for the removed obstacle
          i--;
          // Diplaying it
          document.querySelector(`#lives`).textContent = this.lives;
        } // If the obstacle is off the screen (at the bottom)
        else if (obstacle.top > this.height) {
          // Increase the score by 1
          this.score++;
          // Remove the obstacle from the DOM
          obstacle.element.remove();
          // Remove obstacle object from the array
          this.obstacles.splice(i, 1);
          // Update the counter variable to account for the removed obstacle
          i--;
        }
      }


      if (this.lives === 0) {
        this.endGame();
      }

      if (Math.random() > 0.1 && this.obstacles.length < 1) {
        this.obstacles.push(new Obstacle(this.gameScreen));
        console.log(this.obstacles)
      }
    }

    endGame = () => {
        clearInterval(this.gameIntervalId);
        console.log("Game Over");
        this.player.element.remove();
        this.obstacles.forEach(function (obstacle) {
          obstacle.element.remove();
        });
    
        this.gameIsOver = true;
        // Hide game screen
        this.gameScreen.style.display = "none";
        // Show end game screen
        this.gameEndScreen.style.display = "block";
    }
}
