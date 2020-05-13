MyApp.displayEndTime = function(timestamp) {
  const endTime = document.querySelector(".display__end-time");

  let d = new Date(Math.floor(timestamp) * 1000);
  var h = d.getHours();
  let m = d.getMinutes();

  if (m < 10) {
    return "0" + m;
  }

  endTime.innerHTML = h + ":" + m;

}
