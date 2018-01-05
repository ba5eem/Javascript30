
window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`audio-board[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
})

window.addEventListener('click', function(e){
  const audio = document.querySelector(`audio[id="${e.target.id}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
})


const toggle = document.getElementsByClassName("toggle");

for(var i = 0; i < toggle.length; i++){
  toggle[i].addEventListener('click', function(){
  console.log(this.checked)
  })
}

const kitbuttons = document.getElementsByClassName("audio-kit-buttons");

for(var i = 0; i < kitbuttons.length; i++){
  kitbuttons[i].addEventListener('click', function(){
  console.log(this.id)
  })
}

const buttons = document.getElementsByClassName("audio-board");

for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', function(){
    console.log(this.id);
  });
}



