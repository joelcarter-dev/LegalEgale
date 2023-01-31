
//Logo toggle  on scroll
const logo = document.querySelector("#logo");
const nav = document.querySelector("nav");
const navList = document.getElementById("nav-list");

//nav effect on scroll
logo.style.backgroundImage = 'url(../assets/icons/LegalEagles.svg)';
nav.style.backgroundColor = "";
logo.style.fill = "white";
logo.style.marginTop = "-30px";

window.onscroll = function() {
  if (navList.classList.contains('active')) {
    return;
  }
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    logo.style.backgroundImage = 'url(../assets/icons/Group5.svg)';
    nav.style.backgroundColor = "black";
    //navList.style.backgroundColor = "black";
  } else {
    logo.style.backgroundImage = 'url(../assets/icons/LegalEagles.svg)';
    nav.style.backgroundColor = "";
  }
};

//menu
function toggleNav() {
  navList.classList.toggle("active");
  if (navList.classList.contains('active')) {
    nav.style.backgroundColor = "black";
    navList.style.backgroundColor = "black";
  } else {
    navList.style.backgroundColor = "";
    nav.style.backgroundColor = "";
  }
}


//Attempt at a fade out effect on cards leaving the viewport. Almost there, didn't want to take too long.
const news = document.querySelector('.news');
const cards = document.querySelectorAll('.news-card');

news.addEventListener('scroll', function() {
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    let cardRight = card.offsetLeft + card.offsetWidth;
    let newsRight = news.scrollLeft + news.offsetWidth;
    let fade = (newsRight - cardRight) / 250;
    fade = fade < 0.5 ? 0.5 : fade;
    fade = fade > 1 ? 1 : fade;
    card.style.opacity = fade;
  }
});


//carousel
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const slideContents = document.querySelectorAll('.slide-content');


let currentSlide = 0;

if (slides.length) {
  //let slideInterval = setInterval(nextSlide, 5000);

  function nextSlide() {
    slides[currentSlide].classList.remove('active');
    slideContents[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    slideContents[currentSlide].classList.add('active');
  }
  nextSlide();
}