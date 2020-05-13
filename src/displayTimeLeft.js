MyApp.displayTimeLeft = function (seconds) {
  const timerDisplay = document.querySelector(".display__time-left");

  let m = Math.floor(seconds / 60);
  let s = seconds % 60;

  if (m < 10) {
    m = "0" + m;
  }

  if (s < 10) {
    s = "0" + s
  }

  timerDisplay.innerHTML = m + ":" + s;
}
