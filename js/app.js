const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');
const date = document.querySelector('#date');
// add fixed class to navbar
window.addEventListener('scroll', function () {
  // navbar height = 5rem*16px = 80
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});
// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
});
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});
// set year
date.innerHTML = new Date().getFullYear();

// typewriter effect
function typeWriter(el) {
  const textArray = el.innerHTML.split('');
  el.innerHTML = '';
  textArray.forEach((letter, i) =>
    setTimeout(() => (el.innerHTML += letter), 95 * i)
  );
  setInterval(() => typeWriter(el), 8000);
}

typeWriter(elementTw);
