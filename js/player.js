class Player {
  constructor(gameScreen, left, top, width, height) {
    if (!gameScreen) {
      throw new Error("gameScreen element not found"); // Added error handling for null gameScreen
    }
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.car = document.createElement("img");
    this.car.src = "../images/car.png";
    this.car.style.position = "absolute";
    this.car.style.width = `${this.width}px`; // Apply width
    this.car.style.height = `${this.height}px`; // Apply height
    this.gameScreen.appendChild(this.car);
  }

  move() {
    this.top += this.directionY;
    this.left += this.directionX;

    const minLeft = 10;
    const minTop = 10;
    const maxLeft = this.gameScreen.offsetWidth - this.width - 10;
    const maxTop = this.gameScreen.offsetHeight - this.height - 10;
    console.log(maxLeft);

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
    this.car.style.left = `${this.left}px`;
    this.car.style.top = `${this.top}px`;
  }
  didCollide(obstacle) {
    const playerHitbox = this.car.getBoundingClientRect();
    const obstacleHitbox = obstacle.element.getBoundingClientRect();

    if (
      playerHitbox.left < obstacleHitbox.right &&
      playerHitbox.right > obstacleHitbox.left &&
      playerHitbox.top < obstacleHitbox.bottom &&
      playerHitbox.bottom > obstacleHitbox.top
    ) {
      console.log("collision boooooom!!!!");
      return true;
    } else {
      return false;
    }
  }
}
