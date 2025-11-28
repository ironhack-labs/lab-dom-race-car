class Player {
  constructor(gameScreen, left, top, width, height) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    //this is all for the <img /> tag of our player
    this.element = document.createElement("img");
    this.element.src = "../images/car.png";
    this.element.style.position = "absolute";
    //these set the size of our car
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    // these set the position of the car when game starts
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    //this visually adds the car to the page
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.left += this.directionX;
    this.top += this.directionY;

    //keep the player on the screen
    if (this.left <= 30) {
      this.left = 30;
    }
    if (this.left + this.width >= 470) {
      this.left = 470 - this.width;
    }
    if (this.top <= 0) {
      this.top = 0;
    }
    if (this.top + this.height >= 640) {
      this.top = 640 - this.height;
    }
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
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