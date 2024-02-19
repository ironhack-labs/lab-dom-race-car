class Obstacle {
    constructor (gameScreen){
        this.gameScreen = gameScreen;
        this.left = (Math.random() * 300) + 100;
        this.top = -150; 
        this.width = 63;
        this.height = 150;

        this.element = document.createElement("img");
        this.element.src = '../images/redCar.png';
        this.element.style.position = "absolute";
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {

        this.top += 3; 
        this.updatePosition();
    }

    updatePosition () {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

    }

    //Need to save this gif
    createExplosion() {
        let newElement = document.createElement("img");
        newElement.src = "../images/explosion.gif";
        newElement.style.position = "absolute";
        newElement.style.left = `${this.left}px`;
        newElement.style.top = `${this.top}px`;
        newElement.style.width = `${this.width}px`;
        newElement.style.height = `${this.height}px`;

        this.gameScreen.appendChild(newElement);

        setTimeout(() => {
        newElement.remove();
        }, 1250);

    }

}