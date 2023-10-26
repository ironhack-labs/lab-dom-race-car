class Player {
  constructor(left, top, width, height, element) {
    this.gameScreen = document.getElementbyId("game-screen");
    this.left = left;
    this.top = top;
    this.height = height;
    this.width = width;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.left}px`;
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.directionX = this.left;
    this.directionY = this.top;

    if (this.left < 10) {
      this.left = 10;
    }
    if (this.top < 10) {
      this.top = 10;
    }
    if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      this.top = this.gameScreen.offsetWidth - this.width - 10;
    }
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoudingClientRect();

    if (playerRect.left < obstacle.left) playerRect.top < obstacle.top;
    playerRect.right < obstacle.right;
    return obstacle.collision;
  }
}
