/* ==========================================
   PRETTY BRIDAL MAKEOVER
   BOOKING.JS
========================================== */

"use strict";

/* ==========================
   Appointment Form
========================== */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name");
        const phone = document.getElementById("phone");
        const email = document.getElementById("email");
        const service = document.getElementById("service");
        const date = document.getElementById("date");
        const time = document.getElementById("time");
        const message = document.getElementById("message");

        if (name.value.trim() === "") {

            alert("Please enter your name.");
            name.focus();
            return;

        }

        const phoneRegex = /^[6-9]\d{9}$/;

        if (!phoneRegex.test(phone.value.trim())) {

            alert("Please enter a valid 10-digit mobile number.");
            phone.focus();
            return;

        }

        if (email.value.trim() !== "") {

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email.value.trim())) {

                alert("Please enter a valid email address.");
                email.focus();
                return;

            }

        }

        if (service.value === "") {

            alert("Please select a service.");
            service.focus();
            return;

        }

        if (date.value === "") {

            alert("Please choose an appointment date.");
            date.focus();
            return;

        }

        if (time.value === "") {

            alert("Please choose an appointment time.");
            time.focus();
            return;

        }

        alert(
            "🎉 Thank you, " +
            name.value +
            "!\n\nYour appointment request has been submitted successfully.\n\nWe will contact you shortly."
        );

        bookingForm.reset();

    });

}

/* ==========================
   Disable Past Dates
========================== */

const dateInput = document.getElementById("date");

if (dateInput) {

    const today = new Date().toISOString().split("T")[0];

    dateInput.setAttribute("min", today);

}

/* ==========================
   Character Counter
========================== */

const messageBox = document.getElementById("message");

if (messageBox) {

    const counter = document.createElement("small");

    counter.style.display = "block";
    counter.style.marginTop = "8px";
    counter.innerHTML = "0 / 300";

    messageBox.parentNode.appendChild(counter);

    messageBox.addEventListener("input", () => {

        let length = messageBox.value.length;

        if (length > 300) {

            messageBox.value = messageBox.value.substring(0, 300);

            length = 300;

        }

        counter.innerHTML = length + " / 300";

    });

}

/* ==========================
   Service Price Preview
========================== */

const serviceSelect = document.getElementById("service");

const prices = {

    "Hydra Facial":"₹2,499",

    "Bridal Makeup":"₹12,999",

    "Hair Spa":"₹1,299",

    "Hair Coloring":"₹2,999",

    "Keratin Treatment":"₹4,999",

    "Cleanup":"₹899"

};

if (serviceSelect) {

    const priceText = document.createElement("p");

    priceText.style.marginTop = "10px";
    priceText.style.fontWeight = "600";

    serviceSelect.parentNode.appendChild(priceText);

    serviceSelect.addEventListener("change", () => {

        const selected = serviceSelect.value;

        if (prices[selected]) {

            priceText.innerHTML = "Estimated Price: " + prices[selected];

        } else {

            priceText.innerHTML = "";

        }

    });

}

/* ==========================
   Console
========================== */

console.log("Booking Module Loaded Successfully");