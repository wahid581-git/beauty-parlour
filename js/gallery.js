/* ==========================================
   PRETTY BRIDAL MAKEOVER
   GALLERY.JS
========================================== */

"use strict";

/* ==========================
   Image Lightbox
========================== */

const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

const lightboxImage = document.createElement("img");

lightbox.appendChild(lightboxImage);
document.body.appendChild(lightbox);

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

/* ==========================
   Gallery Hover Zoom
========================== */

galleryImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.05)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

/* ==========================
   Lazy Loading Images
========================== */

const lazyImages = document.querySelectorAll("img[data-src]");

const lazyObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const img = entry.target;

            img.src = img.dataset.src;

            img.removeAttribute("data-src");

            lazyObserver.unobserve(img);

        }

    });

});

lazyImages.forEach(img => {

    lazyObserver.observe(img);

});

/* ==========================
   Gallery Filter
========================== */

const filterButtons = document.querySelectorAll(".filter-btn");

const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(item => {

            if (filter === "all") {

                item.style.display = "block";

            }

            else if (item.classList.contains(filter)) {

                item.style.display = "block";

            }

            else {

                item.style.display = "none";

            }

        });

    });

});

/* ==========================
   Keyboard Navigation
========================== */

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        lightbox.classList.remove("active");

    }

});

/* ==========================
   Console
========================== */

console.log("Gallery Loaded Successfully");