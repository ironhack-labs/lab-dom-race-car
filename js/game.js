class Game {
    constructor() {
        this.startScreen = document.querySelector("#game-intro");
        this.gameScreen = document.querySelector("#game-screen");
        this.gameEndScreen = document.querySelector("#game-end");
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
        this.obstacle = [new Obstacle(this.gameScreen)];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
    }

    start() {
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.display = "block";
        this.startScreen.style.display = "none";
        this.gameLoop();
    }

    gameLoop() {
        console.log("game loop");

        if(this.gameIsOver) {
            return;
        }

        this.update();
        window.requestAnimationFrame(()=> {
            this.gameLoop();
        })

    }

    update() {
        console.log("update");
        this.player.move();
        this.obstacle[0].move();
        
        if(this.player.didCollide(this.obstacle[0])) {
            this.lives -= 1;
            this.obstacle[0].element.remove();
            this.obstacle =[];
            this.obstacle.push(new Obstacle(this.gameScreen));
            document.querySelector("#lives").innerHTML = `${this.lives}`
        }
        
        if(this.obstacle[0].top > this.height) {
            console.log("passed")

            if(Math.random() > 0.98) {
            this.obstacle[0].element.remove();
            this.obstacle =[];
            this.obstacle.push(new Obstacle(this.gameScreen));
            this.score += 100;
            document.querySelector("#score").innerHTML = `${this.score}`
            }
        }

        if(this.lives === 0) {
            this.endGame();
        }

    }

    endGame() {
        this.gameIsOver = true;
        this.player.element.remove();
        this.gameEndScreen.style.display = "block";
        this.gameScreen.style.display = "none";
    }
}