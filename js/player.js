class Player {
  constructor(left, top, width, height, playerImage) {
    this.gameScreen = document.querySelector("#game-screen");
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    //this creates the <img /> in js to append to the game screen
    this.element = document.createElement("img");
    this.element.style.position = "absolute";
    this.element.src = playerImage;
    this.element.style.height = `${height}px`;
    this.element.style.width = `${width}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    //this actually adds the img to the DOM
    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.left += this.directionX;
    this.top += this.directionY;
    if (this.left < 30) this.left = 30;
    else if (this.left + this.width > 470) this.left = 470;
    else if (this.top < 10) this.top = 10;
    else if (this.top + this.height > 630) this.top = 430;
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
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
