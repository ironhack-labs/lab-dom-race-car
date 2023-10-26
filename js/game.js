class Game {
    // code to be added
    constructor() {
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.endScreen = document.getElementById('game-end');

        this.height = 600; // pixels
        this.width = 500; // pixels
        this.obstacles = [];
        this.score = 0; // is increased after obstacle is passed
        this.lives = 3; // players lives. why not on the class Player?
        this.gameIsOver = false;

        this.player = new Player(this.gameScreen,
            this.width / 2,
            this.height - 120,
            100, // width of players car
            150, // height of players car
            "./images/car.png");
    };

    start() {
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';

        this.gameLoop();
    };

    gameLoop() {
        if (this.gameIsOver) {
            return "game finished";
        };
        this.update();
        window.requestAnimationFrame(() => this.gameLoop());
    };

    update() {
        this.player.move();

        this.obstacles.forEach(function (ob) {
            ob.move();
            if (this.player.didCollide(ob)) {
                ob.element.remove(); // delete obstacle from DOM
                this.obstacles.splice(this.obstacles.indexOf(ob), 1); // delete obstacle from array
                this.lives -= 1;
                document.getElementById('lives').innerHTML = `${this.lives}`;
            } else if (ob.top > this.height) { // obstacle moved off screen
                ob.element.remove(); // delete obstacle from DOM
                this.obstacles.splice(this.obstacles.indexOf(ob), 1); // delete obstacle from array
                this.score += 1;
                document.getElementById('score').innerHTML = `${this.score}`;
            }
        }, this);

        if (this.obstacles.length == 0 && Math.random() > 0.75) {
            let newObstacle = new Obstacle(this.gameScreen);
            this.obstacles.push(newObstacle);
        }

        if (this.lives <= 0) {
            this.endGame();
        }
    };

    endGame() {
        this.gameIsOver = true;

        this.player.element.remove();

        this.obstacles.forEach((ob) => {
            ob.element.remove();
        });

        this.gameScreen.style.display = 'none';
        this.endScreen.style.display = 'block';

        document.getElementById('game-over-score').innerHTML = `${this.score}`;
    }

}