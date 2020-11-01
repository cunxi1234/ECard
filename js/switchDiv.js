function switchDiv() {
  var calendar = document.getElementsByClassName("calendar")[0];
  var flipbook = document.getElementsByClassName("flipbook")[0];
  var firework = document.getElementsByClassName("firework")[0];

  calendar.style.opacity = 1;
  (function fade() {
    if ((calendar.style.opacity -= 0.1) < 0) {
      calendar.remove();
      firework.remove();
      flipbook.style.display = "block";
    } else {
      setTimeout(fade, 60);
    }
  })();
}

function changeDate() {
  var change = date.getDate();

  var interval = setInterval(function() {
    flip();
    change++;
    document.getElementsByClassName("day")[0].innerHTML = change;

    if (change >= 20) {
      clearInterval(interval);
      var firework = document.getElementsByClassName("firework")[0].style;
      firework.display = "block";
      setTimeout(function() {
        switchDiv();
      }, 5000);
    }
  }, 550);
}

var deg = 0;

function flip() {
  var j = document.getElementsByClassName("day")[0];
  deg += 180;

  j.style.transform = "rotatey(" + deg + "deg)";
  j.style.transitionDuration = "0.6s";
  j.style.transform = "rotatey(" + deg * 2 + "deg)";
}
