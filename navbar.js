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

window.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname; // e.g. "/pages/about"
  const navLinks = document.querySelectorAll("#nav-links a");

  navLinks.forEach(link => {
    // remove old activated class
    link.classList.remove("activated");

    // simple match: if link href is inside current path
    if (currentPath.includes(link.getAttribute("href"))) {
      link.classList.add("activated");
    }
  });
});


