function togglePopup0 () {
  let popup = document.querySelector(".navbar");
  popup.classList.toggle("open");
}

function togglePopup1 () {
    let popup = document.querySelector(".how-to-play");
    popup.classList.toggle("open");
}
function togglePopup2 () {
    let popup = document.querySelector(".who-are-we");
    popup.classList.toggle("open");
}
function togglePopup3 () {
  let popup = document.querySelector(".menuDeroulant");
  popup.classList.toggle("open");
}

let numberClicks = 0;
function comptage() {
  numberClicks++;
  document.getElementById("numberClicks").textContent = numberClicks;
}

document.getElementById("boutonClic").addEventListener("click", comptage);

// /*autocliker1*/

let prodAutoClicker1 = 0;
let lvlAutoClicker1 = 0;
let costAutoClicker1 = 1;

document.getElementById("autoClicker1").addEventListener("click", upValueAutoClicker1);

function upValueAutoClicker1() {
    prodAutoClicker1++;
    lvlAutoClicker1++;
    document.getElementById("numberClicks").textContent = (numberClicks -= costAutoClicker1);
    costAutoClicker1 += 2;
    document.getElementById("prodAutoClicker1").textContent = prodAutoClicker1;
    document.getElementById("lvlAutoClicker1").textContent = lvlAutoClicker1;
    document.getElementById("costAutoClicker1").textContent = costAutoClicker1;
}

setInterval(() => {
  document.getElementById("numberClicks").textContent = numberClicks += prodAutoClicker1;
}, 1000);

/*autocliker2*/
let prodAutoClicker2 = 0;
let lvlAutoClicker2 = 0;
let costAutoClicker2 = 10;

function upValueAutoClicker2() {
  prodAutoClicker2 += 10;
  lvlAutoClicker2++;
  document.getElementById("numberClicks").textContent = (numberClicks -= costAutoClicker2);
  costAutoClicker2 += 10;
  document.getElementById("prodAutoClicker2").textContent = prodAutoClicker2;
  document.getElementById("lvlAutoClicker2").textContent = lvlAutoClicker2;
  document.getElementById("costAutoClicker2").textContent = costAutoClicker2;
}
document.getElementById("autoClicker2").addEventListener("click", upValueAutoClicker2);


setInterval(() => {
  document.getElementById("numberClicks").textContent = numberClicks += prodAutoClicker2;
}, 1000);

/*autocliker3*/
let prodAutoClicker3 = 0;
let lvlAutoClicker3 = 0;
let costAutoClicker3 = 100;

function upValueAutoClicker3() {
  prodAutoClicker3 += 100;
  lvlAutoClicker3++;
  document.getElementById("numberClicks").textContent = (numberClicks -= costAutoClicker3);
  costAutoClicker3 += 100;
  document.getElementById("prodAutoClicker3").textContent = prodAutoClicker3;
  document.getElementById("lvlAutoClicker3").textContent = lvlAutoClicker3;
  document.getElementById("costAutoClicker3").textContent = costAutoClicker3;
}
document.getElementById("autoClicker3").addEventListener("click", upValueAutoClicker3);


setInterval(() => {
  document.getElementById("numberClicks").textContent = numberClicks += prodAutoClicker3;
}, 1000);

/*autocliker4*/
let prodAutoClicker4 = 0;
let lvlAutoClicker4 = 0;
let costAutoClicker4 = 1000;

function upValueAutoClicker4() {
  prodAutoClicker4 += 1000;
  lvlAutoClicker4++;
  document.getElementById("numberClicks").textContent = (numberClicks -= costAutoClicker4);
  costAutoClicker4 += 1000;
  document.getElementById("prodAutoClicker4").textContent = prodAutoClicker4;
  document.getElementById("lvlAutoClicker4").textContent = lvlAutoClicker4;
  document.getElementById("costAutoClicker4").textContent = costAutoClicker4;
}
document.getElementById("autoClicker4").addEventListener("click", upValueAutoClicker4);


setInterval(() => {
  document.getElementById("numberClicks").textContent = numberClicks += prodAutoClicker4;
}, 1000);

// Définition des types d'autoclickers
// const autoclickers = [
//   { prod: 0, lvl: 0, cost: 1, clickIncrement: 1 },
//   { prod: 0, lvl: 0, cost: 10, clickIncrement: 10 },
//   { prod: 0, lvl: 0, cost: 100, clickIncrement: 100 },
//   { prod: 0, lvl: 0, cost: 1000, clickIncrement: 1000 }
// ];

// // Fonction générique pour mettre à jour les valeurs de l'autoclicker
// function upValueAutoClicker(index) {
//   const autoclicker = autoclickers[index];
//   if (numberClicks >= autoclicker.cost) {
//     autoclicker.prod += autoclicker.clickIncrement;
//     autoclicker.lvl++;
//     numberClicks -= autoclicker.cost;
//     autoclicker.cost += autoclicker.cost;
//     updateDisplay(index);
//   } else {
//     console.log("Pas assez de clics disponibles pour acheter cet autoclicker.");
//   }
// }

// // Fonction pour mettre à jour l'affichage des valeurs de l'autoclicker
// function updateDisplay(index) {
//   const autoclicker = autoclickers[index];
//   document.getElementById(`prodAutoClicker${index + 1}`).textContent = autoclicker.prod;
//   document.getElementById(`lvlAutoClicker${index + 1}`).textContent = autoclicker.lvl;
//   document.getElementById(`costAutoClicker${index + 1}`).textContent = autoclicker.cost;
//   document.getElementById("numberClicks").textContent = numberClicks;
// }

// // Ajout des écouteurs d'événements pour chaque autoclicker
// autoclickers.forEach((_, index) => {
//   document.getElementById(`autoClicker${index + 1}`).addEventListener("click", () => {
//     upValueAutoClicker(index);
//   });

//   // Définition des intervalles pour chaque autoclicker
//   setInterval(() => {
//     numberClicks += autoclickers[index].prod;
//     updateDisplay(index);
//   }, 1000);
// });

/*end autoclicker */

