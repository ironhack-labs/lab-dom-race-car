class Obstacle {
  constructor() {
    this.gameScreen = document.querySelector("#game-screen");
    this.positionX = [100, 300];
    this.randomIndex = Math.floor(Math.random() * this.positionX.length);
    this.left = this.positionX[this.randomIndex];
    this.width = 110;
    this.height = 210;
    this.top = -this.height;
    //this creates the <img /> in js to append to the game screen
    this.element = document.createElement("img");
    this.element.style.position = "absolute";
    this.element.src = "../images/redCar.png";
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    //this actually adds the img to the DOM
    this.gameScreen.appendChild(this.element);
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
