class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.positions = [100, 280];
    this.randomIndex = Math.floor(Math.random() * this.positions.length);
    this.left = this.positions[this.randomIndex];
    this.top = -200;
    this.width = 100;
    this.height = 150;
    //the element is the img tag that is our car
    this.element = document.createElement("img");
    //set the src of the img tag to be the car
    this.element.src = "../images/car.png";
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
    this.top += 3.5;
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }
}
