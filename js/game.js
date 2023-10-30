class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Player(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "./images/car.png"
    );
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
  }

  start() {
    // Establecer la altura y el ancho de la pantalla del juego
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    // Ocultar la pantalla de inicio
    this.startScreen.style.display = "none";
    // Mostrar la pantalla del juego
    this.gameScreen.style.display = "block";

    this.gameLoop();
  }

  gameLoop() {
    console.log("in the game loop");

    if (this.gameIsOver) {
      return;
    }

    this.update();

    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    this.player.move();

    // Verifique si hay colisión y si todavía hay un obstáculo en la pantalla
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();

      // Si el coche del jugador choca con un obstáculo
      if (this.player.didCollide(obstacle)) {
        // Eliminar el elemento obstáculo del DOM
        obstacle.element.remove();
        // Eliminar el objeto obstáculo del array
        this.obstacles.splice(i, 1);
        // Reducir la vida del jugador en 1
        this.lives--;
        // Actualice la variable del contador para tener en cuenta el obstáculo eliminado
        i--;
      } // Si el obstáculo está fuera de la pantalla (en la parte inferior)
      else if (obstacle.top > this.height) {
        // Aumentar la puntuación en 1
        this.score++;
        // Eliminar el obstáculo del DOM
        obstacle.element.remove();
        // Eliminar el objeto obstáculo del array
        this.obstacles.splice(i, 1);
        // Actualice la variable del contador para tener en cuenta el obstáculo eliminado
        i--;
      }
    }

    // Si las vidas son 0, finaliza el juego
    if (this.lives === 0) {
      this.endGame();
    }

    // Crea un nuevo obstáculo basado en una probabilidad aleatoria
    // cuando no hay otros obstáculos en la pantalla
    if (Math.random() > 0.98 && this.obstacles.length < 1) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }

  // Crea un nuevo método responsable de finalizar el juego
  endGame() {
    this.player.element.remove();
    this.obstacles.forEach(function (obstacle) {
      obstacle.element.remove();
    });

    this.gameIsOver = true;
    // Ocultar pantalla de juego
    this.gameScreen.style.display = "none";
    // Mostrar pantalla de final de juego
    this.gameEndScreen.style.display = "block";
  }
}
