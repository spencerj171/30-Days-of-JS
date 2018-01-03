var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.minute-hand');
var hourHand = document.querySelector('.hour-hand');

function setTime(){
  var now = new Date();

  var seconds = now.getSeconds();
  var sDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${sDegrees}deg)`;

  var minutes = now.getMinutes();
  var mDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
  minuteHand.style.transform = `rotate(${mDegrees}deg)`;

  var hour = now.getHours();
  var hDegrees = ((hour / 12) * 360) + ((minutes/60)*30) + 90;
  hourHand.style.transform = `rotate(${hDegrees}deg)`;
}

setInterval(setTime, 1000);
document.onload = setTime();
