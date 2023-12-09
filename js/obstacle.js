class Obstacle{
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * (this.gameScreen.offsetWidth - 100))
        this.top = 0;
        this.width = 100;
        this.height = 150;
        this.element = document.createElement("img");
        this.element.src = "images/redCar.png";
        this.element.style.position = "absolute";
        this.gameScreen.appendChild(this.element);
        this.element.classList.add("red-car")

        this.element.style.width = this.width + "px";
        this.element.style.height = this.height +"px";
        this.element.style.left = this.left+ "px";
        this.element.style.top = this.top + "px";
    }
    move(){
        this.top += 3 ;
        this.updatePosition();
    }
    updatePosition(){
        this.element.style.left = this.left + "px";
        this.element.style.top = this.top + "px";
    }
}