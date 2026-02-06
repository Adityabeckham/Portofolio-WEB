
console.log('%c Hello Everyone! ', 
  'background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;');

// ========== Preloader ==========
const audio = document.getElementById("audioPlayer");
const loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
  document.querySelector('.hey').classList.add('popup');
});

// ========== Settings Toggle ==========
function settingtoggle() {
  document.getElementById("setting-container").classList.toggle('settingactivate');
  document.getElementById("visualmodetogglebuttoncontainer").classList.toggle('visualmodeshow');
  document.getElementById("soundtogglebuttoncontainer").classList.toggle('soundmodeshow');
}

// ========== Audio Play/Pause ==========
function playpause() {
  const soundSwitch = document.getElementById('switchforsound');
  soundSwitch.checked ? audio.play() : audio.pause();
}

// ========== Visual Mode Toggle (Dark/Light) ==========
function visualmode() {
  document.body.classList.toggle('light-mode');
  document.querySelectorAll('.needtobeinvert').forEach(element => {
    element.classList.toggle('invertapplied');
  });
}

// ========== Mobile Menu Toggle ==========
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
  document.body.classList.remove("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// ========== Active Tab on Scroll ==========
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar .navbar-tabs .navbar-tabs-ul li');
const mobilenavLi = document.querySelectorAll('.mobiletogglemenu .mobile-navbar-tabs-ul li');

window.addEventListener('scroll', () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  mobilenavLi.forEach(li => {
    li.classList.toggle('activeThismobiletab', li.classList.contains(current));
  });

  navLi.forEach(li => {
    li.classList.toggle('activeThistab', li.classList.contains(current));
  });
});

// ========== Back to Top Button ==========
const mybutton = document.getElementById("backtotopbutton");

window.onscroll = () => scrollFunction();

function scrollFunction() {
  const show = document.body.scrollTop > 400 || document.documentElement.scrollTop > 400;
  mybutton.style.display = show ? "block" : "none";
}

function scrolltoTopfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ========== Right-click Block on Images ==========
document.addEventListener("contextmenu", function (e) {
  if (e.target.nodeName === "IMG") {
    e.preventDefault();
  }
}, false);

// ========== Pupil Eye Follow Cursor ==========
const Pupils = document.getElementsByClassName('footer-pupil');
const pupilsArr = Array.from(Pupils);

let pupilStartPoint = -10;
let pupilRangeX = 20;
let pupilRangeY = 15;

let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let mouseXRange = mouseXEndPoint - mouseXStartPoint;

let mouseYEndPoint = window.innerHeight;

function mouseMove(event) {
  const currentX = event.clientX - mouseXStartPoint;
  const fracX = currentX / mouseXRange;

  const currentY = event.clientY;
  const fracY = currentY / mouseYEndPoint;

  const pupilX = pupilStartPoint + (fracX * pupilRangeX);
  const pupilY = pupilStartPoint + (fracY * pupilRangeY);

  pupilsArr.forEach(pupil => {
    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
}

function windowResize() {
  mouseXEndPoint = window.innerWidth;
  mouseYEndPoint = window.innerHeight;
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
}

window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);
