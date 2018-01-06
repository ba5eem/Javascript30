const leftwheel = document.querySelector('.left');
const rightwheel = document.querySelector('.right');
const minuteHand = document.querySelector('.min-hand');

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds*100);
  leftwheel.style.transform = `rotate(${secondsDegrees}deg`;
  rightwheel.style.transform = `rotate(${secondsDegrees}deg`;
}

setInterval(setDate,1000);