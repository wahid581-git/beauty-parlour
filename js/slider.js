/* ==========================================
   PRETTY BRIDAL MAKEOVER
   SLIDER.JS
========================================== */

"use strict";

/* ==========================
   Testimonial Slider
========================== */

const slides = document.querySelectorAll(".testimonial-slide");
const nextBtn = document.querySelector(".next-slide");
const prevBtn = document.querySelector(".prev-slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide)=>{

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

if(slides.length > 0){

    showSlide(currentSlide);

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}

if(nextBtn){

    nextBtn.addEventListener("click", nextSlide);

}

if(prevBtn){

    prevBtn.addEventListener("click", prevSlide);

}

/* ==========================
   Auto Slide
========================== */

if(slides.length > 1){

    setInterval(nextSlide,5000);

}

/* ==========================
   Touch Swipe Support
========================== */

let startX = 0;

const slider = document.querySelector(".testimonial-slider");

if(slider){

slider.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

slider.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX-endX>50){

        nextSlide();

    }

    if(endX-startX>50){

        prevSlide();

    }

});

}

/* ==========================
   Hero Background Slider
========================== */

const heroImages = [

    "images/hero1.jpg",

    "images/hero2.jpg",

    "images/hero3.jpg",

    "images/hero4.jpg"

];

const hero = document.querySelector(".hero");

let heroIndex = 0;

function changeHeroBackground(){

    if(hero){

        hero.style.backgroundImage =

        `linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url('${heroImages[heroIndex]}')`;

        hero.style.backgroundSize = "cover";

        hero.style.backgroundPosition = "center";

        hero.style.transition = "1s";

        heroIndex++;

        if(heroIndex>=heroImages.length){

            heroIndex=0;

        }

    }

}

changeHeroBackground();

setInterval(changeHeroBackground,6000);

/* ==========================
   Console
========================== */

console.log("Slider Loaded Successfully");