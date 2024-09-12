class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;

    //horizontal position of the player(via position absolute)
    this.left = left;

    //vertical position of the player( via position absolute)
    this.top = top;

    //width of player
    this.width = width;

    //height of player
    this.height = height;

    //direction of the player moving horizontally
    this.directionX = 0;

    // direction of the player moving vertically
    this.directionY = 0;

    //create the img tag for the player, define src and default styling
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute"; // position: relative;  BEST PRACTICE always set to absolute

    // Set up default element properties
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;

    // Append Player to the Game Screen
    this.gameScreen.appendChild(this.element);
  }

  // OUTSIDE OF THE CONSTRUCTOR

  // UPDATE CARS POSITION based on  directionX and directionY
  move() {
    this.left += this.directionX;
    this.top += this.directionY;

    // Ensure the players car stays INSIDE GAME SCREEN

    // handle left and right borders
    // .offSetWidth()  returns the width of an element in data type number



    // Right Side
    if (this.left + this.width > this.gameScreen.offsetWidth) {
      this.left = this.gameScreen.offsetWidth - this.width;
    } // Left Side
    else if (this.left < 0) {
      this.left = 0;
    }




    // HANDLE TOP AND BOTTOM BORDERS
    //Bottom Side
    if (this.top + this.height > this.gameScreen.offsetHeight) {
      this.top = this.gameScreen.offsetHeight - this.height;
    } // Top side
    else if (this.top < 0) {
      this.top = 0;
    }

    this.updatePosition();
  }

  // Update the position of the car in  CSS
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }






  didCollide(obstacle) {
    // .getBoundingClientRect()   <--- gives info about top/left/right/bottom/width/height of the HTML element

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
