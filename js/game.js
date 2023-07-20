class Game {
  // The constructor will create an object via class and it will store all the properties that belong to the future object
  constructor() {
    // Get all the possible screens
    // game-screen and game-end are initially hidden
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");

    // Player
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "./images/car.png"
    );

    // Style for the game board
    this.width = 500;
    this.height = 600;

    // Obstacles
    this.obstacles = [];

    // Flag to give info about being in the process of pushing an obstacle
    this.pushingObstacle = false;

    // Score
    this.score = 0;

    // Lives
    this.lives = 3;

    // gameOver flag
    this.gameIsOver = false;
  }

  // Start the game
  start() {
    // Set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    // Hide de start screen and display the same screen
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    // Start the Game Loop
    this.gameLoop();
  }

  // Creating an animation function
  gameLoop() {
    console.log("Game Loop");

    // Check if the game is over to interrupt the game loop
    if (this.gameIsOver) {
      return;
    }

    this.update();

    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    //Bonus: Add scores and lives
    let score = document.getElementById("scores");
    let lives = document.getElementById("lives");

    /*  score.innerHTML = this.score;
    lives.innerHTML = this.lives; */

    // Move the car
    this.player.move();

    // Check for collision and if an obstacle is still on screen
    for (let i = 0; i < this.obstacles.length; i++) {
      // Check if a player collided with an object
      if (this.player.didCollide(obstacle)) {
        // Remove the obstacle from the Dom
        obstacle.element.remove();
        // Remove the obstacle from thhe Array
        this.obstacles.splice(i, 1);
        //Redduce player's lives b 1
        this.lives --;

      }
      // Check if the obstacle is still on screen
      else if (obstacle.top > this.height) {
          // Congratulations to you, you avoided an obstacle
          score++;
          // Remove the obstacle from the DOM
          
          obstacle.element.remove();
          // Remove the obstacle from the array
          this.obstacles.splice(i, 1);
        }
    }
    
    // Move the obstacle
    const obstacle = this.obstacles[i];
    obstacle.move();
    
    // Update Obstacles
    if (!this.obstacles.length && !this.pushingObstacle) {
      this.pushingObstacle = true;
      setTimeout(() => {
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.pushingObstacle = false;
      }, 500);
    }
  }
}
