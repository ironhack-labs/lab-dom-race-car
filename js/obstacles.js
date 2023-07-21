class Obstacle {
    constructor(gameScreen) {
      // gameScreen HTML element
      this.gameScreen = gameScreen;

      // random position for the appearance of the obstacles
      this.left = Math.floor(Math.random() * 300 + 70);
      
      // appears on top
      this.top = 0;
      this.width = 100;
      this.height = 150;

      // create the HTML element and default styling
      this.element = document.createElement("img");
      this.element.src = "./images/redCar.png";
      this.element.style.position = "absolute";
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
  
      // .appendChild() inserts a child element inside a parent element. In this case, appends your obstacle inside the gameScreen HTML element. 
      this.gameScreen.appendChild(this.element);
    }
  
    updatePosition() {
      // Update the obstacle's position based on the properties left and top
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    move() {
      // Move the obstacle down by 3px
      this.top += 3;
      // Update the obstacle's position on the screen
      this.updatePosition();
    }
  }