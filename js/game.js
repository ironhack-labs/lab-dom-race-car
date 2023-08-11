class Game 
{
    constructor()
    {
        this.livesLabel = document.querySelector("#lives");
        this.scoreLabel = document.querySelector("#score");
        this.startScreen = document.querySelector("#game-intro");
        this.gameScreen = document.querySelector("#game-screen");
        this.gameEndScreen = document.querySelector("#game-end");
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
        this.livesLabel.textContent = this.lives;
        this.scoreLabel.textContent = this.score;

        this.player = new Player(this.gameScreen, 200, 500, 100, 150, "./images/car.png");
    }

    start()
    {
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";

        this.gameLoop();
    }

    gameLoop()
    {
        if(this.gameIsOver) return;

        this.update();

        window.requestAnimationFrame(() => this.gameLoop());
    }

    update()
    {
        this.player.move();

        if(Math.random() > 0.98 && this.obstacles.length < 1)
        {
            this.obstacles.push(new Obstacle(this.gameScreen))
        }

        for(let [i, k] of this.obstacles.entries())
        {
            let obstacle = this.obstacles[i];
            obstacle.move();


            if(this.player.didCollide(obstacle))
            {
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
                this.lives--;

                this.livesLabel.textContent = this.lives;
                i--;
            }

            if(obstacle.top > this.height)
            {
                obstacle.element.remove();
                this.obstacles.splice(i, 1);
                this.score++;

                this.scoreLabel.textContent = this.score;
                i--;
            }
        }

        if(this.lives === 0) this.endGame();
    }

    endGame()
    {
        this.player.element.remove();

        this.gameIsOver = true;
        this.gameEndScreen.style.display = "block";
        this.gameScreen.style.display = "none";
    }
}