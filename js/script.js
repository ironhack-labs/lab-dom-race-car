class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = null;
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = Math.round(1000 / 60); // 60fps
  }

  start() {
    // Configurar dimensiones de la pantalla del juego
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    // Ocultar la pantalla de inicio y mostrar el juego
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    // Crear el jugador
    this.player = new Player(this.gameScreen, 200, 500, 100, 150, "./images/car.png");

    // Iniciar el bucle del juego
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    console.log("Game loop running");
    this.update();

    // Si el juego terminó, detener el bucle
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }

  update() {
    console.log("Updating game state");
    this.player.move();
  }
}
