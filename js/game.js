class Game {
  constructor() {
    this.startScreen = document.getElementById(`game-intro`);
    this.gameScreen = document.getElementById(`game-screen`);
    this.gameEndScreen = document.getElementById(`game-end`);
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
    this.gameLoopFrequency = Math.round(1000 / 60); // 60fps

    // Display initial score and lives
    this.updateScore();
    this.updateLives();
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = `none`;
    this.gameScreen.style.display = `block`;
    this.gameIntervalId = setInterval(() => { this.gameLoop() }, this.gameLoopFrequency)
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
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.lives--;
        this.updateLives();
        i--;
      } else if (obstacle.top > this.height) {
        this.score++;
        this.updateScore();
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
      }
    }

    if (this.lives === 0) {
      this.endGame();
    }

    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }

  endGame() {
    this.player.element.remove();
    this.obstacles.forEach(obstacle => obstacle.element.remove());
    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
  }

  // Method to update the score display
  updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = this.score;
  }

  // Method to update the lives display
  updateLives() {
    const livesElement = document.getElementById('lives');
    livesElement.textContent = this.lives;
  }
}






//!  
// class Game {
//   // code to be added
//   constructor() {
//     this.startScreen = document.getElementById(`game-intro`);
//     this.gameScreen = document.getElementById(`game-screen`);
//     this.gameEndScreen = document.getElementById(`game-end`);
//     this.player = new Player(
//       this.gameScreen,
//       200,
//       500,
//       100,
//       150,
//       "./images/car.png"
//     );
//     // ↑ Iteration 1 / leave it as null for now. We will use this property to save the instance of the Player class that we'll create it in the next iteration.
//     // ↑ Iteration 4 / 1. As a reminder, we have already defined the player property of the Game class and set it to null. Now let's instantiate a new Player object and store it in the player property of the Game.

//     this.height = 600;
//     this.width = 500;
//     this.obstacles = [];
//     // ↑ an empty array. We'll use it to store the obstacle instances we create later.
//     this.score = 0;
//     this.lives = 3;
//     this.gameIsOver = false;
//     // ↑ a flag used to track whether the game is over. Set the initial value to false.
//     this.gameIntervalId;
//     // ↑ a variable used to store the id of the interval running the game loop. We store and use this id to clear the interval once the game is over.gameIntervalId
//     this.gameLoopFrequency = Math.round(1000 / 60); // 60fps
//     // ↑ gameLoopFrecuency - a number that indicates the interval in milliseconds at which the game loop will execute. A good value for most screens is 1000/60, which equates to the the game being updated every ~17 millisecond, or about 60 times per second (60fps).
//   }

//   // 1+ usages new*
//   start() {
//     // Set the height and width of the game screen
//     this.gameScreen.style.height = `${this.height}px`;
//     this.gameScreen.style.width = `${this.width}px`;

//     // Hide the start screen
//     this.startScreen.style.display = `none`;
//     // Show the game screen
//     this.gameScreen.style.display = `block`;

//     // Runs the gameLoop on a fequency of 60 times per second. Also stores the ID of the interval.
//     this.gameIntervalId = setInterval(() => { this.gameLoop() }, this.gameLoopFrequency)
//     // this.gameIntervalId = setInterval(this.gameLoopFrequency, this.gameLoopFrequency,this,game)
//   }


//   gameLoop() {
//     console.log("in the game loop");

//     this.update();

//     // If "gameIsOver" is set to "true" clear the interval to stop the loop
//     if (this.gameIsOver) {
//       clearInterval(this.gameIntervalId)
//     }
//   }


//   update() {
//     this.player.move();
//     // console.log("in the update");

//     // Check for collision and if an obstacle is still on the screen
//     for (let i = 0; i < this.obstacles.length; i++) {
//       const obstacle = this.obstacles[i];
//       obstacle.move();

//       // If the player's car collides with an obstacle
//       if (this.player.didCollide(obstacle)) {
//         // Remove the obstacle element from the DOM
//         obstacle.element.remove();
//         // Remove obstacle object from the array
//         this.obstacles.splice(i, 1);
//         // Reduce player's lives by 1
//         this.lives--;
//         // Update the counter variable to account for the removed obstacle
//         i--;
//       } // If the obstacle is off the screen (at the bottom)
//       else if (obstacle.top > this.height) {
//         // Increase the score by 1
//         this.score++;
//         // Remove the obstacle from the DOM
//         obstacle.element.remove();
//         // Remove obstacle object from the array
//         this.obstacles.splice(i, 1);
//         // Update the counter variable to account for the removed obstacle
//         i--;
//       }
//     }

//     // If the lives are 0, end the game
//     if (this.lives === 0) {
//       this.endGame();
//     }

//     // Create a new obstacle based on a random probability
//     // when there is no other obstacles on the screen
//     if (Math.random() > 0.98 && this.obstacles.length < 1) {
//       this.obstacles.push(new Obstacle(this.gameScreen));
//     }
//   }

//   // Create a new method responsible for ending the game
//   endGame() {
//     this.player.element.remove();
//     this.obstacles.forEach(obstacle => obstacle.element.remove());

//     this.gameIsOver = true;

//     // Hide game screen
//     this.gameScreen.style.display = "none";
//     // Show end game screen
//     this.gameEndScreen.style.display = "block";
//   }
// }



