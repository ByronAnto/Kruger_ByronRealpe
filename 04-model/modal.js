const modal = document.getElementById("modal");
const openModalLink = document.querySelector(".open-modal");
const closeModalButton = document.querySelector(".close-button");
const closeModalX = document.querySelector(".close-modal-x");

// Función para mostrar el modal
const showModal = () => {
  modal.style.display = "block";
}

// Función para ocultar el modal
const hideModal = () => {
  modal.style.display = "none";
}

// Event listeners para abrir y cerrar el modal
openModalLink.addEventListener("click", showModal);
closeModalButton.addEventListener("click", hideModal);
closeModalX.addEventListener("click", hideModal);

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener("click", (event) => {
  if (event.target == modal) {
    hideModal();
  }
});

// Cerrar el modal con la tecla Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hideModal();
  }
});