const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const serviceBtn = document.querySelector('#servicebtn');
const service = document.querySelector('#services');

menu.addEventListener('click', function(){
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

service.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'service.html';
  console.log('service.html clicked');
});
serviceBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'service.html';
  console.log('service.html clicked');
});

