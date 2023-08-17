class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.gameEndScreen = document.querySelector("#game-end");
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;

    this.player = new Player( //from the player from this.player.js file
      // player.js file has constructor (gameScreen, left, top, width, height, img)
      this.gameScreen,
      200, //left
      500, //top
      100, //width
      150, //height
      "./images/car.png" //img
    );
  }

  start() {
    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameLoop();
  }

  gameLoop() {
    if (this.gameIsOver) {
      // "this.gameIsOver = false" is true
      return; // stop the function (this stops at this point)
    }
    this.update();
    window.requestAnimationFrame(() => this.gameLoop());
    // it's a way to run the webstie in the frame (loop running)
    //check the article about it (omar shared)
  }

  update() {
    console.log("update");
    this.player.move();

    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
      // (Math.random() > 0.98 -> very slight chance
      // so it controlls the frequency pace (no new obstacle pops up immediately)
      // we don't need new Obstacle (this.gameScreen, "./images/car.png") -> img link don't need
      // because obstacle already has the value (red card image)
    }
    if (this.obstacles.length) {
      //obstacles array is not empty;
      const obstacle = this.obstacles[0]; //1st element of array
      obstacle.move();

      if (obstacle.top > this.height) {
        this.score++;
        document.getElementById("score").innerHTML = this.score;
        console.log("Score: ", this.score);
        obstacle.element.remove();
        this.obstacles.splice(0, 1);
      }

      if (this.obstacles.length && this.player.didCollide(obstacle)) {
        this.lives--;
        document.getElementById("lives").innerHTML = this.lives;
        console.log("lives: ", this.lives);
        obstacle.element.remove();
        this.obstacles.splice(0, 1);
      }
     
    }
    if (this.lives ===0) {
        this.endGame();
      }
    }
    endGame() 
    { this.player.element.remove();
      this.obstacles.forEach(obstacle => obstacle.element.remove());
      this.gameIsOver = true;
      this.gameScreen.style.display = "none";
      this.gameEndScreen.style.display = "block"; }

}



