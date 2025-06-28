function toggleMenu() {
  var links = document.getElementById("nav-links");
  links.classList.toggle("show");
}

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});


