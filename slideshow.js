let slideIndex = 1;
let autoSlideInterval;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
  resetAutoSlide();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
  resetAutoSlide();
}

function autoShowSlides() {
  slideIndex++;
  showSlides(slideIndex);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoShowSlides, 2000);
}

// Initialize
showSlides(slideIndex);
autoSlideInterval = setInterval(autoShowSlides, 2000);

