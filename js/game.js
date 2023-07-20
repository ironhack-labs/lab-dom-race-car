class Game {
  // call a constructor - a function that will  be called any time we create an object via class

  // its useful to store all the properties that belong to the future object.

  constructor() {
    //get all the possible screens
    // game-screen and game-end are initially hidden
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");

    //player
    //this.player = null; // this value will be changed later when the player is made
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "./images/car.png"
    );

    //style for the game board
    this.width = 500;
    this.height = 600;

    // obstacles - array is preferable because its more simple, they all look the same
    this.obstacles = [];

    //flag to give info about process of pushing an obstackle
    this.isPushingObstacle = false;

    //trees and rocks
    // {trees: [], rocks: []}

    //score with default value 0
    this.score = 0;

    //lives
    this.lives = 3;

    //gameOver flag
    this.gameIsOver = false;
  }

  //  1)   first function of the game - always implement this!
  start() {
    //set the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    // hide the Start Screen
    this.startScreen.style.display = "none";

    //Show the Game Screen
    this.gameScreen.style.display = "block"; // displaying as a block element block shows the display / hidden to hide it

    //Start the Game Loop
    this.gameLoop();
  }

  //   2)  second function - the Game loop
  //creating an Animation Function

  gameLoop() {
    console.log("Game Loop");

    // Check if the game is over to interrupt the game loop
    if (this.gameIsOver) {
      return;
    }

    this.update(); // pay attention

    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    // write later the code
    //this.player.move(); this is moved 5 lines of code below

    //BONUS scores adn lives
    let score = document.getElementById("score"); // grabbing the elements from HTML that have the score or lives
    let lives = document.getElementById("lives");

    score.innerHTML = this.score;
    lives.innerHTML = this.lives;

    if (this.lives === 0) {
      this.endGame();
    }

    // here
    this.player.move();

    // Check for collision and if an obstacle is still on the screen
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      // Check if the player collided with an obstacle
      if (this.player.didCollide(obstacle)) {
        // remove the obstacle from the DOM / HTML
        obstacle.element.remove();

        // Remove obstacle from the array                   ////////////
        this.obstacles.splice(i, 1);

        //  Reduce player's lives by 1
        this.lives--;
      }




      // Check if the obstacle is off the screen (at the bottom)
      else if (obstacle.top > this.height) {
        // Congratulations, you avoided one obstacle
        this.score++;

        // Remove obstacle  from the HTML
        obstacle.element.remove();

        //Remove the obstacle from the array of obstacles
        this.obstacles.splice(i, 1);
      }
    }

    // Update Obstacles
    if (!this.obstacles.length && !this.isPushingObstacle) {
      this.isPushingObstacle = true; //
      setTimeout(() => {
        this.obstacles.push(new Obstacle(this.gameScreen));
        this.isPushingObstacle =false;
      }, 500);
    }
  }

  endGame() {  
    // remove the player
    this.player.element.remove();

    //remove all obstacles from the array of obstacles
    this.obstacles.forEach((obstacle) => {                      ///// () ?
        // remove frm the HTML 
      obstacle.element.remove();
    });

    this.obstacles = []; //

    this.gameIsOver = true;

    // hide the game sreen
    this.gameScreen.style.display = "none";

    // Show end game screen
    this.gameEndScreen.style.display = "block";
  }
}
