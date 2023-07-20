class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;

    // Horizontal position of the player (via popsition absolute)
    this.left = left;

    // Vertical position of the player (via positon absolute)
    this.top = top;

    // Width of the player
    this.width = width;

    // Height of the pllayer
    this.height = height;

    // Direction the player is moving horizintally
    this.directionX = 0;

    // Direction of the player is moving vertically
    this.directionY = 0;

    // Create the img tag for the player, define src and default styling
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";

    // Setup default elemnt's properties
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;

    // Append player to Game Screen
    this.gameScreen.appendChild(this.element);
  }
  move() {
    // Update players car position based on direction x and direction y
    this.left += this.directionX;
    this.top += this.directionY;

    // Ensure the players car stays inside the game screen

    // Handle left and right borders
    //.offSetWidth -> returns the width of the element in data type number
    // Right Border
    if (this.left + this.width > this.gameScreen.offsetWidth) {
      //if the left of the car + it's width is greater than the gameScreen
      this.left = this.gameScreen.offsetWidth - this.width; //the position is equal to the gameScreen minus the width of the car
    }
    // Left Border
    else if (this.left < 0) {
      this.left = 0;
    }

    // Handle top and bottom borders
    // Bottom
    if (this.top + this.height > this.gameScreen.offsetHeight) {
      this.top = this.gameScreen.offsetHeight - this.height;
    } else if (this.top < 0) {
      this.top = 0;
    }

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
}
