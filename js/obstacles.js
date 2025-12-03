class Obstacles {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.possibleLeftPositions = [75, 275];
    this.left =
      this.possibleLeftPositions[
        Math.floor(Math.random() * this.possibleLeftPositions.length)
      ];
    this.top = -300;
    this.width = 140;
    this.height = 240;

    this.element = document.createElement("img");
    this.element.src = `../images/redCar.png`;
    this.element.style.position = "absolute";

    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;

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
