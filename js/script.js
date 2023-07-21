window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");

    let game;

    startButton.addEventListener("click", () => {
        startGame();
    });

    restartButton.addEventListener("click", () => {
        location.reload();
    });

    function startGame() {
        console.log("start game");

        game = new Game();

        game.start();
    }

    // Function that handles keydown(pressing a key) events
    function handleKeydown(event) {
        const key = event.key;
        const possibleKeysStrokes = [
            "ArrowLeft",
            "ArrowUp",
            "ArrowRight",
            "ArrowDown",
        ];

        // Function that handles keyup (releasing the key) events
        if (possibleKeysStrokes.includes(key)) {
            // prevent the default key actions from happening
            // in this case, it's scroll-up/ scroll-down
            // scroll-left / scroll-right in the browser window
            event.preventDefault();
        }

        // Only when we have a game loaded, we can move the player
        if (game) {
            switch (key) {
                case "ArrowLeft":
                    game.player.directionX = -1;
                    break;
                case "ArrowRight":
                    game.player.directionX = +1;
                    break;
                case "ArrowUp":
                    game.player.directionY = -1;
                    break;
                case "ArrowDown":
                    game.player.directionY = +1;
                    break;
            }
        }
    }

    // Function that handles keydown(pressing a key) events
    function handleKeyup(event) {
        const key = event.key;
        const possibleKeysStrokes = [
            "ArrowLeft",
            "ArrowUp",
            "ArrowRight",
            "ArrowDown",
        ];

        // Function that handles keyup (releasing the key) events
        if (possibleKeysStrokes.includes(key)) {
            // prevent the default key actions from happening
            // in this case, it's scroll-up/ scroll-down
            // scroll-left / scroll-right in the browser window
            event.preventDefault();
        }

        // Only when we have a game loaded, we can move the player
        if (game) {
            switch (key) {
                case "ArrowLeft":
                    game.player.directionX = 0;
                    break;
                case "ArrowRight":
                    game.player.directionX = 0;
                    break;
                case "ArrowUp":
                    game.player.directionY = 0;
                    break;
                case "ArrowDown":
                    game.player.directionY = 0;
                    break;
            }
        }
    }

    // Associate the handleKeydown function with an
    // Event Listener
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);
};
