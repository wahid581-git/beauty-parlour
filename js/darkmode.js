/* ==========================================
   PRETTY BRIDAL MAKEOVER
   DARKMODE.JS
========================================== */

"use strict";

/* ==========================
   Dark Mode Toggle
========================== */

const darkModeToggle = document.querySelector(".dark-mode-toggle");
const body = document.body;

/* ==========================
   Load Saved Theme
========================== */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    body.setAttribute("data-theme", "dark");

    if (darkModeToggle) {

        darkModeToggle.innerHTML = "☀️";

    }

} else {

    body.setAttribute("data-theme", "light");

    if (darkModeToggle) {

        darkModeToggle.innerHTML = "🌙";

    }

}

/* ==========================
   Toggle Theme
========================== */

if (darkModeToggle) {

    darkModeToggle.addEventListener("click", () => {

        if (body.getAttribute("data-theme") === "dark") {

            body.setAttribute("data-theme", "light");

            localStorage.setItem("theme", "light");

            darkModeToggle.innerHTML = "🌙";

        } else {

            body.setAttribute("data-theme", "dark");

            localStorage.setItem("theme", "dark");

            darkModeToggle.innerHTML = "☀️";

        }

    });

}

/* ==========================
   Detect System Preference
========================== */

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

if (!savedTheme) {

    if (prefersDark.matches) {

        body.setAttribute("data-theme", "dark");

        if (darkModeToggle) {

            darkModeToggle.innerHTML = "☀️";

        }

    }

}

/* ==========================
   Listen for System Changes
========================== */

prefersDark.addEventListener("change", (e) => {

    if (!localStorage.getItem("theme")) {

        if (e.matches) {

            body.setAttribute("data-theme", "dark");

            if (darkModeToggle) {

                darkModeToggle.innerHTML = "☀️";

            }

        } else {

            body.setAttribute("data-theme", "light");

            if (darkModeToggle) {

                darkModeToggle.innerHTML = "🌙";

            }

        }

    }

});

/* ==========================
   Console
========================== */

console.log("Dark Mode Loaded Successfully");