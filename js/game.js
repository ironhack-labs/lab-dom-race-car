class Game {
  constructor() {
  
    this.startScreen   = document.getElementById("game-intro");
    this.gameScreen    = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    

    //elemtns for stats
    this.$score = document.getElementById("score");
    this.$lives = document.getElementById("lives");
    this.$final = document.getElementById("final-score");


    this.player = null;
    this.width  = 500;
    this.height = 600;

    this.obstacles   = [];
    this.score       = 0;
    this.lives       = 3;
    this.gameIsOver  = false;

    this.gameIntervalid = null;                 
    this.gameLoopFrequency = Math.round(1000 / 60); 
  }

  start() {

    this.gameScreen.style.width = `${this.width}px`;
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.position = "relative";
    this.gameScreen.style.overflow = "hidden";

  
    this.startScreen.style.display = "none";
    this.gameEndScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    
    this.player = new Player(
      this.gameScreen,
      this.width / 2 - 25, 
      this.height - 120,   
      50,
      100,
      "./images/car.png"
    );

    // start loop
    this.gameIntervalid = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

    addScore(delta) {
      this.updateScore(this.score + delta);
    }
    
    updateLives(n) {
      this.lives = Math.max(0, n);
      if (this.$lives) this.$lives.textContent = this.lives;
    }
  gameLoop() {
    // console.log("in the game loop");
    this.update();

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalid);
    }
  }


  update() {
   


    if (this.player) this.player.move();

  
    for (let i = this.obstacles.length - 1; i >= 0; i--) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      if (this.player && this.player.didCollide(obstacle)) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.lives -= 1;
        
        this.updateLives(this.lives);
        if (this.lives <= 0) {
          this.endGame();
          return;
        }
        continue;
      }

     
      if (obstacle.top > this.gameScreen.offsetHeight) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        this.score += 1;
        this.$score.innerText = this.score
      }
    }

    
    if (Math.random() > 0.98 && this.obstacles.length < 3) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }

  endGame() {
    this.gameIsOver = true;
    clearInterval(this.gameIntervalid);

    if (this.player) this.player.element.remove();
    this.obstacles.forEach(ob => ob.element.remove());
    this.obstacles = [];

    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
    this.$final.innerText = this.score
  }
}