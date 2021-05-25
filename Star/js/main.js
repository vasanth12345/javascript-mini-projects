function stars() {
  
  let count = 300;
  const page = document.querySelector('.section');
  let i = 0;
  
while (i < count) {
  
const star = document.createElement('i');
const y = Math.floor(Math.random() * window.innerHeight);
const x = Math.floor(Math.random() * window.innerWidth);
let durtion = Math.random() * 10;
let size = Math.random() * 2;


star.style.top = y + 'px';
star.style.left = x + 'px';
star.style.width = size + 'px';
star.style.height = size + 'px';

star.style.animationDuration = 5 + durtion + 's';
star.style.animationDelay = durtion+'s';

page.appendChild(star);
i++;

}
}

stars();