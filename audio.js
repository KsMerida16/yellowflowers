// Verificar si ya hay audio en reproducción
let audio = new Audio('Floricienta.mp3');  // Cambia a la ruta de tu archivo de audio
audio.loop = true; // Para que el audio se repita en bucle

function iniciarAudio() {
    audio.play();
}

// Asignar el evento click al botón
document.addEventListener('DOMContentLoaded', () => {
    const btnIniciar = document.getElementById('btn-iniciar-audio');
    btnIniciar.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar la redirección inmediata
        iniciarAudio();
        setTimeout(() => {
            window.location.href = "FLORES.html";
        }, 100); // Ajusta el tiempo si es necesario
    });
});
