(function() {
  const buttons = document.querySelectorAll("[data-time]");

  buttons.forEach(b => b.addEventListener('click', MyApp.startTimer));

  document.customForm.addEventListener('submit', e => {
  e.preventDefault();
  MyApp.timer(e.target.elements['time-input'].value);
  })
}())
