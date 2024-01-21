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
    this.element.setAttribute("src", image);
    this.element.style.position = "absolute";
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.gameScreen.appendChild(this.element);
  }

  move() {
    const maxLeft = this.gameScreen.offsetWidth - this.width;
    const maxTop = this.gameScreen.offsetHeight - this.height;

    if (this.top < maxTop && this.directionY > 0) {
      this.top += this.directionY;
    } else if (this.top > 0 && this.directionY < 0) {
      this.top += this.directionY;
    } else if (this.left < maxLeft && this.directionX > 0) {
      this.left += this.directionX;
    } else if (this.left > 0 && this.directionX < 0) {
      this.left += this.directionX;
    }

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.directionX = 0;
    this.directionY = 0;
  }

  didCollide(obstacle) {
    const playerPosition = this.element.getBoundingClientRect();
    const obstaclePosition = obstacle.element.getBoundingClientRect();

    if (
      obstaclePosition.left < playerPosition.right &&
      obstaclePosition.right > playerPosition.left &&
      obstaclePosition.top < playerPosition.bottom &&
      obstaclePosition.bottom > playerPosition.top
    ) {
      return true;
    }
    return false;
  }
}
