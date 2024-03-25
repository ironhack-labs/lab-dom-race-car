class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.width = 60;
    this.height = 120;
    this.left = Math.floor(Math.random() * (this.gameScreen.clientWidth - this.width - 100)) + 50;
    this.top = -this.height;

    this.element = document.createElement("img");
    this.element.src = './images/redCar.png';

    // Set up the default element's property values
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.position = "absolute";

    this.gameScreen.appendChild(this.element);
  }

  render() {
    this.move();
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    this.top += 4
  }
}