class Player {
  constructor(gameScreen, left, top, width, height, imgSrc) {
    this.gameScreen = gameScreen;

    //horizontal position of the player
    this.left = left;

    //vertical position of the player
    this.top = top;

    //width of player
    this.width = width;

    //height of player
    this.height = height;

    //direction of player's moving horizontally
    this.directionX = 0;

    //direction of the player's moving vertically
    this.directionY = 0;

    //create img tag for the player, define src and do default styling
    this.element = document.createElement("img");
    this.element.src = imgSrc;
    this.element.style.position = "absolute";

    //
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;

    //append player to the game screen
    this.gameScreen.appendChild(this.element);
  }

  move() {
    //update players car position based on directionx and directionY
    this.left += this.directionX;
    this.top += this.directionY;

    //Ensure the players car stays inside the game screen

    //handle left and right borders
    //offSetWidth property returns the width of an element in data type number

    //right side
    if (this.left + this.width > this.gameScreen.offsetWidth) {
      this.left = this.gameScreen.offsetWidth - this.width;
    }
    //left side
    else if (this.left < 0) {
      this.left = 0;
    }

    //handle top and bottom borders
    //bottom side
    if (this.top + this.height > this.gameScreen.offsetHeight) {
      this.top = this.gameScreen.offsetHeight - this.height;
    } else if (this.top < 0) {
      this.top = 0;
    }
    this.updatePosition();
  }

  //upsates the position of the car in the CSS
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacle){
    // .getBoundingClientRect() returns info about top, left, right, bottom, width, height about a HTML element

        const playerRect= this.element.getBoundingClientRect();
        const obstacleRect= obstacle.element.getBoundingClientRect();

        if(playerRect.left<obstacleRect.right && playerRect.right>obstacleRect.left && playerRect.top<obstacleRect.bottom&& playerRect.bottom>obstacleRect.top){
            return true;
        }
        else{
            return false;
        }
  }
}

