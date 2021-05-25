function bgglipper() {
  
const dispcolor = document.querySelector('.disp-color');

const randnum = Math.floor(Math.random() * 255);
const randnum1 = Math.floor(Math.random() * 255);
const randnum2 = Math.floor(Math.random() * 185);

 const bgcolor = "rgb(" + randnum + "," + randnum1 + "," + randnum2 + ")";
 const colorname = bgcolor;
const bg = document.querySelector('.bg-gen');
bg.style.backgroundColor = bgcolor;
dispcolor.style.color = bgcolor;
dispcolor.innerText = colorname;

}


function bgflipperhex(){
const dispcolor = document.querySelector('.disp-color');

const alpha = ['a', 'b', 'c', 'd', 'e', 'f'];

const randnum2 = Math.floor(Math.random() * 9);
const randnum22 = Math.floor(Math.random() * 9);
const randnum1 = Math.floor(Math.random() * alpha.length);
const randnum11 = Math.floor(Math.random() * alpha.length);

const colr1 = "#" + randnum2 + alpha[randnum1] + randnum22 + alpha[randnum11] + randnum2 + alpha[randnum1];

const colr2 = "#" + alpha[randnum1] + randnum2 + randnum22 + alpha[randnum11] + randnum2 + alpha[randnum1]; 

const twoclr = [colr1, colr2];
const rndbgcolor = Math.floor(Math.random() * 2);

const bgcolor = twoclr[rndbgcolor];

const bg = document.querySelector('.bg-gen');
bg.style.backgroundColor = bgcolor;
dispcolor.style.color = bgcolor;
dispcolor.innerText = bgcolor;


}


function hexappear() {

const rgbbtn = document.querySelector('.rgb');
const hexbtn = document.querySelector('.hex');

hexbtn.classList.add('displayblock');
rgbbtn.classList.remove('displayblock');
rgbbtn.classList.add('displaynone');
}

function rgbappear() {

const rgbbtn = document.querySelector('.rgb');
const hexbtn = document.querySelector('.hex');

rgbbtn.classList.add('displayblock');
hexbtn.classList.remove('displayblock');
  
}

