/* ==========================================
   PRETTY BRIDAL MAKEOVER
   MAIN JAVASCRIPT
========================================== */

"use strict";

/* ==========================
   Sticky Navbar
========================== */

const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("sticky");

    }

    else{

        navbar.classList.remove("sticky");

    }

});

/* ==========================
   Smooth Scroll
========================== */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================
   Scroll To Top Button
========================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="scroll-top";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================
   Reveal Animation
========================== */

const hiddenElements=document.querySelectorAll(".hidden");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el=>{

    observer.observe(el);

});

/* ==========================
   Active Navigation
========================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/* ==========================
   Button Hover Ripple
========================== */

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.classList.add("pulse");

    });

    btn.addEventListener("mouseleave",()=>{

        btn.classList.remove("pulse");

    });

});

/* ==========================
   Counter Animation Trigger
========================== */

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter=entry.target;

            const target=+counter.dataset.target;

            let count=0;

            const speed=target/100;

            const update=()=>{

                count+=speed;

                if(count<target){

                    counter.innerText=Math.floor(count);

                    requestAnimationFrame(update);

                }

                else{

                    counter.innerText=target;

                }

            }

            update();

        }

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

/* ==========================
   Loading Screen
========================== */

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader");

    if(loader){

        loader.style.display="none";

    }

});

/* ==========================
   Contact Form Validation
========================== */

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=this.querySelector('input[type="text"]');

const phone=this.querySelector('input[type="tel"]');

if(name.value.trim()===""){

alert("Please enter your name.");

name.focus();

return;

}

if(phone.value.trim()===""){

alert("Please enter your phone number.");

phone.focus();

return;

}

alert("Appointment Request Submitted Successfully!");

form.reset();

});

}

/* ==========================
   Floating WhatsApp
========================== */

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/919677047720";

whatsapp.target="_blank";

whatsapp.className="whatsapp-btn";

whatsapp.innerHTML="💬";

document.body.appendChild(whatsapp);

/* ==========================
   Console Message
========================== */

console.log("Pretty Bridal Makeover Website Loaded Successfully.");