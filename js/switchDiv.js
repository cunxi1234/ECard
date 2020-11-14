
function switchDiv() {
  var calendar = document.getElementsByClassName("calendar")[0];
  var flipbook = document.getElementsByClassName("flipbook")[0];
  var firework = document.getElementsByClassName("firework")[0];

  flipbook.style.marginTop = "-2%";
 
 
  (function fade() {
    if ((calendar.style.opacity -= 0.1) < 0) {
      calendar.remove();
      firework.remove();
    } else {
      setTimeout(fade, 60);
    }
  })();

  setTimeout(function () {
    flipbook.style.display = "block";
   
   // document.getElementById("footer").style.bottom = "-10px";
  }, 1000);
 
  
}

function changeDate() {
  document.getElementsByClassName("container")[0].style = "pointer-events:none;"

  var change = date.getDate();

  var interval = setInterval(function () {
    flip();
    change++;
    document.getElementsByClassName("day")[0].innerHTML = change;
    if (change >= 20) {
      clearInterval(interval);
      var firework = document.getElementsByClassName("firework")[0].style;
      firework.display = "block";
      setTimeout(function () {
        switchDiv();
      }, 5000);
    }
  }, 520);
}

var deg = 0;

function flip() {
  var j = document.getElementsByClassName("day")[0];
  deg += 180;

  j.style.transform = "rotatey(" + deg + "deg)";
  j.style.transitionDuration = "0.6s";
  j.style.transform = "rotatey(" + deg * 2 + "deg)";
}
