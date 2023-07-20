class Obstacles {
    constructor(gameScreen){
        this.gameScreen = gameScreen


        //render random position for the appearance of obstacle
        this.left = Math.floor(Math.random()*300 + 70);

        this.top = 0;
        this.width = 100;
        this.height = 150;

        this.element = document.createElement('img');
        this.element.src = './images/redCar.png';
        this.element.style.position = 'absolute';
        this.element.style.top = `${this.top}px`
        this.element.style.left = `${this.left}px`
        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`
          
        this.gameScreen.appendChild(this.element)
 
    }
    updatePosition(){
        this.element.style.left =`${this.left}px`
        this.element.style.top =`${this.top}px`
    }

    move(){
        this.top += 3
        this.updatePosition();
    }
}

