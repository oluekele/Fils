const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const aboutUs = document.querySelector('#about');

const aboutBtn = document.querySelector('#aboutbtn');

menu.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

aboutUs.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'about.html';
  console.log('about.html clicked');
  aboutUs.classList.toggle('action');
});
aboutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'about.html';
  console.log('about.html clicked');
});

