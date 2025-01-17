class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 300 + 70);
    this.top = 0;
    this.width = 100;
    this.height = 150;
    this.element = document.createElement("img");
    this.element.src = "../images/redCar.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`; // Apply width
    this.element.style.height = `${this.height}px`; // Apply height
    this.gameScreen.appendChild(this.element);
    this.updatePosition();
  }

  move() {
    this.top += 3;
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
}
