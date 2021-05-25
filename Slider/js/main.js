
const slider = document.querySelector('.slider');
const imgs = document.querySelectorAll('.slider img');

//btns
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let counter = 0;
const size = imgs[0].clientWidth;

//slider.style.transform = "translateX(" + (-size * counter) + "px)";


next.addEventListener('click', ()=> {

slider.style.transition = "transform 0.3s ease-in-out" ;
counter++;

//alert(counter);

if(counter >= 11){
  counter = 0;
slider.style.transition = "none" ;
}


slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

});


prev.addEventListener('click', ()=> {

slider.style.transition = "transform 0.3s ease-in-out" ;
counter--;

//alert(counter);

if(counter <= 0){
  counter = 11;
slider.style.transition = "none" ;
}


slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

});
