var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

function nextPedal()
{

  var model = document.getElementById("model");
  if (model.src == "../../assets/models/Pedal1.glb") {
    model.src="../../assets/models/Pedal2.glb";
  } else if (model.src == "../../assets/models/Pedal2.glb"){
    model.src="../../assets/models/Pedal3.glb";
  } else if (model.src == "../../assets/models/Pedal3.glb"){
    model.src="../../assets/models/Pedal3S.glb";
  } else if (model.src == "../../assets/models/Pedal3S.glb"){
    model.src="../../assets/models/Pedal4.glb";
  } else if (model.src == "../../assets/models/Pedal4.glb"){
    model.src="../../assets/models/Pedal1.glb";
  }

  return false;
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  if (slides[slideIndex-1] != undefined) {
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
}
