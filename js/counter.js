/* ==========================================
   PRETTY BRIDAL MAKEOVER
   COUNTER.JS
========================================== */

"use strict";

/* ==========================
   Animated Counter
========================== */

const counters = document.querySelectorAll(".counter");

const speed = 200;

function animateCounter(counter){

    const target = Number(counter.dataset.target);

    let count = 0;

    const increment = target / speed;

    function update(){

        count += increment;

        if(count < target){

            counter.innerText = Math.ceil(count);

            requestAnimationFrame(update);

        }

        else{

            counter.innerText = target;

        }

    }

    update();

}

/* ==========================
   Run Counter on Scroll
========================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            animateCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

},{

    threshold:0.5

});

counters.forEach(counter => {

    observer.observe(counter);

});

/* ==========================
   Plus Sign Support
========================== */

document.querySelectorAll(".counter-plus").forEach(counter=>{

    const target = Number(counter.dataset.target);

    let value = 0;

    const increment = target / speed;

    function update(){

        value += increment;

        if(value < target){

            counter.innerHTML = Math.ceil(value) + "+";

            requestAnimationFrame(update);

        }

        else{

            counter.innerHTML = target + "+";

        }

    }

    const plusObserver = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                update();

                plusObserver.unobserve(counter);

            }

        });

    });

    plusObserver.observe(counter);

});

/* ==========================
   Percentage Counter
========================== */

document.querySelectorAll(".counter-percent").forEach(counter=>{

    const target = Number(counter.dataset.target);

    let value = 0;

    const increment = target / speed;

    function update(){

        value += increment;

        if(value < target){

            counter.innerHTML = Math.ceil(value) + "%";

            requestAnimationFrame(update);

        }

        else{

            counter.innerHTML = target + "%";

        }

    }

    const percentObserver = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                update();

                percentObserver.unobserve(counter);

            }

        });

    });

    percentObserver.observe(counter);

});

/* ==========================
   Statistics Cards Hover
========================== */

document.querySelectorAll(".stats-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform = "translateY(0px)";

    });

});

/* ==========================
   Console
========================== */

console.log("Counter Animation Loaded Successfully");