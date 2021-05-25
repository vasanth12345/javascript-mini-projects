

const song = new Audio("ill.mp3");

function playsong(){
const cd = document.querySelector('.cd');
  song.play();
  cd.classList.add('cdrotate');
}

function pausesong(){
const cd = document.querySelector('.cd');
  song.pause();
  cd.classList.remove('cdrotate');
}