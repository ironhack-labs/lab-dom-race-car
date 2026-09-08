class Player extends Component {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    super(gameScreen, left, top, width, height, imgSrc);

    this.directionX = 0;
    this.directionY = 0;
  }

  move() {
    this.left += this.directionX;
    this.top += this.directionY;

    // Bounds checking
    if (this.left < 0) this.left = 0;
    if (this.left + this.width > this.gameScreen.clientWidth) {
      this.left = this.gameScreen.clientWidth - this.width;
    }

    if (this.top < 0) this.top = 0;
    if (this.top + this.height > this.gameScreen.clientHeight) {
      this.top = this.gameScreen.clientHeight - this.height;
    }

    this.updatePosition();
  }

  didCollide(obstacle) {
    return (
      this.left < obstacle.left + obstacle.width &&
      this.left + this.width > obstacle.left &&
      this.top < obstacle.top + obstacle.height &&
      this.top + this.height > obstacle.top
    );
  }
}