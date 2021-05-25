
const housss = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12];



function update() {
  
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const day = document.querySelector('.days');
const date = document.querySelector('.date');
const month = document.querySelector('.month');

  
const t = new Date();

let hr = housss[t.getHours()];
let mi = t.getMinutes();
let sc = t.getSeconds();

//dayss
const week = ["o", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let dy = week[t.getDay()];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
let mn = monthNames[t.getMonth()];
let dt = t.getDate();


hour.innerText = hr;
min.innerText = mi;
sec.innerText = sc;
day.innerText = dy;
month.innerText = mn;
date.innerText = dt;

}

setInterval(update, 1000);




/*
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const d = new Date();

console.log(d.getHours());

document.write("The current month is " + monthNames[d.getMonth()]);


const date = new Date(2009, 10, 10);  // 2009-11-10
const month = date.toLocaleString('default', { month: 'long' });
console.log(month);


const formatter = new Intl.DateTimeFormat('en', { month: 'long' });
const month1 = formatter.format(new Date());
const month2 = formatter.format(new Date(2003, 5, 12));
console.log(`${month1} and ${month2}`); // current month in French and "juin".

*/