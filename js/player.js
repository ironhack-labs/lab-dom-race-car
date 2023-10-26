class Player extends Component {
    constructor(gameScreen, left, top, width, height, image_url) {
        super(gameScreen, left, top, width, height, image_url);
        this.directionX = 0; // 0: not moving 1: moving right -1: moving left
        this.directionY = 0; // 0: not moving 1: moving right -1: moving left
    }
    move() {
        this.left += this.directionX;
        this.top += this.directionY;

        if (this.left < 0) {
            this.left = 0;
        }
        if (this.top < 0) {
            this.top = 0;
        }
        // handle right based on .left
        // width of players car: 100px
        if (this.left + 100 > this.gameScreen.offsetWidth) {
            this.left = this.gameScreen.offsetWidth - 100;
        }
        // handle bottom based on .top
        // height of players car: 150px
        if (this.top + 150 > this.gameScreen.offsetHeight) {
            this.top = this.gameScreen.offsetHeight - 150;
        }

        this.updatePosition();
    }
    didCollide(obstacle) { // parameter: Obstacle object
        // idea: use collision boxes method for Player and Obstacle objects
        let playerBox = this.element.getBoundingClientRect();
        let objectBox = obstacle.element.getBoundingClientRect();
        if (playerBox.right >= objectBox.left &&
            playerBox.left <= objectBox.right &&
            playerBox.bottom >= objectBox.top &&
            playerBox.top <= objectBox.bottom) {
            return true;
        }
        return false;
    }
};