class Player {
    constructor(gameScreen, left, top, width, height, img) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.direcitionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");
        this.element.setAttribute("src", img)
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.left += this.direcitionX;
        this.top += this.directionY;
        this.updatePosition();
    }
    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();

        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        ) {
            {
                const messageDiv = document.createElement("div");
                messageDiv.textContent = "CRASH!";
                messageDiv.style.position = "absolute";
                messageDiv.style.top = "50%";
                messageDiv.style.left = "50%";
                messageDiv.style.transform = "translate(-50%, -50%)";
                messageDiv.style.backgroundColor = "#ffcbd9";
                messageDiv.style.fontSize = "24px";
                messageDiv.style.fontFamily = "YourChosenFont, sans-serif";
                messageDiv.style.padding = "10px";
                messageDiv.style.borderRadius = "2px";
                messageDiv.style.color = "white";
                messageDiv.style.fontWeight = "bold";

                document.body.appendChild(messageDiv);

                setTimeout(() => {
                    document.body.removeChild(messageDiv);
                }, 500);
            }
            // console.log("Crash!");
            return true;
        } else {
            return false;
        }


    }




}