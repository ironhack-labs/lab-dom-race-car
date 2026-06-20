class Game {
    // code to be added
    constructor() {
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');
        this.scoreElement = document.getElementById('score');
        this.livesElement = document.getElementById('lives');
        this.player = new Player(this.gameScreen, 350, 230);
        this.height = 500;
        this.width = 400;
        this.obstacles = [new Obstacle(this.gameScreen)];
        this.score = 0;
        this.lives = 3;
        this.gameIntervalId = null;
        this.gameLoopFrequency = Math.round(1000 / 60); // 60 frames per second
        this.gameIsOver = false;
        this.counter = 0;
}
start() {
    this.gameScreen.style.height = this.height + 'px';
    this.gameScreen.style.width = this.width + 'px';
    // Hide the start screen and show the game screen
    this.startScreen.style.display = 'none';
    // Show the game screen
    this.gameScreen.style.display = 'block';
    this.gameIntervalId = setInterval(() => {
        this.gameLoop();
    }, this.gameLoopFrequency);
}
gameLoop() {
    console.log(this.counter);
    this.counter++;
    this.update();
    if(this.gameIsOver) {
        clearInterval(this.gameIntervalId);
        this.gameOver();
    }
}
update() {
    // Update game state, player position, obstacles, score, etc.
    this.player.move();
    for (let i = 0; i < this.obstacles.length; i++) {
        const currentObstacle = this.obstacles[i];
        currentObstacle.move();

        // Check for collision with the player
    if (this.player.didCollide(currentObstacle)) {
        this.obstacles.splice(i, 1);
        currentObstacle.element.remove();
        i--;
        this.lives --;
        this.livesElement.innerText = this.lives;
        if (this.lives === 0) {
            this.gameIsOver = true;
        }
    }
        
        // When the car passes the bottom
        if (currentObstacle.top > 500) {
            this.obstacles.splice(i, 1);
            currentObstacle.element.remove();
            i--;
            // Add 1 point to the score
            this.score++;
            // Update the DOM to reflect the new score
            this.scoreElement.innerText = this.score;
    }
}
    // This adds a new obstacle every 4 seconds
    if (this.counter % 240 === 0) {
        this.obstacles.push(new Obstacle(this.gameScreen));
    }
}
gameOver() {
this.gameScreen.style.display = 'none';
this.gameEndScreen.style.display = 'block';
}
}