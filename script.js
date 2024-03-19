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
/*clic croissant*/
let numberClicks = 0;

function comptage() {
  numberClicks++;
  document.getElementById("numberClicks").textContent = numberClicks;
}

document.getElementById("boutonClic").addEventListener("click", comptage);
/*fin clic croissant*/

/*autocliker*/

let prodAutoClicker1 = 0;
let lvlAutoclicker1 = 0;
let costAutoclicker1 = 1;

function upValueAutoClicker1() {
  prodAutoClicker1++;
  lvlAutoclicker1++;
  document.getElementById("numberClicks").textContent = (numberClicks-= costAutoclicker1);
  costAutoclicker1 += 2;
  document.getElementById("prodAutoClicker1").textContent = prodAutoClicker1;
  document.getElementById("lvlAutoclicker1").textContent = lvlAutoclicker1;
  document.getElementById("costAutoclicker1").textContent = costAutoclicker1;
}
document.getElementById("autoClicker1").addEventListener("click", upValueAutoClicker1);


setInterval(() => {
    document.getElementById("numberClicks").textContent = numberClicks += prodAutoClicker1;
}, 1000);
