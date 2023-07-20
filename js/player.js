class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;

    // horizontal position of the player (via position absolute)
    this.left = left;

    // vertival position of the player (via position absolute)
    this.top = top;

    // width of player
    this.width = width;

    // height of player
    this.height = height;

    // direction of the player's moving horizontally
    this.directionX = 0;

    // direction of the player's moving vertically
    this.directionY = 0;

    // create the img tag for the player, define src and default styling
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";

    // Set up default element's properties
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;

    // append Player to the Game Screen
    this.gameScreen.appendChild(this.element);
  }
  move() {
    // update player's car position based on directionx and directiony
    this.left += this.directionX;
    this.top += this.directionY;

    // Ensure the player's car stays inside the game screen

    // handle left and rigth borders
    // .offSetWidth() returns the width of an element in data type number

    // Right Side
    if (this.left + this.width > this.gameScreen.offsetWidth) {
      this.left = this.gameScreen.offsetWidth - this.width;
    } else if (this.left < 0) {
      this.left = 0;
    }

    // handle top and bottom borders
    // Bottom side
    if (this.top + this.height > this.gameScreen.offsetHeight) {
      this.top = this.gameScreen.offsetHeight - this.height;
    } else if (this.top < 0) {
      this.top = 0;
    }
    this.updatePosition();
  }
  // Updates the position of the car in the CSS
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didColide(obstacle) {
    // getBoundingClientRect() returns info about top, left, right, bottom, width, height about a HTML element

    const playerRect = this.element.getBoundingClientRect();
    const obstacleRec = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRec.right &&
      playerRect.right > obstacleRec.left &&
      playerRect.top < obstacleRec.bottom &&
      playerRect.bottom > obstacleRec.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
