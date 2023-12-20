

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const aboutUs = document.querySelector('#about');
const contactUs = document.querySelector('#contact');
const service = document.querySelector('#services');
const home = document.querySelector('#home');



home.addEventListener('click', (e) => {
    e.preventDefault();
    
    window.location.href = 'index.html';
    console.log('about.html clicked');
});
aboutUs.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'about.html';
    console.log('about.html clicked');
});

contactUs.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'contact.html';
    console.log('contact.html clicked');
});
service.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'service.html';
    console.log('service.html clicked');
});



menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function sendMail(){
    
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    const serviceId = "service_07ucsby";
    const templateId = "template_zrrbt3k"; 

    emailjs.send(serviceId, templateId, params)
    .then((respond) =>{
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";

        console.log(respond);
        alert('Message sent successfully')
    })
    .catch((error) =>{
        console.log('FAILED...', error);
      })
    
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("homecontentslide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" native", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " native";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
