class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");

    this.element.src = imgSrc;
    this.element.style.position = "absolute";
    // Set up the default element's property values
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.gameScreen.appendChild(this.element);
    //this.element1 = document.createElement("img")
    //this.element1.src = imgSrc1;
  }
  move() {
    this.left += this.directionX;
    this.top += this.directionY;

    const minLeft = 10;
    const minTop = 10;
    const maxLeft = this.gameScreen.offsetWidth - this.width - 10;
    const maxTop = this.gameScreen.offsetHeight - this.height - 10;

    if (this.left < minLeft) {
      this.left = minLeft;
    }

    if (this.top < minTop) {
      this.top = minTop;
    }

    if (this.left > maxLeft) {
      this.left = maxLeft;
    }

    if (this.top > maxTop) {
      this.top = maxTop;
    }

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacles) {
    const playerRect = this.element.getBoundingClientRect();
    const obstaclesRect = obstacles.element.getBoundingClientRect();

    if (
      playerRect.left < obstaclesRect.right &&
      playerRect.right > obstaclesRect.left &&
      playerRect.top < obstaclesRect.bottom &&
      playerRect.bottom > obstaclesRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
