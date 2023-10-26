class Component {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen; // div element
        this.left = left; // in pixels
        this.top = top; // in pixels
        this.width = width; // in pixels
        this.height = height; // in pixels

        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = 'absolute';
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;

        this.gameScreen.appendChild(this.element);
    }
    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }
}