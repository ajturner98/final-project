//Game Variables
let goblinHealth1 = 7;
let goblinHealth2 = 7;
let goblinHealth2 = 21;
const goblinAC = 15;
const goblinBossAC = 17;
let speed = 30;

//Hal Variables
let halHealth = 35;
const halAC = 16;
let halAxe = Math.floor(Math.random() * 12)+4;
let halBow = Math.floor(Math.random() * 8) + 3;
let actionSurge = 1;
let secondWind = 1;
const meleeBonus = 5;
const rangedBonus = 4;


//connection to HTML
let info = document.querySelector("#narration");
let axeAttack = document.querySelector("#axe");
let bowAttack = document.querySelector("#bow");
let surge = document.querySelector("#AS");
let wind = document.querySelector("#SW");
let start = document.querySelector("#start");
let mainButtons = document.querySelectorAll(".buttons");


//Roll Initiative
let initiative = [];

start.onclick = () => {
   start.style.display = 'none';
}
