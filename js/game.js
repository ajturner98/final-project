// global variables
let goblinHealth1 = 7;
let goblinHealth2 = 7;
let bossHealth = 21;
const goblinAC = 15;
const goblinBossAC = 17;
let speed = 30;
let halInitiative = Math.floor(Math.random() * 20)+3;
let goblinInitiative = Math.floor(Math.random() * 20)+3;
let bossInitiative = Math.floor(Math.random() * 20)+3;
let sheet = document.querySelector("#sheet");
let attacks = document.querySelectorAll('.buttons');
let end = document.querySelectorAll('.buttons2');
let turn = document.querySelector('#end');

//Hal Variables
let halHealth = 35;
const halAC = 16;
let actionSurge = 1;
let secondWind = 1;
const meleeBonus = 5;
const rangedBonus = 4;

// messages
let m1 = "You've been jumped by three goblins on the way to Moro's Keep! It's time to roll initiative to determine the combat order. Click the 'Roll Initiative' button to roll a 20 sided die and and your initiative (dexterity) modifier.";
let m11 = "You have been reduced to 0 HP. In a normal D&D game, you would roll to see if you stabalize or die, but here you can just start again!"

// the value of message will be changed depending on player actions
// m1 is the starting message value
let message = m1;

// this function executes immediately when the page loads
writeResults();

//Roll Initiative
let initiative = [];

let list = document.querySelector("#body");

list.style.display = 'none';

end.forEach(function(el){
  el.style.display = 'none';
});

start.onclick = () => {
   start.style.display = 'none';
   initiative.push(halInitiative, goblinInitiative, bossInitiative)
   initiative.sort(function(a, b){return b-a});
   list.style.display = 'block';
   if (halInitiative === initiative[0]) {
     highInitiative();
   } else if (halInitiative === initiative[1]) {
     midInitiative();
   } else {
     lowInitiative();
}
  writeResults();
}

//initiative functions
function highInitiative(){
  let m2 = "You rolled a " + halInitiative + " on initiative. You go first and get to attack before the enemies. What do you want to do for your turn?";
  message = m2;
  sheet.setAttribute("src",  "images/sheets/attack.png");
}

function midInitiative(){
  let goblinAttack = Math.floor(Math.random() * 20)+5;
  let goblinDamage = (Math.floor(Math.random() * 6)+3);
  let goblinDamage2 = (Math.floor(Math.random() * 6)+3);
  let bossAttack = Math.floor(Math.random() * 20)+5;
  let bossDamage = Math.floor(Math.random() * 6)+3;
  let m3 = "You rolled a " + halInitiative + " on initiative. You go second. The normal goblins rolled higher than you and took their attacks on you, dealing " + goblinDamage + " damage because they surpassed your armor class. What do you want to do for your turn?";
  let m4 = "You rolled a " + halInitiative + " on initiative. You go second. The normal goblins rolled higher than you and tried to attack you, but they missed because they rolled lower than your armor class. What do you want to do for your turn?";
  let m5 = "You rolled a " + halInitiative + " on initiative. You go second. The boss goblin rolled higher than you and took its attack on you, dealing " + bossDamage + " damage because he surpassed your armor class. What do you want to do for your turn?";
  let m6 = "You rolled a " + halInitiative + " on initiative. You go second. The boss goblin rolled higher than you and took its attack on you, but he missed because he rolled lower than your armor class. What do you want to do for your turn?";
  if (goblinInitiative === initiative[0]) {
    if (goblinAttack >= halAC){
    halHealth = halHealth - (goblinDamage + goblinDamage2);
    message = m3;
    sheet.setAttribute("src",  "images/sheets/ac_health.png");
} else{
  message = m4;
  sheet.setAttribute("src",  "images/sheets/ac.png");
}
  } else {
    if (bossAttack >= halAC){
    message = m5;
    halHealth = halHealth - bossDamage;
    sheet.setAttribute("src",  "images/sheets/ac_health.png");
} else{
  message = m6;
  sheet.setAttribute("src",  "images/sheets/ac.png");
}
}
}

function lowInitiative(){
  let goblinAttack = Math.floor(Math.random() * 20)+5;
  let goblinDamage = (Math.floor(Math.random() * 6)+3);
  let goblinDamage2 = (Math.floor(Math.random() * 6)+3);
  let bossAttack = Math.floor(Math.random() * 20)+5;
  let bossDamage = Math.floor(Math.random() * 6)+3;
  let m7 = "You rolled a " + halInitiative + " on initiative. You go last because you rolled lower than the two goblins and the goblin boss. All three of them attack and hit because they surpassed your armor class, dealing you " + (bossDamage + goblinDamage) + " damage. What do you want to do for your turn?";
  let m8 = "You rolled a " + halInitiative + " on initiative. You go last because you rolled lower than the two goblins and the goblin boss. All three goblins tried attacking you, but only the normal goblins hit because they surpassed your armor class, dealing " + goblinDamage + " damage. What do you want to do for your turn?";
  let m9 = "You rolled a " + halInitiative + " on initiative. You go last because you rolled lower than the two goblins and the goblin boss. All three goblins tried attacking you, but only the boss goblin hit because they surpassed your armor class, dealing " + bossDamage + " damage . What do you want to do for your turn?";
  let m10 = "You rolled a " + halInitiative + " on initiative. You go last because you rolled lower than the two goblins and the goblin boss. All three goblins tried attacking you, but they all missed because they rolled lower than your armor class. What do you want to do for your turn?";
  if (goblinAttack >= halAC && bossAttack >= halAC){
    message = m7;
    halHealth = halHealth - (bossDamage + goblinDamage + goblinDamage2);
    sheet.setAttribute("src",  "images/sheets/ac_health.png");
  } else if (goblinAttack >= halAC && bossAttack < halAC) {
    message = m8;
    halHealth = halHealth - (goblinDamage + goblinDamage2);
    sheet.setAttribute("src",  "images/sheets/ac_health.png");
  } else if (goblinAttack < halAC && bossAttack >= halAC) {
    sheet.setAttribute("src",  "images/sheets/ac_health.png");
    message = m9;
    halHealth = halHealth - bossDamage;
  } else {
    message = m10;
    sheet.setAttribute("src",  "images/sheets/ac.png");
  }
}

//Hal Attack 1
let attack1 = document.querySelector('#attack1');

attack1.onclick = () => {
  sheet.setAttribute("src",  "images/sheets/greataxe.png");
  let halAttack = Math.floor(Math.random() * 20)+6;
  let halAxe = Math.floor(Math.random() * 12)+4;
  end.forEach(function(el){
    el.style.display = 'block';
  });
  attacks.forEach(function(el){
    el.style.display = 'none';
  });
  let m12 = "You swing your axe at the goblin and roll a " + halAttack + " to hit. You deal " + halAxe + " damage. Do you want to do anything else before ending your turn?";
  let m13 ="You swing your axe at the goblin and miss! Do you want to do anything else before ending your turn?";
  let m14 = "You swing your axe at the goblin and roll a " + halAttack + " to hit. You deal " + halAxe + " damage, killing the goblin! Do you want to do anything else before ending your turn?";
  if (halAttack >= goblinAC) {
    goblinHealth1 = goblinHealth1 - halAxe;

    if (goblinHealth1 <= 0){
      message = m14;
      attack1.remove();
  } else {
    message = m12;
  }
}
  else {
    message = m13;
  }
  writeResults();
    };

//Hal Attack 2
let attack2 = document.querySelector('#attack2');

attack2.onclick = () => {
  sheet.setAttribute("src",  "images/sheets/greataxe.png");
  let halAttack = Math.floor(Math.random() * 20)+6;
  let halAxe = Math.floor(Math.random() * 12)+4;
  end.forEach(function(el){
    el.style.display = 'block';
  });
  attacks.forEach(function(el){
    el.style.display = 'none';
  });
  let m12 = "You swing your axe at the goblin and roll a " + halAttack + " to hit. You deal " + halAxe + " damage. Do you want to do anything else before ending your turn?";
  let m13 ="You swing your axe at the goblin and miss! Do you want to do anything else before ending your turn?";
  let m14 = "You swing your axe at the goblin and roll a " + halAttack + " to hit. You deal " + halAxe + " damage, killing the goblin! Do you want to do anything else before ending your turn?";
  if (halAttack >= goblinAC) {
    goblinHealth2=goblinHealth2-halAxe;

    if (goblinHealth2 <= 0){
      message = m14;
      attack2.remove();
  } else {
    message = m12;
  }
}
  else {
    message = m13;
  }
  writeResults();
    };




//Hal Attack 3
let attack3 = document.querySelector('#attack3');

attack3.onclick = () => {
  sheet.setAttribute("src",  "images/sheets/greataxe.png");
  let halAttack = Math.floor(Math.random() * 20)+6;
  let halAxe = Math.floor(Math.random() * 12)+4;
  end.forEach(function(el){
    el.style.display = 'block';
  });
  attacks.forEach(function(el){
    el.style.display = 'none';
  });
  let m12 = "You swing your axe at the goblin boss and roll a " + halAttack + " to hit. You deal " + halAxe + " damage. Do you want to do anything else before ending your turn?";
  let m13 ="You swing your axe at the goblin and miss! Do you want to do anything else before ending your turn?";
  let m14 = "You swing your axe at the goblin and roll a " + halAttack + " to hit. You deal " + halAxe + " damage, killing the goblin! Do you want to do anything else before ending your turn?";
  if (halAttack >= goblinBossAC) {
    bossHealth=bossHealth-halAxe;

    if (bossHealth <= 0){
      message = m14;
      attack3.remove();
  } else {
    message = m12;
  }
}
  else {
    message = m13;
  }
  writeResults();
    };

//Hal Action Surge
let surge = document.querySelector('#actionSurge');

surge.onclick = () => {
  actionSurge -= 1;
  let m24 = "You used your action surge! You can attack again. It takes a rest out of combat to regain this skill!";
  message = m24;
  attacks.forEach(function(el){
  el.style.display = 'block';
    });
  end.forEach(function(el){
  el.style.display = 'none'});
  surge.remove();
  writeResults();
  sheet.setAttribute("src",  "images/sheets/surge.png");
};

//Hal Second Wind
let wind = document.querySelector('#secondWind');

wind.onclick = () => {
  secondWind -= 1;
  let m25 = "A wave of stamina washes over you as your second wind hits. You regained some hit points!";
  message = m25;
  sheet.setAttribute("src",  "images/sheets/wind.png");
  wind.remove();
  halHealth += Math.floor(Math.random() * 10)+4;
  writeResults();
    };

//Hal End Turn
turn.addEventListener('click', goblinFight);

//Goblin Fighting
function goblinFight(){
  sheet.setAttribute("src",  "images/sheets/ac_health.png");
  let goblinAttack = Math.floor(Math.random() * 20)+5;
  let goblinDamage = (Math.floor(Math.random() * 6)+3);
  let goblinDamage2 = (Math.floor(Math.random() * 6)+3);
  let bossAttack = Math.floor(Math.random() * 20)+5;
  let bossDamage = Math.floor(Math.random() * 6)+3;
  let m15 = "All three goblins attacked you and hit! You take " + (goblinDamage+goblinDamage2+bossDamage) + " damage. It's your turn!";
  let m16 = "The remaining goblin and goblin boss attacked you and hit! You take " + (goblinDamage2+bossDamage) + " damage. It's your turn!";
  let m17 = "The remaining goblin and goblin boss attacked you and hit! You take " + (goblinDamage+bossDamage) + " damage. It's your turn!";
  let m18 = "The goblin boss attacked you and hit! You take " + bossDamage + " damage. It's your turn!";
  let m19 = "Both remining normal goblins attacked you and hit! You take " + (goblinDamage+goblinDamage2) + " damage. It's your turn!";
  let m20 = "The last remaining goblin attacked you and hit! You take " + goblinDamage2 + " damage. It's your turn!";
  let m21 = "The last remaining normal goblin attacked you and hit! You take " + goblinDamage + " damage. It's your turn!";
  let m22 = "Only the goblin boss managed to land an attack on you this turn. You took " + bossDamage + " damage.";
  let m23 = "No goblins managed to attack you this round. It's your turn!";
  if (goblinAttack >= halAC && bossAttack >= halAC){
    if (goblinHealth1 > 0 && goblinHealth2 > 0){
      halHealth= halHealth - (goblinDamage+goblinDamage2+bossDamage);
      message = m15;
    } else if (goblinHealth1 < 0 && goblinHealth2 > 0){
      halHealth=halHealth-(goblinDamage2+bossDamage);
      message = m16;
    } else if (goblinHealth1 > 0 && goblinHealth2 < 0) {
      halHealth=halHealth-(goblinDamage+bossDamage);
      message = m17;
    } else {
      halHealth=halHealth-bossDamage;
      message = m18;
    }
  } else if (goblinAttack >= halAC && bossAttack < halAC) {
    if (goblinHealth1 > 0 && goblinHealth2 > 0){
      halHealth= halHealth - (goblinDamage+goblinDamage2);
      message = m19;
    } else if (goblinHealth1 < 0 && goblinHealth2 > 0){
      halHealth=halHealth-goblinDamage2;
      message = m20;
    } else {
      halHealth=halHealth-goblinDamage;
      message = m21;
    }
  } else if (goblinAttack < halAC && bossAttack >= halAC) {
    if (bossHealth>0) {
      halHealth = halHealth-bossDamage;
      message = m22;
    } else {
    message = m23;
  }
} else {
  message = m23;
}

//Game over simulations
if (halHealth <= 0){
  let m26 = "You have been reduced to 0 hit points or below. While that means it's Game Over here, that doesn't necessarily mean it would be the case in an actual D&D game. Your party will likely have someone who can heal you and keep you from reaching 0 HP. Otherwise, you would do death saving throws to try stabalizing. Also, if your health reaches negative your maximum number of hit points, you're automtically dead. Refresh the page to play again!";
  message = m26;
  document.querySelector("#narration").textContent = message;
} else {
attacks.forEach(function(el){
  el.style.display = 'block';
});
end.forEach(function(el){
  el.style.display = 'none'});
}
writeResults()
}

// Set meters and changing values
function writeResults() {
  document.querySelector("#health").textContent = halHealth;
  document.querySelector("#wind").textContent = secondWind;
  document.querySelector("#surge").textContent = actionSurge;
  document.querySelector("#narration").textContent = message;
}
