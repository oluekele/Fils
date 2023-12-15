const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const contactUs = document.querySelector('#contact');



menu.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

contactUs.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'contact.html';
  console.log('contact.html clicked');
});