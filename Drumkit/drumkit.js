const arr = ["Needs more cowbell!", "I gotta have more cowbell!", "Cowbell. Needs more of it.", "I could use a little more cowbell.", "Guess what? I got a fever! And the only prescription...is more cowbell!"]

var keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

function playSound(e){
  var key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(e);
  if(!audio) return;
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();

  if(e.keyCode == 76){
    document.getElementById('cowbell').textContent = arr[Math.floor(Math.random() * 5)];
  } else{
    document.getElementById('cowbell').textContent = "";
  }
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}
