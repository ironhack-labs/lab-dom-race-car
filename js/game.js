class Game {
  // code to be added
  constructor() {
    this.startScreen = document.getElementbyId("game-intro");
    this.gameScreen = document.getElementbyId("game-screen");
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
    this.obstacles = new Obstacle();
    this.score = 0;
    this.lives = 3;
    this.gameOver = 0;
  }

  start() {
    this.gameScreen.style.height = this.height;
    this.gameScreen.style.width = this.width;
    this.styleScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameLoop();
  }

  gameLoop() {
    console.log("in the game loop");

    if (this.gameOver) {
      return;
    }

    this.update();

    window.requestAnimatedFrame(this.gameLoop());
  }

  update() {
    this.player.move();
    if (Math.random() > 0.98  this.obstacles.length < 1) {
        this.obstacles.push(new Obstacle(this.gameScreen)); 

    }
  for (let index = 0; index < this.obstacles.length; index++) { 
    const obstacle = this.obstacles[index];
    obstacle.move();

    if (this.player.didCollide(obstacle)) { 
        obstacle.element.remove();
        this.obstacles.splice(index, 1);
        this.lives--;
        const liveHtml = document.getElementbyId("lives")
        liveHtml.textContent = this.lives
        index--
    } else if (obstacle.top > this.height){
        this.score++;
        const scoreHtml = document.getElementById("score")
        scoreHtml.textContent = this.score;
        obstacle.element.remove();
        this.obstacles.splice(index, 1);
        index--

    }
  }

  if(this.lives === 0) { 
    this.endGame()
  }
  }
  endGame() { 
    this.player.element.remove();
    this.obstacles.forEach(obstacle => {this.obstacle.element.remove()})
    this.gameIsOver = true

    this.gameScreen.style.display = "none"
    this.gameEndScreen.style.display = "block";
  }
}
