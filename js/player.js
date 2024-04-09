class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0; //used to specify the horizontal movement direction
    this.directionY = 0; //to specify the vertical movement direction
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";

    //The exact position is determined by this element's width, height, left and top properties. Thats why the code below
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;

    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.left += this.directionX; //to control the direction of the car based on the input horizontally
    this.top += this.directionY;

    // Ensures the player's car stays within the boundaries of the game screen by checking and adjusting the left and top properties.
    if (this.left < 10) {
      this.left = 10;
    }

    // handles top side
    if (this.top < 10) {
      this.top = 10;
    }

    // handles right hand side
    if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      this.left = this.gameScreen.offsetWidth - this.width - 10;
    }

    // handles bottom side
    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }

    // Update the player's car position on the screen
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  //Detect collision between 2 elements
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    //getBoundingClientRect() calculates the size and position of the element relative to the viewport.
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      //For eacg playerRect direction we are comparing with the obstacleRect direction
      playerRect.right > obstacleRect.left &&
      //This way we can find out if the elements positions collided / overlayed
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
