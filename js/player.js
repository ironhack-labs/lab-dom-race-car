let num = 0;
const min = -1;
const max = 1;
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

class Player {
  constructor(gameScreen, left, top, width, height, image) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = image;
    this.element.style.position = "absolute";
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.gameScreen.appendChild(this.element);
  }
  move() {
    // if (this.directionY) {
    //   this.height += this.directionY;
    // } else if (this.directionX) {
    //   this.width += this.directionX;
    // }
    // if (this.left < 10) {
    //   this.left = this.directionX;
    // }

    // if (this.top < 10) {
    //   this.top = this.directionY;
    // }

    // if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
    //   this.left = this.gameScreen.offsetWidth - this.width - 10;
    // }

    // if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
    //   this.top = this.gameScreen.offsetHeight - this.height - 10;
    // }
    this.left += this.directionX;
    this.top += this.directionY;
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";
  }
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
