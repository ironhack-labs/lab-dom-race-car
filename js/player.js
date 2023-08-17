class Player {
    constructor(gameScreen, left, top, width, height, img) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");
        this.element.setAttribute("src", img);
        this.element.style.position = "absolute";
        this.element.style.width = this.width+"px";
        this.element.style.height = this.height+"px";
        this.element.style.left = this.left+"px";
        this.element.style.top = this.top+"px";
        this.gameScreen.appendChild(this.element);

    }
    move() {
        this.left += this.directionX;
        this.top += this.directionY;
        if (this.left < 10) {
            this.left = 10;
        }

        // handles top side
        if(this.top <10) {
            this.top = 10
        }

        // handles right hand side 
        if(this.left >this.gameScreen.offsetWidth - this.width - 10) {
            this.left = this.gameScreen.offsetWidth - this.width -10;
            }

         // handles bottom side
            if(this.top >this.gameScreen.offsetHeight - this.height - 10) {
            this.top = this.gameScreen.offsetHeight - this.height -10;
            }

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle) {
        const play = this.element.getBoundingClientRect();
        const obs = obstacle.element.getBoundingClientRect();
        if (
            play.left < obs.right &&
            play.right > obs.left &&
            play.top < obs.bottom &&
            play.bottom > obs.top) {
            return true;
            } else {
                return false;
                }
        }
}