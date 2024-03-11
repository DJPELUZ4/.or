var video = document.getElementById('videoPlayer');
var volumeControl = document.getElementById('volumeControl');
var progressBar = document.getElementById('progressBar');
var currentTimeDisplay = document.getElementById('currentTime');
var durationDisplay = document.getElementById('duration');

function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function changeVolume() {
  video.volume = volumeControl.value / 100;
}

function toggleMute() {
  video.muted = !video.muted;
}

function seek() {
  var seekTo = video.duration * (progressBar.value / 100);
  video.currentTime = seekTo;
}

video.addEventListener('timeupdate', function () {
  var currentTime = video.currentTime;
  var duration = video.duration;

  currentTimeDisplay.textContent = formatTime(currentTime);
  durationDisplay.textContent = formatTime(duration);

  progressBar.value = (currentTime / duration) * 100;
});

function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}