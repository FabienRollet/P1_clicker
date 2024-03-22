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
let twoClick = false
function comptage() {
  if(twoClick===true){
    numberClicks+=2;
  }else{
    numberClicks++;
  }

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
let costAutoClicker1 = 15;
let twoGrandma = false;

document.getElementById("autoClicker1").addEventListener("click", upValueAutoClicker1);

function upValueAutoClicker1() {
  if(twoGrandma){
    prodAutoClicker1++
  }
  if (numberClicks >= costAutoClicker1) {
    prodAutoClicker1++;
    lvlAutoClicker1++;
    document.getElementById("numberClicks").textContent = (numberClicks -= costAutoClicker1);
    costAutoClicker1 = (costAutoClicker1+lvlAutoClicker1*5+15);
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
let costAutoClicker2 = 100;
let twoBackery=false;

document.getElementById("autoClicker2").addEventListener("click", upValueAutoClicker2);
function upValueAutoClicker2() {
  if(twoBackery){
    prodAutoClicker2+= 10;
  }
  if (numberClicks >= costAutoClicker2) {
    prodAutoClicker2 += 10;
    lvlAutoClicker2++;
    document.getElementById("numberClicks").textContent = (numberClicks -= costAutoClicker2);
    costAutoClicker2 = (costAutoClicker2+lvlAutoClicker2*5+200);
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
let twoPc=false;

document.getElementById("autoClicker3").addEventListener("click", upValueAutoClicker3);

function upValueAutoClicker3() {
  if(twoPc){
    prodAutoClicker3+= 10
  }
  if (numberClicks >= costAutoClicker3) {
    prodAutoClicker3 += 10;
    lvlAutoClicker3++;
    document.getElementById("numberClicks").textContent = (numberClicks -= costAutoClicker3);
    costAutoClicker3 = (costAutoClicker3+lvlAutoClicker3*5+1000);
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
let twoParachute=false;

document.getElementById("autoClicker4").addEventListener("click", upValueAutoClicker4);

function upValueAutoClicker4() {
  if(twoParachute){
    prodAutoClicker4 += 50
  }
  if (numberClicks >= costAutoClicker4) {
    prodAutoClicker4 += 50;
    lvlAutoClicker4++;
    document.getElementById("numberClicks").textContent = (numberClicks -= costAutoClicker4);
    costAutoClicker4 = (costAutoClicker4+lvlAutoClicker4*5+15000);
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

/*modaleSurprise*/
let numberClicksGoal = true;
setInterval(() => {
  if(numberClicks >= 100000 && numberClicks <= 200000 && numberClicksGoal){
    let modal = document.getElementById("myModalSurprise");
    modal.style.display = "block";
    setTimeout(function () {
      modal.style.display = "none";
    }, 10000);
    numberClicksGoal = !numberClicksGoal;
  }
}, 1000);

/*fin modalesurprise*/

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
  twoClick=true;
  document.getElementById("numberClicks").textContent = numberClicks;
}
document.getElementById("upgradeImg1").addEventListener("click", addValueOfUpgrade1);

function addValueOfUpgrade2() {
  twoGrandma=true;
}
document.getElementById("upgradeImg2").addEventListener("click", addValueOfUpgrade2);

function addValueOfUpgrade3() {
  twoBackery=true;
}
document.getElementById("upgradeImg3").addEventListener("click", addValueOfUpgrade3);

function addValueOfUpgrade4() {
  numberClicks += 1000;
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
    document.getElementById('upgradeImg1').style.display = 'none';
  }
  else {
    document.getElementById('upgradeImg1').style.opacity= "0.33";
  }
}
function HiddenImg2() {
  if (document.getElementById('upgradeImg2').style.display == 'block') {
    document.getElementById('upgradeImg2').style.display = 'none';
  }
  else {
    document.getElementById('upgradeImg2').style.opacity= "0.33";
  }
}
function HiddenImg3() {
  if (document.getElementById('upgradeImg3').style.display == 'block') {
    document.getElementById('upgradeImg3').style.display = 'none';
  }
  else {
    document.getElementById('upgradeImg3').style.opacity= "0.33";
  }
}
function HiddenImg4() {
  if (document.getElementById('upgradeImg4').style.display == 'block') {
    document.getElementById('upgradeImg4').style.display = 'none';
  }
  else {
    document.getElementById('upgradeImg4').style.opacity= "0.33";
  }
}
function HiddenImg5() {
  if (document.getElementById('upgradeImg5').style.display == 'block') {
    document.getElementById('upgradeImg5').style.display = 'none';
  }
  else {
    document.getElementById('upgradeImg5').style.opacity= "0.33";
  }
}
function HiddenImg6() {
  if (document.getElementById('upgradeImg6').style.display == 'block') {
    document.getElementById('upgradeImg6').style.display = 'none';
  }
  else {
    document.getElementById('upgradeImg6').style.opacity= "0.33";
  }
}
function HiddenImg7() {
  if (document.getElementById('upgradeImg7').style.display == 'block') {
    document.getElementById('upgradeImg7').style.display = 'none';
  }
  else {
    document.getElementById('upgradeImg7').style.opacity= "0.33";
  }
}
function HiddenImg8() {
  if (document.getElementById('upgradeImg8').style.display == 'block') {
    document.getElementById('upgradeImg8').style.display = 'none';
  }
  else {
    document.getElementById('upgradeImg8').style.opacity= "0.33";
  }
}
function HiddenImg9() {
  if (document.getElementById('upgradeImg9').style.display == 'block') {
    document.getElementById('upgradeImg9').style.display = 'none';
  }
  else {
    document.getElementById('upgradeImg9').style.opacity= "0.33";
  }
}
function HiddenImg10() {
  if (document.getElementById('upgradeImg10').style.display == 'block') {
    document.getElementById('upgradeImg10').style.display = 'none';
  }
  else {
    document.getElementById('upgradeImg10').style.opacity= "0.33";
  }
}
function HiddenImg11() {
  if (document.getElementById('upgradeImg11').style.display == 'block') {
    document.getElementById('upgradeImg11').style.display = 'none';
  }
  else {
    document.getElementById('upgradeImg11').style.opacity= "0.33";
  }
}
function HiddenImg12() {
  if (document.getElementById('upgradeImg12').style.display == 'block') {
    document.getElementById('upgradeImg12').style.display = 'none';
  }
  else {
    document.getElementById('upgradeImg12').style.opacity= "0.33";
  }
}
/////////////////////////////////////////////////////////Description when hover on upgrade///////////////////////////////////////////////////////////////////
const elementToHover1 = document.getElementById('upgradeImg1');
const floatingWindow1 = document.getElementById('desc1');

elementToHover1.addEventListener('mouseover', function(event) {
    floatingWindow1.style.display = 'block';
});

elementToHover1.addEventListener('mousemove', function(event) {
    const offsetX = -290;
    const offsetY = 20; 
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    
    floatingWindow1.style.left = (mouseX + offsetX) + 'px';
    floatingWindow1.style.top = (mouseY + offsetY) + 'px';
});

elementToHover1.addEventListener('mouseout', function(event) {
    floatingWindow1.style.display = 'none';
});

const elementToHover2 = document.getElementById('upgradeImg2');
const floatingWindow2 = document.getElementById('desc2');

elementToHover2.addEventListener('mouseover', function(event) {
    floatingWindow2.style.display = 'block';
});

elementToHover2.addEventListener('mousemove', function(event) {
  const offsetX = -290;
  const offsetY = 20;
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    
    floatingWindow2.style.left = (mouseX + offsetX) + 'px';
    floatingWindow2.style.top = (mouseY + offsetY) + 'px';
});

elementToHover2.addEventListener('mouseout', function(event) {
    floatingWindow2.style.display = 'none';
});

const elementToHover3 = document.getElementById('upgradeImg3');
const floatingWindow3 = document.getElementById('desc3');

elementToHover3.addEventListener('mouseover', function(event) {
    floatingWindow3.style.display = 'block';
});

elementToHover3.addEventListener('mousemove', function(event) {
  const offsetX = -290;
  const offsetY = 20; 
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    
    floatingWindow3.style.left = (mouseX + offsetX) + 'px';
    floatingWindow3.style.top = (mouseY + offsetY) + 'px';
});

elementToHover3.addEventListener('mouseout', function(event) {
    floatingWindow3.style.display = 'none';
});

const elementToHover4 = document.getElementById('upgradeImg4');
const floatingWindow4 = document.getElementById('desc4');

elementToHover4.addEventListener('mouseover', function(event) {
    floatingWindow4.style.display = 'block';
});

elementToHover4.addEventListener('mousemove', function(event) {
  const offsetX = -290;
  const offsetY = 20;
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    
    floatingWindow4.style.left = (mouseX + offsetX) + 'px';
    floatingWindow4.style.top = (mouseY + offsetY) + 'px';
});

elementToHover4.addEventListener('mouseout', function(event) {
    floatingWindow4.style.display = 'none';
});

const elementToHover5 = document.getElementById('upgradeImg5');
const floatingWindow5 = document.getElementById('desc5');

elementToHover5.addEventListener('mouseover', function(event) {
    floatingWindow5.style.display = 'block';
});

elementToHover5.addEventListener('mousemove', function(event) {
  const offsetX = -290;
  const offsetY = 20;
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    
    floatingWindow5.style.left = (mouseX + offsetX) + 'px';
    floatingWindow5.style.top = (mouseY + offsetY) + 'px';
});

elementToHover5.addEventListener('mouseout', function(event) {
    floatingWindow5.style.display = 'none';
});

const elementToHover6 = document.getElementById('upgradeImg6');
const floatingWindow6 = document.getElementById('desc6');

elementToHover6.addEventListener('mouseover', function(event) {
    floatingWindow6.style.display = 'block';
});

elementToHover6.addEventListener('mousemove', function(event) {
  const offsetX = -290;
  const offsetY = 20;
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    
    floatingWindow6.style.left = (mouseX + offsetX) + 'px';
    floatingWindow6.style.top = (mouseY + offsetY) + 'px';
});

elementToHover6.addEventListener('mouseout', function(event) {
    floatingWindow6.style.display = 'none';
});

const elementToHover7 = document.getElementById('upgradeImg7');
const floatingWindow7 = document.getElementById('desc7');

elementToHover7.addEventListener('mouseover', function(event) {
    floatingWindow7.style.display = 'block';
});

elementToHover7.addEventListener('mousemove', function(event) {
    const offsetX = -290;
    const offsetY = 20;
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    
    floatingWindow7.style.left = (mouseX + offsetX) + 'px';
    floatingWindow7.style.top = (mouseY + offsetY) + 'px';
});

elementToHover7.addEventListener('mouseout', function(event) {
    floatingWindow7.style.display = 'none';
});

const elementToHover8 = document.getElementById('upgradeImg8');
const floatingWindow8 = document.getElementById('desc8');

elementToHover8.addEventListener('mouseover', function(event) {
    floatingWindow8.style.display = 'block';
});

elementToHover8.addEventListener('mousemove', function(event) {
  const offsetX = -290;
  const offsetY = 20;
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    
    floatingWindow8.style.left = (mouseX + offsetX) + 'px';
    floatingWindow8.style.top = (mouseY + offsetY) + 'px';
});

elementToHover8.addEventListener('mouseout', function(event) {
    floatingWindow8.style.display = 'none';
});

const elementToHover9 = document.getElementById('upgradeImg9');
const floatingWindow9 = document.getElementById('desc9');

elementToHover9.addEventListener('mouseover', function(event) {
    floatingWindow9.style.display = 'block';
});

elementToHover9.addEventListener('mousemove', function(event) {
  const offsetX = -290;
  const offsetY = 20;
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    
    floatingWindow9.style.left = (mouseX + offsetX) + 'px';
    floatingWindow9.style.top = (mouseY + offsetY) + 'px';
});

elementToHover9.addEventListener('mouseout', function(event) {
    floatingWindow9.style.display = 'none';
});

const elementToHover10 = document.getElementById('upgradeImg10');
const floatingWindow10 = document.getElementById('desc10');

elementToHover10.addEventListener('mouseover', function(event) {
    floatingWindow10.style.display = 'block';
});

elementToHover10.addEventListener('mousemove', function(event) {
  const offsetX = -290;
  const offsetY = 20;
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    
    floatingWindow10.style.left = (mouseX + offsetX) + 'px';
    floatingWindow10.style.top = (mouseY + offsetY) + 'px';
});

elementToHover10.addEventListener('mouseout', function(event) {
    floatingWindow10.style.display = 'none';
});

const elementToHover11 = document.getElementById('upgradeImg11');
const floatingWindow11 = document.getElementById('desc11');

elementToHover11.addEventListener('mouseover', function(event) {
    floatingWindow11.style.display = 'block';
});

elementToHover11.addEventListener('mousemove', function(event) {
  const offsetX = -290;
  const offsetY = 20;
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    
    floatingWindow11.style.left = (mouseX + offsetX) + 'px';
    floatingWindow11.style.top = (mouseY + offsetY) + 'px';
});

elementToHover11.addEventListener('mouseout', function(event) {
    floatingWindow11.style.display = 'none';
});

const elementToHover12 = document.getElementById('upgradeImg12');
const floatingWindow12 = document.getElementById('desc12');

elementToHover12.addEventListener('mouseover', function(event) {
    floatingWindow12.style.display = 'block';
});

elementToHover12.addEventListener('mousemove', function(event) {
  const offsetX = -290;
  const offsetY = 20;
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    
    floatingWindow12.style.left = (mouseX + offsetX) + 'px';
    floatingWindow12.style.top = (mouseY + offsetY) + 'px';
});

elementToHover12.addEventListener('mouseout', function(event) {
    floatingWindow12.style.display = 'none';
});

/*music on clisk in any upgrade or autocliker */
document.addEventListener("DOMContentLoaded", function() {
  addClickListener(".upgrades");
});

function addClickListener(selector) {
  let elements = document.querySelectorAll(selector);
  elements.forEach(function(element) {
    element.addEventListener("click", function() {
      let audio = document.getElementById("audio");
      audio.play();
      if (music.muted) {
        audio.muted = true;
      } else {
        audio.muted = false;
      }
    });
  });
}