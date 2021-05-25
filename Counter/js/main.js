
let value = 0;


function increment() {
const display = document.querySelector('.disp-area');
value+= 1;
display.innerText = value;
}



function decrement() {
const display = document.querySelector('.disp-area');

value -= 1;
display.innerText = value;

}

function reset() {
  
const display = document.querySelector('.disp-area');
value = 0;

display.innerText =0;

}

