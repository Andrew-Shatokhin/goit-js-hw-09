import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
const remainDays = document.querySelector('span[data-days]');
const remainHours = document.querySelector('span[data-hours]');
const remainMinutes = document.querySelector('span[data-minutes]');
const remainSeconds = document.querySelector('span[data-seconds]');

startBtn.disabled = true;

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      startBtn.addEventListener('click', () => {
        let timerId = setInterval(() => {
          const ms = selectedDates[0] - new Date();
          convertMs(ms);
          function convertMs(ms) {
            // Number of milliseconds per unit of time
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            // Remaining days
            const days = Math.floor(ms / day);
            // Remaining hours
            const hours = Math.floor((ms % day) / hour);
            // Remaining minutes
            const minutes = Math.floor(((ms % day) % hour) / minute);
            // Remaining seconds
            const seconds = Math.floor((((ms % day) % hour) % minute) / second);

            // return { days, hours, minutes, seconds };

            addLeadingZero();
            remainDays.textContent = addLeadingZero(`${days}`);
            remainHours.textContent = addLeadingZero(`${hours}`);
            remainMinutes.textContent = addLeadingZero(`${minutes}`);
            remainSeconds.textContent = addLeadingZero(`${seconds}`);
          }

          if (ms < 1000) {
            clearInterval(timerId);
            Notiflix.Notify.info('Time is over');
          }
        }, 1000);
      });
    }
  },
};
flatpickr('#datetime-picker', options);
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
