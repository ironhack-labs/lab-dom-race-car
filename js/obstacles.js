class Obstacle {
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        
        // random position for the appearance of the obstacle 
        this.left = Math.floor(Math.random() * 300 + 50);
        
        // appear on the top
        this.top = 0;
        this.width = 100;
        this.height = 150;

        // create the HTML element and default styling
        this.element = document.createElement("img");
        this.element.src ='./images/redCar.png';
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;

        //append obstacles to the Game Screen
        this.gameScreen.appendChild(this.element);
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    move(){

        //drop the obstacles 3px to the bottom
        this.top += 100;
        this.updatePosition();
    }

}