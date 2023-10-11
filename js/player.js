class Player extends Component {
  constructor(gameScreen, left, top, width, height) {
    super(gameScreen, left, top, width, height, "./images/car.png");

    this.directionX = 0;
    this.directionY = 0;
  }

  move() {
    this.left += this.directionX;
    this.top += this.directionY;

    if (this.left < 10) {
      this.left = 10;
    }

    if (this.top < 10) {
      this.top = 10;
    }

    if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      this.left = this.gameScreen.offsetWidth - this.width - 10;
    }

    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }

  didCollide(obstacle) {
    const playerRectangle = this.element.getBoundingClientRect();
    const obstacleRectangle = obstacle.element.getBoundingClientRect();

    return (
      playerRectangle.left < obstacleRectangle.right &&
      playerRectangle.right > obstacleRectangle.left &&
      playerRectangle.top < obstacleRectangle.bottom &&
      playerRectangle.bottom > obstacleRectangle.top
    );
  }
}
