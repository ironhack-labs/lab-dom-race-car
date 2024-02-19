class Game {
    constructor() {
        this.startScreen = document.querySelector("#game-intro");
        this.gameScreen = document.querySelector("#game-screen");
        this.gameEndScreen = document.querySelector("#game-end");
        this.player = new Player(this.gameScreen, 200, 490, 66, 150, "./images/shelby.png");
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.timeLeft = 30
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
        this.gameIntervalId = null; 
        this.gameLoopFrequency = Math.round(1000/60); //60fps
        this.frames = 0;
        this.scoreElement = document.getElementById("score");
        this.livesElement = document.getElementById("lives");
        this.stats = document.getElementById("stats-container");
        this.clockContainer = document.getElementById("clock-container");
        this.clock = document.getElementById("clock");
        this.endMessage = document.getElementById("end-message");
    }

    start() {
        // Con esto se establece el alto y ancho de la pantalla de juego
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        
        //Con esto esconderas la pantalla de inicio, algo asi como una transicion
        this.startScreen.style.display ="none";

        // Con esto se muestra la pantalla de juego
        this.gameScreen.style.display = "block";
        this.stats.style.display = "block";
        this.clockContainer.style.display = "flex";

        //Con esto correras el loop del juego a una frecuencia de 60 veces por segundo; asimismo, almacena el ID del intervalo
        this.gameIntervalId = setInterval(() => {
            this.gameLoop()
        },  this.gameLoopFrequency)
    }

    gameLoop() {
    this.frames += 1
    if (this.frames % 120 === 0) {
        this.obstacles.push(new Obstacle(this.gameScreen))
    }
    this.update();
    if (this.lives <= 0) {
        console.log("Lives====>", this.lives);
        this.gameIsOver = true;
    }

    if(this.frames % 60 === 0) {
        this.timeLeft--;
        this.clock.innerHTML = this.timeLeft;
    }

    if(this.timeLeft <=0) {
        this.gameIsOver = true;
    } 

    if (this.gameIsOver) {
        clearInterval(this.gameIntervalId);
        this.gameEndScreen();
    }
    }

    update () {
        this.player.move();
        this.obstacles.forEach((obstacle, i) => {
            obstacle.move();
            if(this.player.didCollide(obstacle)) {
                obstacle.createExplosion();
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
                this.lives -= 1;
            }

            if(obstacle.top > 640) {
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
                this,score++;
            }
        });

        this.scoreElement.innerHTML = this.score;
        this.livesElement.innerHTML = this.lives;
    }

    gameOverScreen() {
        console.log("Game over");
        this.player.element.remove();
        this.obstacles.forEach((obstacle) => {
          obstacle.element.remove();
        });
        this.gameScreen.style.height = `${0}px`;
        this.gameScreen.style.width = `${0}px`;
        this.gameScreen.style.display = "none";
        console.log("Game end screen", this.stats);
        this.stats.style.display = "none";
        this.clockContainer.style.display = "none";
        this.gameEnd.style.display = "inherit";
        if (this.timeLeft <= 0) {
          this.endMessage.innerText = `You won! You finished with a score of ${
            this.score
          } and ${this.returnLivesMessage()}!`;
        } else {
          this.endMessage.innerText = `You lost!  You ran out of lives and finished with a score of ${this.score}.`;
        }
      }
}