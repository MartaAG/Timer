MyApp.timer = function(seconds) {
  let counting;

  let now = Date.now() / 1000 + parseInt(seconds);

  MyApp.displayEndTime(now);

  let helper = seconds;

  if(counting) {
    clearInterval(counting);
  }

  counting = setInterval(function() {
    helper -= 1;
    MyApp.displayTimeLeft(helper);

    if(helper < 1 ) {
      clearInterval(counting);
    }
  }, 1000);
}
