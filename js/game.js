class Game {
    constructor() {
      this.startScreen = document.querySelector("#game-intro");
      this.gameScreen = document.querySelector("#game-container");
      this.gameEndScreen = document.querySelector("#game-end");
      this.player = null;
      this.height = 600;
      this.width = 500;
      this.obstacles = [];
      this.score = 0;
      this.lives = 3;
      this.gameIsOver = false;
      this.gameIntervalId = null;
      this.gameLoopFrecuency = 1000/60;
    }

    start() {
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "flex";
       
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        
        this.player = new Player(this.gameScreen, 220, 500, 100, 150, "./images/player.png");
        this.gameIntervalId = setInterval(() => {
            this.gameLoop();
        }, this.gameLoopFrecuency);
    }

    gameLoop () {
        this.update();
        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId);
        }
    }

    update () {
        this.player.move();
        
        if (Math.random)
    }
}