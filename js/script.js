window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  restartButton.addEventListener("click", function () {                                                   // agregamos un addEvenlistener y llamamos debntro a la funcion para que haga un relod 
    restartGame();                                                                                          // usamos el metodo location.reload()
  });

  function restartGame() {
    location.reload();
  }
  let game; // creamos una nueva variable para poder invocar al metodo start.

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");

    game = new Game();                          // y ahora si podemos iniciar nuestro metodo start.
    game.start();                                 // llamamos al metodo antes creado. 
  }

  function handleKeydown(event) {         // Ahora creamos una funcion para mover le jugador. 
    const key = event.key;
    const posibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",                                // añadimos las keycodes con las que queremos mover el coche en este caso. 
      "ArrowRight",
      "ArrowDown",
    ];


    if (posibleKeystrokes.includes(key)) {                 // Comprovamos si la tecla presionada está en la posibleKeysMoves de pulsaciones de teclas.
      event.preventDefault();                                  // método del interfaz que no se explicar muy bien. 


      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -1;
          break;
        case "ArrowUp":
          game.player.directionY = -1;
          break;
        case "ArrowRight":                                                      // Actualiza la dirección X y la dirección Y del jugador según la tecla presionada.
          game.player.directionX = 1;
          break;
        case "ArrowDown":
          game.player.directionY = 1;
          break;
      }
    }
  }

  window.addEventListener("keydown", handleKeydown);    // agregamos la funcion al listener pata que pueda realizarla. 

};
