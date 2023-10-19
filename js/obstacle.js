class Obstacle {                       // creamos una clase nueva y automaticamente la añadimos a nuestro index.html. 
    constructor(gameScreen) {           // importantisimo dentro de contructor el gameScreem como argumento para que este obstaculo se añada al juego. 
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 300 + 70);    // número generado aleatoriamente que representa la posición en el eje x del obstaculo. 
        this.top = 0;
        this.width = 100;                   // configuramos la posicion la altura y el ancho del obstaculo.                        
        this.height = 150;
        this.element = document.createElement("img")    // aqui estamos creando un elemento con la funcion createElement ( en este caso una imagen "img" si fuese un texto por ejeplo "h1")

        this.element.src = "./images/redCar.png";        // cogemos de nuestra capeta de imagenes la que queramos src = "....""
        this.element.style.position = "absolute";        // aqui empezamos a dar propiedades css a en este caso nuestra imagen añadida 
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);       // aqui agregamos todo a nuestro gameScreem o la pantalla donde vamos a jugar
    }


    updatePosition() {
        this.element.style.left = `${this.left}px`;                                     // aztualizamos las propiedades del obstaculo respecto al eje Y y al eje X.
        this.element.style.top = `${this.top}px`;
    }

    move() {
        this.top += 3;                                                      // movemos el obstaculo hacia abajo 3 px 


this.updatePosition();                              /// ponemos esto muy importante para que se aztualice en el gameScreen 
    }

}














/* class Obstacle extends Component {
    constructor(gameScreen) {
      super(
        gameScreen,
        Math.floor(Math.random() * 300 + 70),
        0,
        100,
        150,
        "./images/redCar.png"
      );
    }
  
    move() {
      // Move the obstacle down by 3px
      this.top += 3;
      // Update the obstacle's position on the screen
      this.updatePosition();
    }
    
  }

  */

