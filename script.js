let audio = document.getElementById('audioPlayer');
let playlist = ['song1.mp3', 'song2.mp3', 'song3.mp3']; // Asegúrate de tener estos archivos
let currentSong = 0;

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
