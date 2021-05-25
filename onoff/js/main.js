const btnon = document.querySelector('.btn-on');
const btnoff = document.querySelector('.btn-off');
const img = document.querySelector('.bulb');
const bg = document.querySelector('.section');
const header = document.querySelector('header');

btnon.addEventListener('click', ()=> {
  img.src = "../loot/bulb-on.png";
  bg.classList.remove('bgw');
  bg.classList.add('bgd');
  header.classList.add('shadow');
});

btnoff.addEventListener('click', ()=> {
  img.src = "../loot/bulb-off.png";
  bg.classList.remove('bgd');
  bg.classList.add('bgw');
  header.classList.remove('shadow');
});

const huebg = document.querySelector('.hue-bg');
const huebtn = document.querySelector('.huebtn');
const llit = document.querySelector('.lit');

huebtn.addEventListener('click', ()=> {


huebg.classList.toggle('nitbg');
huebg.classList.toggle('animate');
  
});