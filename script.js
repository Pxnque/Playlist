let audio = document.getElementById('audioPlayer');
let photo = document.querySelector('.photo');

let songTitleDisplay = document.getElementById('songTitle');

function getSongName(path) {
    'Canciones/Alejandro Sanz - Corazon Partio.mp3',
    'Canciones/Chayanne - Dejaría Todo.mp3', 
    'Canciones/Marco Antonio Solís - Si No Te Hubieras Ido (Live).mp3',
    'Canciones/Maná - Oye mi amor.mp3',
    'Canciones/Hombres G - Te quiero.mp3',
    'Canciones/Marco Antonio Solis - Ahora Te Puedes Marchar.mp3'
    return path.split('/').pop().split('.mp3')[0];
}
let playlist = [
    'Canciones/Alejandro Sanz - Corazon Partio [Latin Mix] (Official Music Video).mp3', 
    'Canciones/Chayanne - Dejaría Todo.mp3', 
    'Canciones/Marco Antonio Solís - Si No Te Hubieras Ido (Live).mp3',
    'Canciones/Maná - Oye mi amor En el Muelle de San Blas Clavado en un bar - Siempre en Domingo.mp3',
    'Canciones/Te quiero.mp3',
    'Canciones/Ahora Te Puedes Marchar.mp3'
];

let images = [
    'img/AlejandroSanz.jpeg',
    'img/Chayanne.jpg',
    'img/MAS.jpeg',
    'img/Mana.jpeg',
    'img/HG.jpeg',
    'img/LM.jpeg'
];
let currentSong = 0;

audio.src = playlist[currentSong];
photo.src = images[currentSong];

function updateSongAndImage() {
    audio.src = playlist[currentSong];
    photo.src = images[currentSong];
    let songName = getSongName(playlist[currentSong]);
    songTitleDisplay.textContent = songName; 
    audio.play();
}
function togglePlay() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    currentSong = (currentSong + 1) % playlist.length;
    updateSongAndImage();
}

function prevSong() {
    currentSong = (currentSong - 1 + playlist.length) % playlist.length;
    updateSongAndImage();
}

document.addEventListener('DOMContentLoaded', function() {
    updateSongAndImage();
});