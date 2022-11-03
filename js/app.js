const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');
const skillSection = document.querySelector('#skills');
const projectSection = document.querySelector('#projects');
const skillsNavLink = document.querySelector('.skills-scroll');
const projectsNavlink = document.querySelector('.projects-scroll');
const date = document.querySelector('#date');

const navHeight = navbar.getBoundingClientRect().height;

// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.pageYOffset > navHeight) {
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

// remove sidebar when a link is clicked on
sidebar.addEventListener('click', (e) => {
  if (e.target.closest('.sidebar-links') || e.target.closest('.social-icons')) {
    sidebar.classList.remove('show-sidebar');
  }
});

// when page is scrolled to projects section, fixed navbar is always there => we always need to remove the navbar height
// when the navbar is not fixed, we only need to subtract the navbar height once
// but when the navbar is fixed, it's removed from the document flow => we need to subtract it again => twice (first is for the fixed nav and second is for the actual nav which has been removed from the flow)
const scrollToSection = (section) => {
  const sectionCoords = section.getBoundingClientRect();
  console.log(sectionCoords);
  let position = sectionCoords.top + window.scrollY - navHeight;
  const isNavFixed = document.querySelector('.navbar-fixed');
  if (!isNavFixed) {
    position = position - navHeight;
  }
  window.scrollTo({
    left: sectionCoords.left + window.scrollX,
    top: position,
    behavior: 'smooth',
  });
};

skillsNavLink.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection(skillSection);
  // const skillsCoords = skillSection.getBoundingClientRect();
  // console.log(skillsCoords);
  // let position = skillsCoords.top + window.scrollY - navHeight;
  // const isNavFixed = document.querySelector('.navbar-fixed');
  // if (!isNavFixed) {
  //   position = position - navHeight;
  // }
  // window.scrollTo({
  //   left: skillsCoords.left + window.scrollX,
  //   top: position,
  //   behavior: 'smooth',
  // });
});

projectsNavlink.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection(projectSection);
});

const skillSidebar = document.querySelector('.skills-sidebar');
const projectSidebar = document.querySelector('.projects-sidebar');

skillSidebar.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection(skillSection);
});

projectSidebar.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection(projectSection);
});

// set year
date.innerHTML = new Date().getFullYear();

// typewriter effect
// function typeWriter(el) {
//   const textArray = el.innerHTML.split('');
//   el.innerHTML = '';
//   textArray.forEach((letter, i) =>
//     setTimeout(() => (el.innerHTML += letter), 95 * i)
//   );
//   setInterval(() => typeWriter(el), 8000);
// }

// typeWriter(elementTw);
