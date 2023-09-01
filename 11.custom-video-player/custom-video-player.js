const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateButton() {
  toggle.textContent = this.paused ? "►" : "❚ ❚";
}

function handleSkip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdates() {
  console.log(this.value);
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);

video.addEventListener("pause", updateButton);
video.addEventListener("play", updateButton);

skipButtons.forEach((button) => button.addEventListener("click", handleSkip));

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdates));

video.addEventListener("timeupdate", handleProgress);

let mousedown = false;

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
