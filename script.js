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

var nombreClics = 0;

function comptage() {
  nombreClics++;
  document.getElementById("nombreClics").textContent   = nombreClics;
}

document.getElementById("boutonClic").addEventListener("click", comptage);