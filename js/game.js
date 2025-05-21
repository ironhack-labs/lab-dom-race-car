class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
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
        this.obstacles = [];
        this.score = 0;
        this.scoreHTML = document.getElementById("score")
        this.lives = 3;
        this.livesHTML = document.getElementById("lives")
        this.gameIsOver = false;
        this.gameIntervalId;
        this.gameLoopFrequency = 1000 / 60;

        this.music = new Audio();
        this.music.src = './audio/music.mp3';
        this.music.volume = 0.05;
        this.music.loop = true;
    }

    start() {

        console.log("game is running")

        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.height}px`;
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";

        this.music.play();

        this.gameIntervalId = setInterval(() => {
            this.gameLoop()
        }, this.gameLoopFrequency);
    };

    gameLoop() {
        this.update();

        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId);
        };
    };

    update() {
        console.log("update is running")
        this.player.move()

        if (Math.random() > 0.85 && this.obstacles.length < 1) {
            this.obstacles.push(new Obstacle(this.gameScreen, "./images/redCar.png"));
        }

        for (let i = 0; i < this.obstacles.length; i++) {
            const obstacle = this.obstacles[i];
            //Make the obstacle move
            obstacle.move();

            //Check for player collisions
            if (this.player.didCollide(obstacle)) {
                //remove obstacle from DOM
                obstacle.element.remove();
                //reduce the lives
                this.lives--;
                //Change the lives value on the DOM
                this.livesHTML.innerText = this.lives;
                //Remove the obstacle from array
                this.obstacles.splice(i, 1);
                //update the counter to account for the removed obstacle
                i--;
            } else if (obstacle.top > this.height) {
                //remove obstacle from DOM
                obstacle.element.remove();
                //update the score
                this.score++;
                //change the score on the DOM
                this.scoreHTML.innerText = this.score;
                // Remove obstacle object from the array
                this.obstacles.splice(i, 1);
                // Update the counter variable to account for the removed obstacle
                i--;
            }
        }
        // If the lives are 0, end the game
        if (this.lives === 0) {
            this.endGame();
        }
    };

    endGame() {
        //remove player and obstacle elements from DOM
        this.player.element.remove();
        this.obstacles.forEach((obs) => obs.element.remove());
        this.music.pause();
        this.music.currentTime = 0;
        //set flag to true, so the loop stops
        this.gameIsOver = true;
        // Hide game screen
        this.gameScreen.style.display = 'none';
        // Show end game screen
        this.gameEndScreen.style.display = 'block';
    }
}