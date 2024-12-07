"use strict";

const twoZeroSvg = document.getElementById("nighty-two-zero-svg");
const svgText = document.getElementById("svg-2-0-text");
const h1test = document.getElementById("h1-test");
const video = document.getElementById("nighty-two-video");

const twoZeroSection = document.getElementById("nighty-two-zero-section");
const nightyTitle = document.getElementById("nighty-two-nighty");

const sliderList = document.getElementById('slider-list');
const sliderLeftBtn = document.getElementById('slider-nighty-left');
const sliderRightBtn = document.getElementById('slider-nighty-right');

const allAnimEls = [...document.querySelectorAll('.animation-will-start')];


sliderRightBtn.addEventListener('click', () => {
  sliderList.scrollBy({
    left: 200,
    behavior: 'smooth'
  });
})
sliderLeftBtn.addEventListener('click', () => {
  sliderList.scrollBy({
    left: -200,
    behavior: 'smooth'
  });
})

let animationEnded = false;


function animateNightyTwoZero() {
  const currentScroll =
  document.documentElement.scrollTop || document.body.scrollTop;

const start = twoZeroSection.offsetTop;
const targetHeight = window.innerHeight / 2;
const targetOpacity = 1;
const targetTranslateX = (window.innerWidth > 924) ? 230 : 90;

const scrollFromTop = Math.min(currentScroll - (start - window.innerHeight + 100), targetHeight);

if (scrollFromTop <= 0) {
  window.requestAnimationFrame(animateNightyTwoZero);
  return;
}


const percent = (100 * scrollFromTop) / targetHeight;
const opacity = (Math.round(((targetOpacity * percent) / 100) * 100)) / 100;
const translateX = (targetTranslateX * percent) / 100;

nightyTitle.style.opacity = opacity;
nightyTitle.style.transform = `translateX(-${translateX}px)`;

if (percent > 40) {
  svgText.classList.add("active");
}

if(percent > 70 && animationEnded === false) {
  allAnimEls.forEach(el => el.classList.add('animate-in-nighty-two-zero'));
  animationEnded = true;
}

twoZeroSvg.style.opacity = opacity;
twoZeroSvg.style.transform = `translateX(${translateX}px)`;

if(percent === 100) {
  return;
}

window.requestAnimationFrame(animateNightyTwoZero);
}

window.requestAnimationFrame(animateNightyTwoZero);