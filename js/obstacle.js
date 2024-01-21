class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 400);
    this.top = 0;
    this.width = 100;
    this.height = 150;
    this.element = document.createElement("img"); //Creating a new img tag in HTML
    this.element.src = "./images/redCar.png";
    this.element.style.position = "absolute"; // changing the position to absolute
    //Setting the default element's property values
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.gameScreen.appendChild(this.element);
  }

  move() {
    // Move the obstacle down by 3px
    this.top += 3;
    // Update the obstacle's position on the screen
    this.updatePosition();
  }

  updatePosition() {
    // render the obstacle with new CSS styles
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
}
