class Game {
constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen =  document.querySelector("#game-screen");
    this.gameEndScreen =  document.querySelector("#game-end");
    this.displayScore = document.querySelector("#score");
    this.displayLives = document.querySelector("#lives");
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "../images/car.png"
    );
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
}
    start() {
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        // hide start screen
        this.startScreen.style.display = "none"; 
        // show the game screen
        this.gameScreen.style.display = "block";
        //start the game loop
        this.gameLoop();
        
    }

    gameLoop(){
        // console.log("in the game loop");

        if(this.gameIsOver) {
            return;
        }
        this.update();
        window.requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        // console.log("in the update");
        this.player.move();
        if (Math.random() > 0.98 && this.obstacles.length < 1) {
        this.obstacles.push(new Obstacle(this.gameScreen, "./images/redCar.png"));
        }

        if(this.obstacles.length) {
            const obstacles =  this.obstacles[0];
            obstacles.move();

            if(obstacles.top > this.height) {
                this.score++;
                 this.displayScore.textContent = this.score;
                obstacles.element.remove();
                this.obstacles.splice(0,1);
            }
            if(this.obstacles.length && this.player.didCollide(obstacles)) {
                this.lives --;
                this.displayLives.textContent = this.lives;
                console.log("lives:", this.lives);
                obstacles.element.remove();
                this.obstacles.splice(0,1)
            }
        }
        if(this.lives <= 0) {
            this.endGame()   
        }
    }
     endGame() {
            
            this.gameIsOver = true;
            this.obstacles.forEach(obstacle => obstacle.element.remove());
            this.gameScreen.style.display = "none";
            this.gameEndScreen.style.display = "block"; 
    }   
}
