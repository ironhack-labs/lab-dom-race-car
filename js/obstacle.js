class Obstacle{
    constructor (gameScreen){
        const leftPos   = [100, 320]

        this.gameScreen = gameScreen;
        this.left       = leftPos[Math.floor(Math.random() * leftPos.length)];
        this.top        = -200;
        this.width      = 80;
        this.height     = 130;
        this.element    = document.createElement("img");

        this.element.style.left     = `${this.left}px`;
        this.element.style.top      = `${this.top}px`;
        this.element.style.width    = `${this.width}px`;
        this.element.style.height   = `${this.height}px`;
        this.element.src            = '../images/redCar.png'; 
        this.element.style.position = "absolute";
        
        this.gameScreen.appendChild(this.element);
    }
    
    move(){
        this.top      += 3;     //Move the opponent down by 3px
        this.updatePosition();
    }

    updatePosition(){
        //Update the opponent car position on the screen
        this.element.style.left     = `${this.left}px`;
        this.element.style.top      = `${this.top}px`;
    }
}