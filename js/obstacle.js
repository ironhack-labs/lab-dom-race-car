class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    // random position for the appearing obstacles
    this.left = Math.floor(Math.random() * 300 + 70); //300 and 70 because the  width is 500 so we dont want the obstacles on the borders

    //appear on top
    this.top = 0;
    this.width = 100;
    this.height = 150;

    // create the HTML element and default styling
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


    move(){
        // Drop the obstacle 3px (individual preference, must be positive number) to the bottom
        this.top += 3;
        this.updatePosition();
    }
  
}
