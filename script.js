let audio = document.getElementById('audioPlayer');
// Asegúrate de que el path incluya la carpeta 'Canciones/' antes del nombre del archivo
let playlist = [
    'Canciones/Alejandro Sanz - Corazon Partio [Latin Mix] (Official Music Video).mp3', 
    'Canciones/Chayanne - Dejaría Todo.mp3', 
    'Canciones/Marco Antonio Solís - Si No Te Hubieras Ido (Live).mp3',
    'Canciones/Maná - Oye mi amor En el Muelle de San Blas Clavado en un bar - Siempre en Domingo.mp3',
    'Canciones/Te quiero.mp3'
];
let currentSong = 0;

audio.src = playlist[currentSong]; // Carga inicial de la primera canción

function togglePlay() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    currentSong = (currentSong + 1) % playlist.length;
    audio.src = playlist[currentSong];
    audio.play();
}

function prevSong() {
    currentSong = (currentSong - 1 + playlist.length) % playlist.length;
    audio.src = playlist[currentSong];
    audio.play();
}
