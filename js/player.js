class Player {
  constructor(gameScreen, width, height, top, left, playerImage) {
    this.gameScreen = gameScreen;
    this.left = left - width / 2;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = playerImage;
    this.element.style.position = "absolute";

    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.gameScreen.appendChild(this.element);
    // this.honkSound = new Audio ('') // path to file
    // this.honkSound.volume = 0.1;
  }
  move() {
    // updates car position
    this.left += this.directionX;
    this.top += this.directionY;
    if (this.left <= 35) {
      this.left = 35;
    }
    if (this.left >= 465 - this.width) {
      this.left = 465 - this.width;
    }
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`; // update the DOM
    this.element.style.left = `${this.left}px`; // update the DOM
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      // all of the below needs to be true for a collision to be true
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      this.element.classList.add("spin");
      setTimeout(() => {
        this.element.classList.remove("spin");
      }, 500);
      // play a sound/song
      // this.honkSound.play();
      // this.honkSound.pause();
      return true;
    } else {
      return false;
    }
  }
}
