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
  numberClicks++;
  document.getElementById("numberClicks").textContent = numberClicks;

}

document.getElementById("boutonClic").addEventListener("click", comptage);

// fin du clic croissant

//debut des upgrade clic
let nombreClicsUpgradeImg = 0;

function increaseTheValueBy1000() {
  if ( "nombreClics" === 1000){
	"nombreClics"="nombreClics"+10
  };
  document.getElementById("nombreClicsUpgradeImg").textContent = nombreClics;
}
document.getElementById("upgradeImg1").addEventListener("click", increaseTheValueBy1000);
// debut carroussel
/*window.onload = function () { 
	let slides = 
		document.getElementsByClassName('carousel-item'); 

	function addActive(slide) { 
		slide.classList.add('active'); 
	} 

	function removeActive(slide) { 
		slide.classList.remove('active'); 
	} 

	addActive(slides[0]); 
	setInterval(function () { 
		for (let i = 0; i < slides.length; i++) { 
			if (i + 1 == slides.length) { 
				addActive(slides[0]); 
				setTimeout(removeActive, 350, slides[i]); 
				break; 
			} 
			if (slides[i].classList.contains('active')) { 
				setTimeout(removeActive, 350, slides[i]); 
				addActive(slides[i + 1]); 
				break; 
			} 
		} 
	}, 1500); 
};*/

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

setInterval(() => {
    document.getElementById("numberClicks").textContent = numberClicks += prodAutoClicker1;
}, 1000);

