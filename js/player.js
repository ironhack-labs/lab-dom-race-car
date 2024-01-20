class player {
  constructor(gameScreen, left, top, width, height, imageSrc) {
    this.gameScreen = gameScreen;
    this.left = left; // --> how far away the player is from the left side
    this.top = top; //--> how far away the player is from the top
    this.width = width; // --> the width of the player (image)
    this.height = height; // --> the height of the player (image)
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img"); //Creating a new img tag in HTML
    this.element.src = imageSrc;
    this.element.style.position = "absolute"; // changing the position to absolute
    //Setting the default element's property values
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
    this.gameScreen.appendChild(this.element);
  }
  move() {
    //Update player's car position based on directionX and directionY
    this.left += this.directionX;
    this.top += this.directionY;

    // Ensure the player's car stays within the game screen
    // The player must be at least 10px away from the left side
    if (this.left < 10) {
      this.left = 10;
    }

    // The player must be at least 10px away from the top
    if (this.top < 10) {
      this.top = 10;
    }

    // If this.left (how far away the player is from the left side) is greater than the whole screen 
    // - the player's width and the 10px space from the left
    // this.gameScreen.offsetWidth = the total width of an HTML element, including its border, padding and margin
    if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      this.left = this.gameScreen.offsetWidth - this.width - 10;
    }

    // handles bottom side
    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }

    // Update the player's car position on the screen
    this.updatePosition();

    // this.directionX = 0; // 
    // this.directionY = 0;
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
