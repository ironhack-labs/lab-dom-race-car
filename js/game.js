class Game {
    // code to be added
    constructor (startScreen, gameScreen, gameEndScreen, player, height, width, obstacles, score, lives, gameIsOver){
        this.startScreen = document.querySelector("#game-intro");
        this.gameScreen = document.querySelector("#game-screen");
        this.gameEndScreen = document.querySelector("#game-end");
        this.player = null;
        this.heigth = "600px";
        this.width  = "500px";
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
    }

    start(){
        this.gameScreen.style.height = `${this.heigth}px`;
        this.gameScreen.style.width = `${this.width}px`;

        this.startScreen.style.display = "none";

        this.gameScreen.style.display = "block";

        this.gameLoop();
    }

    gameLoop(){
        if (this.gameIsOver === true){
            return;
        }

       this.update();

        window.requestAnimationFrame(() => this.gameLoop);
    }

    update(){
        
    }
}