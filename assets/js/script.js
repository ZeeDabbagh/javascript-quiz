var timeEl = document.querySelector(".timer")

function countdown() {
    var timeLeft = 70;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 0) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else if (timeLeft === 0) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
        clearInterval(timeInterval);
      }
    }, 1000);

    return;
  }