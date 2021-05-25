function arrow() {

const spane = document.querySelectorAll('.icons span');
const btn = document.querySelector('.btn i');

btn.classList.toggle('arrowturn');

spane.forEach((sp)=> {
sp.classList.toggle('addstyle');
});

}