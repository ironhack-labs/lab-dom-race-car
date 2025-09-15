class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.livesElement = document.getElementById("lives");
    this.scoreElement = document.getElementById("score");
    this.player = new Player(this.gameScreen, 450, 200);
    this.height = 600;
    this.width = 500;
    this.obstacles = [new Obstacle(this.gameScreen)];
    this.score = 0;
    this.lives = 1;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = Math.floor(1000 / 60);
    this.frame = 0;
  }
  start() {
    //sets the height and width of the game screen
    this.gameScreen.style.height = this.height + "px";
    this.gameScreen.style.width = this.width + "px";
    //hides the start screen
    this.startScreen.style.display = "none";
    //shows the game screen
    this.gameScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  gameLoop() {
    this.frame++;
    // console.log("inside the game loop");
    this.update();
    //check if the game is over
    if (this.gameIsOver) {
      //this stops the loop from running
      clearInterval(this.gameIntervalId);
      this.gameOver();
    }
  }
  update() {
    //always call the move method of your player in the update
    this.player.move();
    //this moves all the obstacles
    for (let i = 0; i < this.obstacles.length; i++) {
      const currentObstacle = this.obstacles[i];
      currentObstacle.move();
      //if the obs goes off the screen on the bottom...
      //splice from array, and remove the element
      if (currentObstacle.top > 650) {
        this.obstacles.splice(i, 1);
        //dont forget to remove the element from the DOM
        currentObstacle.element.remove();

        //add one point to this.score and then update the DOM
        this.score++;
        this.scoreElement.innerText = this.score;
      }

      //check if obs hit our car
      if (this.player.didCollide(currentObstacle)) {
        //remove the obs from js array with .splice
        //remove the DOM img from the game screen
        // this.lives --
        this.obstacles.splice(i, 1);
        //dont forget to remove the element from the DOM
        currentObstacle.element.remove();
        //this changes the js variable of this.lives
        this.lives--;
        //update the DOM to have the new lives
        this.livesElement.innerText = this.lives;
        //check if the this.lives === 0
        if (this.lives === 0) {
          this.gameIsOver = true;
        }
      }
    }

    //this will control how ofter an obstacle is added
    if (this.frame % 200 === 0) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }
  gameOver() {
    console.log("game is over");
    //hide the game screen
    this.gameScreen.style.display = "none";
    //show the game over screen
    this.gameEndScreen.style.display = "block";
    //remove the player car from the game screen
    this.player.element.remove();
  }
}