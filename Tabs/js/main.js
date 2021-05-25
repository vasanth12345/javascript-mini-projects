
function html() {
  
const text = document.querySelector('.text-cntnt');
const html = document.querySelector('.tab-btn .html');
const css = document.querySelector('.tab-btn .css');
const js = document.querySelector('.tab-btn .js');
html.classList.add('btns');
css.classList.remove('btns');
js.classList.remove('btns');

const decri = "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.";

text.innerText = decri;

}

function css() {
const text = document.querySelector('.text-cntnt');

const html = document.querySelector('.tab-btn .html');
const css = document.querySelector('.tab-btn .css');
const js = document.querySelector('.tab-btn .js');
html.classList.remove('btns');
css.classList.add('btns');
js.classList.remove('btns');

const decri = "CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML  CSS is the king of web";

text.innerText = decri;

}

function js() {
const text = document.querySelector('.text-cntnt');

const html = document.querySelector('.tab-btn .html');
const css = document.querySelector('.tab-btn .css');
const js = document.querySelector('.tab-btn .js');
html.classList.remove('btns');
css.classList.remove('btns');
js.classList.add('btns');


const decri = "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.";

text.innerText = decri;

}