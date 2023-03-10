const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);

  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);

  stopBtn.disabled = true;
  startBtn.disabled = false;
});
