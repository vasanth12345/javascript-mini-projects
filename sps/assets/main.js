const game = ()=> {
 
let pscore = 0;
let cscore = 0;
 
const startgame = ()=> {
  
const playBtn = document.querySelector(".welcome button");
const introScreen = document.querySelector(".welcome");
const match = document.querySelector(".match");

playBtn.addEventListener("click", () => {
introScreen.classList.add("fadeOut");
match.classList.add("fadeIn");
});

};/* startgame */


const playgame = ()=> {
  
const options = document.querySelectorAll('.options button');
const phand = document.querySelector('.playerhand');
const chand = document.querySelector('.comhand');
const hands = document.querySelectorAll(".hands img");


hands.forEach(hand => {
hand.addEventListener("animationend", function() {
    this.style.animation = "";
});
});//animate

const comparehands = ["rock", "paper", "scissors"];

options.forEach(option => {
option.addEventListener('click', function(){

setTimeout(()=> {
  
const hitsound = new Audio('../loot/swish.m4a');
 hitsound.play();
 
}, -400); 


const pickoption = Math.floor(Math.random() * 3);
const comchoice = comparehands[pickoption];
 
setTimeout(()=> {
 
comparescore(this.textContent, comchoice);
 

phand.src=`../loot/${this.textContent}.png`;
chand.src= `../loot/${comchoice}.png`;

}, 1300);//time

phand.style.animation = "shakePlayer 1.5s ease-out";
chand.style.animation = "shakeComputer 1.5s ease-out";

});
});//heart
  
};// playgame


const updatescore = ()=> {

const playerscore = document.querySelector('.players span');
const comsscore = document.querySelector('.coms span');

playerscore.textContent = pscore;
comsscore.textContent = cscore;

/* 
// 10 score 
if (pscore == 10 || cscore == 10) {
  location.reload();
}
*/

};//score


const comparescore = (playerchoice, comchoice)=> {
 
const winner = document.querySelector('.winner h2');



if(playerchoice === comchoice) {
 winner.style.color = "cyan";
 winner.style.textShadow = "0 0 4px cyan";
 winner.textContent = "It is a tie";
return;
}

if (playerchoice === "rock") {
if(comchoice === "scissors"){
 winner.style.color = "#fff";
 winner.style.textShadow = "0 0 4px #f00";
winner.textContent ="🔥Player wins🔥";
pscore++;
updatescore();
return;
} else {
 winner.style.color = "red";
 winner.style.textShadow = "0 0 4px red";
winner.textContent = "computer wins";
 cscore++;
 updatescore();
 return;
}
}

if (playerchoice === "paper") {
if(comchoice === "scissors"){
winner.style.color = "red";
winner.style.textShadow = "0 0 4px red";
winner.textContent = "computer wins";
cscore++;
updatescore();
return;
} else {
 winner.style.color = "#fff";
 winner.style.textShadow = "0 0 4px #f00"; 
winner.textContent ="🔥player wins🔥";
pscore++;
updatescore();
return;
}
}

if (playerchoice === "scissors") {
if(comchoice === "rock"){
 winner.style.color = "red";
 winner.style.textShadow = "0 0 4px red";
winner.textContent = "computer wins";
cscore++;
updatescore();
return;
} else {
 winner.style.color = "#fff";
 winner.style.textShadow = "0 0 4px #f00";
winner.textContent = "🔥player wins🔥";
pscore++;
updatescore();
return;
}
}


};//comaparescr


startgame();
playgame();

};// game 
game();