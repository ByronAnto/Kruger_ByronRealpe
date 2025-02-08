const arr = ["images/hat.png", "images/boat.png", "images/short.png"];
const arrWord = ["hat", "boat", "shirt"];
let counter = 1;
let score = 0;
let highScore = 0;
let incorrectGuesses = 0;

document.body.classList.add('backGroundBody');

const btnPlayAgain = document.querySelector('.playAgain');
const imgToGuess = document.getElementById('imgToGuess');
const input = document.getElementById('input');
const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const highScoreDisplay = document.querySelector('.highscore');
const playButton = document.querySelector('.play');
const gameOverModal = document.getElementById('gameOverModal');
const closeModal = document.querySelector('.close-modal');
const restartButton = document.getElementById('restartButton');

function selectRandomImage() {
    document.querySelector(".countQuestion").textContent = "Pregunta número " + counter;
    const index = Math.floor(Math.random() * arr.length);
    imgToGuess.src = arr[index];
    return index;
}

// Inicializar el juego después de definir todas las variables
let i = selectRandomImage();

playButton.addEventListener('click', function() {
    const userAnswer = input.value.toLowerCase();
    if (userAnswer === arrWord[i]) {
        message.textContent = "¡Correcto!";
        score++;
        scoreDisplay.textContent = "Puntuación: " + score;
        if (score > highScore) {
            highScore = score;
            highScoreDisplay.textContent = "🍭 Puntuación más alta: " + highScore;
        }
        counter++;
        i = selectRandomImage();
        input.value = ""; // Limpiar el input
        incorrectGuesses = 0; // Reiniciar el contador de errores
    } else {
        message.textContent = "Incorrecto, ¡inténtalo una vez más!";
        incorrectGuesses++;
        if (incorrectGuesses >= 3) {
            gameOverModal.style.display = "flex";
        }
    }
});

closeModal.addEventListener('click', function() {
    gameOverModal.style.display = "none";
});

restartButton.addEventListener('click', function() {
    gameOverModal.style.display = "none";
    counter = 1;
    score = 0;
    incorrectGuesses = 0;
    i = selectRandomImage();
    scoreDisplay.textContent = "Puntuación: " + score;
    message.textContent = "Número correcto"; // Resetear mensaje
    btnPlayAgain.classList.add('hidden'); // Ocultar botón "Play Again"
    playButton.disabled = false; // Habilitar botón "Play"
    input.disabled = false;
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target == gameOverModal) {
        gameOverModal.style.display = "none";
    }
});