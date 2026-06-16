// Mobile Navbar

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText.replace("+","") || 0;

        const increment = target / 100;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        }else{

            counter.innerText = target;

        }
    };

    updateCounter();
});

// Contact Form

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Message Sent Successfully!");

        contactForm.reset();

    });

}

// Volunteer Form

const volunteerForm = document.getElementById("volunteerForm");

if(volunteerForm){

    volunteerForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Volunteer Registration Successful!");

        volunteerForm.reset();

    });

}

// Donation Form

const donationForm = document.getElementById("donationForm");

if(donationForm){

    donationForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank You For Your Donation!");

        donationForm.reset();

    });

}

// Gallery Lightbox

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close-btn");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        if(lightbox && lightboxImg){
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        }

    });

});

if(closeBtn){

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

// Image Slider

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");

    if(slides.length > 0){

        let current = 0;

        setInterval(() => {

            slides[current].classList.remove("active");

            current = (current + 1) % slides.length;

            slides[current].classList.add("active");

        }, 3000);

    }

});