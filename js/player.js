class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;

    //horizantal position of the player (via position absolute)
    this.left = left;

    //vertical position of the player (via postiion absolute)
    this.top = top;

    //width of player
    this.width = width;

    //height of player
    this.height = height;

    //direction of the player's moving horizantally
    this.directionX = 0;

    //direction of the player's moving vertically
    this.directionY = 0;

    //create the img tag for the player, define src and do default styling
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";

    //Set up default element's properties
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;

    //Append Player to the Game Screen
    this.gameScreen.appendChild(this.element);
  }
  move() {
    //Update player's car position based ont he directionX and directionY

    this.left += this.directionX;
    this.top += this.directionY;

    //Ensure the player's car stays inside the game screen
    //1. Handle and left and right borders using
    // .offSetWidth() is a property of the DOM element that represents the width of an element, including its content, padding and order (not margin). It returns a value in pixels.

    //Right side
    if (this.left + this.width > this.gameScreen.offsetWidth) {
      this.left = this.gameScreen.offsetWidth - this.width;
    }
    //Left Side
    else if (this.left < 0) {
      this.left = 0;
    }

    //Bottom border
    if (this.top + this.height > this.gameScreen.offsetHeight) {
      this.top = this.gameScreen.offsetHeight - this.height;
    }

    //Top Border
    else if (this.top < 0) {
      this.top = 0;
    }

    this.updatePosition();
  }
  //Updates the Position of the Car in css
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  didCollide(obstacle) {
    // .getBoundingClientRect() -- gives us information about top, left, right, bottom, width and height about a HTML element

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
