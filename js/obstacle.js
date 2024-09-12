class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    //random position for the appearance of the obstacles. Using 300 as the max bc the width is 500 and we dont the obstacles on the borders. We use 100 for the min so its not on borders. 100 left border and 300 is right.
    this.left = Math.floor(Math.random() * 300 + 100);

    //appear on top
    this.top = 0;
    this.width = 100;
    this.height = 150;

    //create the HTML element and default styling
    this.element = document.createElement("img");
    this.element.src = "./images/redCar.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);
  }
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  move() {
    //Drop the obstacle 3px to the bottom (3 is a random variable to choose but must be positive)
    this.top += 3;
    this.updatePosition();
  }

  
}
