class Player {
  constructor(gameScreen, top, left) {
    this.gameScreen = gameScreen;
    this.top = top;
    this.left = left;
    this.width = 100;
    this.height = 180;
    this.directionX = 0;
    this.directionY = 0;
    //the element is the img tag that is our car
    this.element = document.createElement("img");
    //set the src of the img tag to be the car
    this.element.src = "../images/redCar.png";
    //never forget... set the position to absolute
    this.element.style.position = "absolute";
    //set the height and width of that img
    this.element.style.height = this.height + "px";
    this.element.style.width = this.width + "px";
    //set the position of your car to the middle and bottom
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";
    //add the element to the DOM
    this.gameScreen.appendChild(this.element);
  }
  move() {
    // update the numbers of the top and left of the car
    this.top += this.directionY;
    this.left += this.directionX;
    //keep the car on the page...
    if (this.left < 40) {
      this.left = 40;
    }
    if (this.left > 330) {
      this.left = 330;
    }
    if (this.top < 0) {
      this.top = 0;
    }
    if (this.top + 180 > 640) {
      this.top = 640 - 180;
    }

    this.update();
  }
  update() {
    //update the visual car on the page
    this.element.style.left = this.left + "px";
    this.element.style.top = this.top + "px";
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
