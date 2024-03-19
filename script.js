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
/*clic croissant*/
let nombreClics = 0;

function comptage() {
  nombreClics++;
  document.getElementById("nombreClics").textContent   = nombreClics;
}

document.getElementById("boutonClic").addEventListener("click", comptage);
/*fin clic croissant*/

/*autocliker*/

let prodAutoClicker1 = 0;
let lvlAutoclicker1 = 0;
let costAutoclicker1 = 0;

function upValueAutoClicker1(){
  prodAutoClicker1++;
  lvlAutoclicker1++;
  costAutoclicker1++;
  document.getElementById("prodAutoClicker1").textContent = prodAutoClicker1;
  document.getElementById("lvlAutoclicker1").textContent = lvlAutoclicker1;
  document.getElementById("costAutoclicker1").textContent = costAutoclicker1;
}

document.getElementById("autoClicker1").addEventListener("click", upValueAutoClicker1);


// function activeAutoClick(prodAutoclicker1){

// }
// let timerId = setTimeout(), 100;
// onclick setTimout(comptage(valeur prodAutoclicker1), 100);