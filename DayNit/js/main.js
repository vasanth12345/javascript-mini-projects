const bg = document.querySelector('.section');
const headbg = document.querySelector('header');
const atag = document.querySelector('a');
const moon = document.querySelector('.moon');

moon.addEventListener('click', ()=> {

bg.classList.toggle('bg');
headbg.classList.toggle('bg');
atag.classList.toggle('a');
moon.classList.toggle('day');
  
});
