let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

const stopwatchDisplay = document.getElementById('stopwatch');
const startButton = document.getElementById('startBtn');
const stopButton = document.getElementById('stopBtn');
const resetButton = document.getElementById('resetBtn');

function startTimer() {
  timer = setInterval(displayTime, 1000);
  startButton.disabled = true;
}

function stopTimer() {
  clearInterval(timer);
  startButton.disabled = false;
}

function resetTimer() {
  clearInterval(timer);
  startButton.disabled = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime();
}

function displayTime() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  const formattedTime = 
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  stopwatchDisplay.textContent = formattedTime;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
