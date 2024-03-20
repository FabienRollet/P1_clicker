function togglePopup0() {
  let popup = document.querySelector(".navbar");
  popup.classList.toggle("open");
}

function togglePopup1() {
  let popup = document.querySelector(".how-to-play");
  popup.classList.toggle("open");
}
function togglePopup2() {
  let popup = document.querySelector(".who-are-we");
  popup.classList.toggle("open");
}
function togglePopup3() {
  let popup = document.querySelector(".menuDeroulant");
  popup.classList.toggle("open");
}

let numberClicks = 0;
function comptage() {
  numberClicks++;
  document.getElementById("numberClicks").textContent = numberClicks;
}

document.getElementById("boutonClic").addEventListener("click", comptage);

/*autocliker1*/

let prodAutoClicker1 = 0;
let lvlAutoClicker1 = 0;
let costAutoClicker1 = 1;

document.getElementById("autoClicker1").addEventListener("click", upValueAutoClicker1);

function upValueAutoClicker1() {
  if (numberClicks >= costAutoClicker1) {
    prodAutoClicker1++;
    lvlAutoClicker1++;
    document.getElementById("numberClicks").textContent = (numberClicks -= costAutoClicker1);
    costAutoClicker1 += 2;
    document.getElementById("prodAutoClicker1").textContent = prodAutoClicker1;
    document.getElementById("lvlAutoClicker1").textContent = lvlAutoClicker1;
    document.getElementById("costAutoClicker1").textContent = costAutoClicker1;
  } else {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    setTimeout(function () {
      modal.style.display = "none";
    }, 1000);
  }
}
setInterval(() => {
  document.getElementById("numberClicks").textContent = numberClicks += prodAutoClicker1;
}, 1000);

/*autocliker2*/
let prodAutoClicker2 = 0;
let lvlAutoClicker2 = 0;
let costAutoClicker2 = 10;

document.getElementById("autoClicker2").addEventListener("click", upValueAutoClicker2);
function upValueAutoClicker2() {
  if (numberClicks >= costAutoClicker2) {
    prodAutoClicker2 += 10;
    lvlAutoClicker2++;
    document.getElementById("numberClicks").textContent = (numberClicks -= costAutoClicker2);
    costAutoClicker2 += 10;
    document.getElementById("prodAutoClicker2").textContent = prodAutoClicker2;
    document.getElementById("lvlAutoClicker2").textContent = lvlAutoClicker2;
    document.getElementById("costAutoClicker2").textContent = costAutoClicker2;
  } else {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    setTimeout(function () {
      modal.style.display = "none";
    }, 1000);
  }
}

setInterval(() => {
  document.getElementById("numberClicks").textContent = numberClicks += prodAutoClicker2;
}, 1000);

/*autocliker3*/
let prodAutoClicker3 = 0;
let lvlAutoClicker3 = 0;
let costAutoClicker3 = 100;

document.getElementById("autoClicker3").addEventListener("click", upValueAutoClicker3);

function upValueAutoClicker3() {
  if (numberClicks >= costAutoClicker3) {
    prodAutoClicker3 += 100;
    lvlAutoClicker3++;
    document.getElementById("numberClicks").textContent = (numberClicks -= costAutoClicker3);
    costAutoClicker3 += 100;
    document.getElementById("prodAutoClicker3").textContent = prodAutoClicker3;
    document.getElementById("lvlAutoClicker3").textContent = lvlAutoClicker3;
    document.getElementById("costAutoClicker3").textContent = costAutoClicker3;
  } else {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    setTimeout(function () {
      modal.style.display = "none";
    }, 1000);
  }
}

setInterval(() => {
  document.getElementById("numberClicks").textContent = numberClicks += prodAutoClicker3;
}, 1000);

/*autocliker4*/
let prodAutoClicker4 = 0;
let lvlAutoClicker4 = 0;
let costAutoClicker4 = 1000;

document.getElementById("autoClicker4").addEventListener("click", upValueAutoClicker4);

function upValueAutoClicker4() {
  if (numberClicks >= costAutoClicker4) {
    prodAutoClicker4 += 1000;
    lvlAutoClicker4++;
    document.getElementById("numberClicks").textContent = (numberClicks -= costAutoClicker4);
    costAutoClicker4 += 1000;
    document.getElementById("prodAutoClicker4").textContent = prodAutoClicker4;
    document.getElementById("lvlAutoClicker4").textContent = lvlAutoClicker4;
    document.getElementById("costAutoClicker4").textContent = costAutoClicker4;
  } else {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    setTimeout(function () {
      modal.style.display = "none";
    }, 1000);
  }
}

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

// Fonction générique pour mettre à jour les valeurs de l'autoclicker
// function upValueAutoClicker(index) {
//   const autoclicker = autoclickers[index];
//   if (numberClicks >= autoclicker.cost) {
//     autoclicker.prod += autoclicker.clickIncrement;
//     autoclicker.lvl++;
//     numberClicks -= autoclicker.cost;
//     autoclicker.cost += autoclicker.cost;
//     updateDisplay(index);
//   } else {
//     var modal = document.getElementById("myModal");
//     modal.style.display = "block";
//     setTimeout(function () {
//       modal.style.display = "none";
//     }, 1000);
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

// function hidden upgrade

// let togg1 = document.getElementById("togg1");
// let upgrade = document.getElementById("upgrade");
// togg1.addEventListener("click", () => {
//   if(getComputedStyle(d1).display != "none"){
//     upgrade.style.display = "none";

//   } else {
//     upgrade.style.display = "block";

    
//   }
// })

// upgrade debloquage compteur

function addValueOfUpgrade1(){
 numberClicks +=1000;
 document.getElementById("numberClicks").textContent = numberClicks;
}
document.getElementById("upgradeImg1").addEventListener("click", addValueOfUpgrade1);

function addValueOfUpgrade2(){
  numberClicks +=2000;
  document.getElementById("numberClicks").textContent = numberClicks;
 }
 document.getElementById("upgradeImg2").addEventListener("click", addValueOfUpgrade2);

 function addValueOfUpgrade3(){
  numberClicks +=3000;
  document.getElementById("numberClicks").textContent = numberClicks;
 }
 document.getElementById("upgradeImg3").addEventListener("click", addValueOfUpgrade3);
 
 function addValueOfUpgrade4(){
   numberClicks +=4000;
   document.getElementById("numberClicks").textContent = numberClicks;
  }
  document.getElementById("upgradeImg4").addEventListener("click", addValueOfUpgrade4);
  function addValueOfUpgrade5(){
    numberClicks +=5000;
    document.getElementById("numberClicks").textContent = numberClicks;
   }
   document.getElementById("upgradeImg5").addEventListener("click", addValueOfUpgrade5);
   
   function addValueOfUpgrade6(){
     numberClicks +=6000;
     document.getElementById("numberClicks").textContent = numberClicks;
    }
    document.getElementById("upgradeImg6").addEventListener("click", addValueOfUpgrade6);
   
    function addValueOfUpgrade7(){
     numberClicks +=7000;
     document.getElementById("numberClicks").textContent = numberClicks;
    }
    document.getElementById("upgradeImg7").addEventListener("click", addValueOfUpgrade7);
    
    function addValueOfUpgrade8(){
      numberClicks +=8000;
      document.getElementById("numberClicks").textContent = numberClicks;
     }
     document.getElementById("upgradeImg8").addEventListener("click", addValueOfUpgrade8);

     function addValueOfUpgrade9(){
      numberClicks +=9000;
      document.getElementById("numberClicks").textContent = numberClicks;
     }
     document.getElementById("upgradeImg9").addEventListener("click", addValueOfUpgrade9);
     
     function addValueOfUpgrade10(){
       numberClicks +=10000;
       document.getElementById("numberClicks").textContent = numberClicks;
      }
      document.getElementById("upgradeImg10").addEventListener("click", addValueOfUpgrade10);
     
      function addValueOfUpgrade11(){
       numberClicks +=11000;
       document.getElementById("numberClicks").textContent = numberClicks;
      }
      document.getElementById("upgradeImg11").addEventListener("click", addValueOfUpgrade11);
      
      function addValueOfUpgrade12(){
        numberClicks +=12000;
        document.getElementById("numberClicks").textContent = numberClicks;
       }
       document.getElementById("upgradeImg12").addEventListener("click", addValueOfUpgrade12);