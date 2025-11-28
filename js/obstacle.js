class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.possibleLeftPositions = [85, 285];
    this.left =
      this.possibleLeftPositions[
        Math.floor(Math.random() * this.possibleLeftPositions.length)
      ];
    this.top = -300;
    this.width = 130;
    this.height = 240;
    //this is all for the <img /> tag of our player
    this.element = document.createElement("img");
    this.element.src = "../images/redCar.png";
    this.element.style.position = "absolute";
    //these set the size of our car
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    // these set the position of the car when game starts
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    //this visually adds the car to the page
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.top += 3;
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
}