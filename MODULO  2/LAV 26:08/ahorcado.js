const colores = ["rojo", "verde", "azul", "amarillo", "naranja", "morado", "rosa", "marrón", "gris", "negro",
  "blanco", "cian", "magenta", "lima", "turquesa", "dorado", "granate", "coral", "oliva", "plata"];
const intentosMaximos = 5;
let colorSeleccionado = "";
let intentosRestantes = 0;
let letrasAdivinadas = [];

var foto = document.getElementById("foto")
const FotoIntento = ["1.png","2.png","3.png","4.png","5.png"]
foto.src=FotoIntento[intentosMaximos]

const startButton = document.getElementById("startButton");
const guessButton = document.getElementById("guessButton");
const inputLetter = document.getElementById("inputLetter");
const wordContainer = document.getElementById("wordContainer");
const guessesContainer = document.getElementById("guessesContainer");
const message = document.getElementById("message");
const resultadoModal = document.getElementById("resultadoModal");
const modalTitle = document.getElementById("resultadoModalLabel");
const modalBody = document.getElementById("resultadoModalBody");
const modalCloseButton = document.querySelector("#resultadoModal .close");

startButton.addEventListener("click", iniciarJuego);
guessButton.addEventListener("click", adivinar);
modalCloseButton.addEventListener("click", cerrarModal);

function iniciarJuego() {
  colorSeleccionado = colores[Math.floor(Math.random() * colores.length)];
  intentosRestantes = intentosMaximos;
  letrasAdivinadas = [];
  actualizarInterfaz();
  startButton.disabled = true;
  guessButton.disabled = false;
  resultadoModal.style.display = "none";
}

function actualizarInterfaz() {
  let palabraMostrada = "";
  for (const letra of colorSeleccionado) {
    if (letrasAdivinadas.includes(letra)) {
      palabraMostrada += `<span class="letra-acertada">${letra}</span> `;
    } else {
      palabraMostrada += `<span class="letra-no-acertada">_</span> `;
    }
  }
  wordContainer.innerHTML = palabraMostrada;

  guessesContainer.textContent = `Intentos restantes: ${intentosRestantes}`;
  
  if (intentosRestantes <= 0) {
    mostrarResultadoModal("Perdiste", `El color era: ${colorSeleccionado}`, "modal-perdiste");
    startButton.disabled = false;
    guessButton.disabled = true;
  } else if (palabraMostrada.replace(/<\/?span[^>]*>/g, "") === colorSeleccionado) {
    mostrarResultadoModal("Ganaste", "¡Felicidades, has adivinado el color!", "modal-ganaste");
    startButton.disabled = false;
    guessButton.disabled = true;
  } else {
    message.textContent = "";
    message.className = "";
  }
}

function adivinar() {
    const adivinanza = inputLetter.value.toLowerCase();
  
    if (adivinanza.length >= 1 && /^[a-z]+$/.test(adivinanza)) {
      if (colores.includes(adivinanza)) {
        if (adivinanza === colorSeleccionado) {
          letrasAdivinadas = colorSeleccionado.split(""); // Mostrar todas las letras
          actualizarInterfaz();
          if (!wordContainer.textContent.includes("_")) {
            mostrarResultadoModal("Ganaste", "¡Felicidades, has adivinado el color!", "modal-ganaste");
            startButton.disabled = false;
            guessButton.disabled = true;
          }
        } else {
          message.textContent = "¡Intento incorrecto!";
          message.className = "mensaje-incorrecto";
          actualizarInterfaz();
        }
      } else if (!letrasAdivinadas.includes(adivinanza)) {
        letrasAdivinadas.push(adivinanza);
        if (!colorSeleccionado.includes(adivinanza)) {
          intentosRestantes--;
          foto.src=FotoIntento[intentosMaximos]
        }
        actualizarInterfaz();
      }
    }
  
    inputLetter.value = "";
  }

function mostrarResultadoModal(titulo, contenido, claseModal) {
  modalTitle.textContent = titulo;
  modalBody.textContent = contenido;
  resultadoModal.className = `modal ${claseModal}`;
  resultadoModal.style.display = "block";
}

function cerrarModal() {
  resultadoModal.style.display = "none";
}
