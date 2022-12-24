const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

startBtn.addEventListener('click', e => {
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);

  startBtn.disabled = e.currentTarget.click;
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
