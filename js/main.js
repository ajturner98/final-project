//Game Variables
let goblinHealth1 = 7;
let goblinHealth2 = 7;
let goblinHealth3 = 21;
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

//Messages
let m1 = "You rolled a" + console.log("halInitiative") + "on initiative. You're going first!";
let m2 = "You rolled a" + console.log("halInitiative") + "on initiative. You're going second!";
let m3 = "You rolled a" + console.log("halInitiative") + "on initiative. You're going third!";
let m4 = "Hi brave hero! Three goblins have ambushed you on your way to Moro's Keep! Click the button below to roll initiative."

// m1 is the starting message value
let info = m4;

//Roll Initiative
let initiative = [];

start.onclick = () => {
   start.style.display = 'none';
   let halInitiative = Math.floor(Math.random() * 20)+3;
   let goblinInitiative = Math.floor(Math.random() * 20)+3;
   let bossInitiative = Math.floor(Math.random() * 20)+3;
   initiative.push(halInitiative, goblinInitiative, bossInitiative)
   initiative.sort(function(a, b){return b-a});
   mainButtons.forEach(function(el){
     el.style.display = 'block';
   });
   if (halInitiative > goblinInitiative && halInitiative > bossInitiative) {
     let info = m1;
   } else if (halInitiative < goblinInitiative && halInitiative > bossInitiative) {
     let info = m2;
   } else if (halInitiative > goblinInitiative && halInitiative < bossInitiative) {
     let info = m2;
} else {
  let info = m3;
}
}
