function togglePopup1 () {
    let popup = document.querySelector(".how-to-play");
    popup.classList.toggle("open");
}
function togglePopup2 () {
    let popup = document.querySelector(".who-are-we");
    popup.classList.toggle("open");
}

let nombreClics = 0;

function comptage() {
  nombreClics++;
  document.getElementById("nombreClics").textContent   = nombreClics;
}

document.getElementById("boutonClic").addEventListener("click", comptage);

// debut carroussel
window.onload = function () { 
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
};
