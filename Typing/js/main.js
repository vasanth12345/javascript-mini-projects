
const text = "This is the text typing animation using vanilla JAVASCRIPT";
let index = 0;

function textgen() {

const disparea = document.querySelector('.disp-area');

disparea.innerText = text.slice(0, index);

index++;

if (index > text.length) {
  index = 0;
}

}

setInterval(textgen, 200);
