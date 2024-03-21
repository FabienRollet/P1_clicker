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

let desktopAutoClicker = document.querySelector(".side-bar-right");
let desktop = window.innerWidth;
if (desktop <= 769) {
  desktopAutoClicker.onclick = null;
}


let numberClicks = 0;
function comptage() {
  numberClicks++;
  document.getElementById("numberClicks").textContent = numberClicks;
}

document.getElementById("boutonClic").addEventListener("click", comptage);


/*MUSIC */
let imgMusic = document.querySelector(".imgMusic");
let music = document.querySelector(".music");

function toggleMusic() {
  if (music.muted) {
    music.muted = false;
    imgMusic.src = "/assets/images/Speaker_Icon.png";
  } else {
    music.muted = true;
    imgMusic.src = "/assets/images/Speaker_muted.png";
  }
}


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
    }, 2000);
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
    }, 2000);
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
    }, 2000);
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
    }, 2000);
  }
}

setInterval(() => {
  document.getElementById("numberClicks").textContent = numberClicks += prodAutoClicker4;
}, 1000);


/*end autoclicker */

/*CHanging croissant face*/
let timerface;
let badCroissant = false;
let face = document.querySelector(".croissant-img");
face.addEventListener("mousedown", facing);

function facing() {
  if (!badCroissant) {
    if (numberClicks % 10 === 0 || numberClicks % 10 === 5) {
      face.src = "/assets/images/cwasoface2.png";
    } else if (numberClicks % 10 === 1 || numberClicks % 10 === 6) {
      face.src = "/assets/images/cwasoface3.png";
    } else if (numberClicks % 10 === 2 || numberClicks % 10 === 7) {
      face.src = "/assets/images/cwasoface4.png";
    } else if (numberClicks % 10 === 3 || numberClicks % 10 === 8) {
      face.src = "/assets/images/cwasoface5.png";
    } else if (numberClicks % 10 === 4 || numberClicks % 10 === 9) {
      face.src = "/assets/images/cwasoface6.png";
    }
    badCroissant = true;
    clearTimeout(timerface);
    timerface = setTimeout(function () {
      facerelease.src = "/assets/images/cwasoface.png";
      badCroissant = false;
    }, 1000);
  }
}

let facerelease = document.querySelector(".croissant-img");
facerelease.addEventListener("mouseup", facerelease);


// upgrade debloquage compteur

function addValueOfUpgrade1() {
  numberClicks += 1000;
  document.getElementById("numberClicks").textContent = numberClicks;
}

document.getElementById("upgradeImg1").addEventListener("click", addValueOfUpgrade1);

function addValueOfUpgrade2() {
  numberClicks += 2000;
  document.getElementById("numberClicks").textContent = numberClicks;
}
document.getElementById("upgradeImg2").addEventListener("click", addValueOfUpgrade2);

function addValueOfUpgrade3() {
  numberClicks += 3000;
  document.getElementById("numberClicks").textContent = numberClicks;
}
document.getElementById("upgradeImg3").addEventListener("click", addValueOfUpgrade3);

function addValueOfUpgrade4() {
  numberClicks += 4000;
  document.getElementById("numberClicks").textContent = numberClicks;
}
document.getElementById("upgradeImg4").addEventListener("click", addValueOfUpgrade4);
function addValueOfUpgrade5() {
  numberClicks += 5000;
  document.getElementById("numberClicks").textContent = numberClicks;
}
document.getElementById("upgradeImg5").addEventListener("click", addValueOfUpgrade5);

function addValueOfUpgrade6() {
  numberClicks += 6000;
  document.getElementById("numberClicks").textContent = numberClicks;
}
document.getElementById("upgradeImg6").addEventListener("click", addValueOfUpgrade6);

function addValueOfUpgrade7() {
  numberClicks += 7000;
  document.getElementById("numberClicks").textContent = numberClicks;
}
document.getElementById("upgradeImg7").addEventListener("click", addValueOfUpgrade7);

function addValueOfUpgrade8() {
  numberClicks += 8000;
  document.getElementById("numberClicks").textContent = numberClicks;
}
document.getElementById("upgradeImg8").addEventListener("click", addValueOfUpgrade8);

function addValueOfUpgrade9() {
  numberClicks += 9000;
  document.getElementById("numberClicks").textContent = numberClicks;
}
document.getElementById("upgradeImg9").addEventListener("click", addValueOfUpgrade9);

function addValueOfUpgrade10() {
  numberClicks += 10000;
  document.getElementById("numberClicks").textContent = numberClicks;
}
document.getElementById("upgradeImg10").addEventListener("click", addValueOfUpgrade10);

function addValueOfUpgrade11() {
  numberClicks += 11000;
  document.getElementById("numberClicks").textContent = numberClicks;
}
document.getElementById("upgradeImg11").addEventListener("click", addValueOfUpgrade11);

function addValueOfUpgrade12() {
  numberClicks += 12000;
  document.getElementById("numberClicks").textContent = numberClicks;
}
document.getElementById("upgradeImg12").addEventListener("click", addValueOfUpgrade12);


//disparition de chaque upgrade apres un clic
function HiddenImg() {
  if (document.getElementById('upgradeImg1').style.display == 'block') {
    document.getElementById('upgradeImg1').style.visibility = 'hidden';
  }
  else {
    document.getElementById('upgradeImg1').style.display = 'block';
  }
}
function HiddenImg2() {
  if (document.getElementById('upgradeImg2').style.display == 'block') {
    document.getElementById('upgradeImg2').style.visibility = 'hidden';
  }
  else {
    document.getElementById('upgradeImg2').style.display = 'block';
  }
}
function HiddenImg3() {
  if (document.getElementById('upgradeImg3').style.display == 'block') {
    document.getElementById('upgradeImg3').style.visibility = 'hidden';
  }
  else {
    document.getElementById('upgradeImg3').style.display = 'block';
  }
}
function HiddenImg4() {
  if (document.getElementById('upgradeImg4').style.display == 'block') {
    document.getElementById('upgradeImg4').style.visibility = 'hidden';
  }
  else {
    document.getElementById('upgradeImg4').style.display = 'block';
  }
}
function HiddenImg5() {
  if (document.getElementById('upgradeImg5').style.display == 'block') {
    document.getElementById('upgradeImg5').style.visibility = 'hidden';
  }
  else {
    document.getElementById('upgradeImg5').style.display = 'block';
  }
}
function HiddenImg6() {
  if (document.getElementById('upgradeImg6').style.display == 'block') {
    document.getElementById('upgradeImg6').style.visibility = 'hidden';
  }
  else {
    document.getElementById('upgradeImg6').style.display = 'block';
  }
}
function HiddenImg7() {
  if (document.getElementById('upgradeImg7').style.display == 'block') {
    document.getElementById('upgradeImg7').style.visibility='hidden';
  }
  else {
    document.getElementById('upgradeImg7').style.display = 'block';
  }
}
function HiddenImg8() {
  if (document.getElementById('upgradeImg8').style.display == 'block') {
    document.getElementById('upgradeImg8').style.visibility='hidden';
  }
  else {
    document.getElementById('upgradeImg8').style.display = 'block';
  }
}
function HiddenImg9() {
  if (document.getElementById('upgradeImg9').style.display == 'block') {
    document.getElementById('upgradeImg9').style.visibility='hidden';
  }
  else {
    document.getElementById('upgradeImg9').style.display = 'block';
  }
}
function HiddenImg10() {
  if (document.getElementById('upgradeImg10').style.display == 'block') {
    document.getElementById('upgradeImg10').style.visibility='hidden';
  }
  else {
    document.getElementById('upgradeImg10').style.display = 'block';
  }
}
function HiddenImg11() {
  if (document.getElementById('upgradeImg11').style.display == 'block') {
    document.getElementById('upgradeImg11').style.visibility='hidden';
  }
  else {
    document.getElementById('upgradeImg11').style.display = 'block';
  }
}
function HiddenImg12() {
  if (document.getElementById('upgradeImg12').style.display == 'block') {
    document.getElementById('upgradeImg12').style.visibility='hidden';
  }
  else {
    document.getElementById('upgradeImg12').style.display = 'block';
  }
}