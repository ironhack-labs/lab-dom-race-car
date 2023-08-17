class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 300 + 70);
    // from almost 70 to almost 370 random number
    // this is the area of the car moving road area
    this.top = 0;
    this.width = 100;
    this.height = 150;
    this.element = document.createElement("img");
    this.element.setAttribute("src", "./images/redCar.png");
    this.element.style.position = "absolute";
    this.gameScreen.appendChild(this.element);
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }

  move() {
    this.top += 2;
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
}
