class Game {
    
    constructor(startScreen, gameScreen, endScreen) {
        this.startScreen = document.getElementById(startScreen);
        this.gameScreen = document.getElementById(gameScreen);
        this.gameEndScreen = document.getElementById(endScreen);
        this.player = null;
        this.height = 600;
        this.width = 800;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
        this.gameIntervalId;
        this.gameLoopFrecuency = Math.round(1000/60);
    }

    start() {
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        this.startScreen.style.display = "none";

        this.gameScreen.style.display = "block";

        this.gameIntervalId = setInterval(() =>{
            this.gameLoop();
        }, this.gameLoopFrecuency);
    }

    gameLoop(){
        this.update();
        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId);
        }
    }

    update(){
        //
    }
}