const bar = document.querySelector('.bar');
const nav = document.querySelector('.navbar');

bar.addEventListener('click', ()=> {
 bar.classList.toggle('active'); 
 nav.classList.toggle('navopen'); 
});