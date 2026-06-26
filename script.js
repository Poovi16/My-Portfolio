// =====================================
// TYPING ANIMATION
// =====================================

const typingElement = document.getElementById("typing");

const roles = [
    "Python Developer",
    "Data Analyst",
    "Machine Learning Enthusiast",
    "AI Engineer",
    "Generative AI Learner",
    "Web Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }
    }
    else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// =====================================
// AOS ANIMATION INITIALIZATION
// =====================================

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});


// =====================================
// MOBILE MENU TOGGLE
// =====================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });
}


// =====================================
// CLOSE MENU AFTER CLICKING A LINK
// =====================================

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// =====================================
// NAVBAR SCROLL EFFECT
// =====================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding = "15px 8%";
        navbar.style.boxShadow =
            "0 8px 20px rgba(0,0,0,0.25)";

    } else {

        navbar.style.padding = "20px 8%";
        navbar.style.boxShadow = "none";

    }

});


// =====================================
// ACTIVE NAVIGATION HIGHLIGHT
// =====================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active-link");
        }

    });

});


// =====================================
// SMOOTH SCROLLING
// =====================================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =====================================
// REVEAL ELEMENTS ON SCROLL
// =====================================

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .timeline-item, .stat-card"
    );

const revealObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.2
    });

revealElements.forEach(element => {

    revealObserver.observe(element);

});


// =====================================
// CONSOLE MESSAGE
// =====================================

console.log(
    "%cPortfolio Loaded Successfully 🚀",
    "color:#38bdf8;font-size:16px;font-weight:bold;"
);

particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#38bdf8" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 2
    }
  }
});

// =====================================
// CONTACT FORM
// =====================================

const contactForm =
document.querySelector(".contact-form-card form");

if(contactForm){

    contactForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const name =
        contactForm.querySelector(
            'input[type="text"]'
        ).value.trim();

        const email =
        contactForm.querySelector(
            'input[type="email"]'
        ).value.trim();

        const message =
        contactForm.querySelector(
            'textarea'
        ).value.trim();

        if(!name || !email || !message){

            alert("Please fill all fields");
            return;
        }

        const submitBtn =
        contactForm.querySelector("button");

        submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Sending...';

        submitBtn.disabled = true;

        setTimeout(()=>{

            submitBtn.innerHTML =
            '<i class="fas fa-check"></i> Message Sent';

            submitBtn.style.background =
            "#22c55e";

            contactForm.reset();

            setTimeout(()=>{

                submitBtn.innerHTML =
                '<i class="fas fa-paper-plane"></i> Send Message';

                submitBtn.style.background = "";
                submitBtn.disabled = false;

            },2500);

        },1500);

    });

}

// =====================================
// CONTACT CARD HOVER EFFECT
// =====================================

const cards = document.querySelectorAll(
'.contact-info-card, .contact-form-card'
);

cards.forEach(card => {

    card.addEventListener('mousemove',(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.background =
        `radial-gradient(
            circle at ${x}px ${y}px,
            rgba(56,189,248,0.15),
            rgba(15,23,42,0.75) 40%
        )`;

    });

    card.addEventListener('mouseleave',()=>{

        card.style.background =
        'rgba(15,23,42,0.75)';

    });

});

// =====================================
// CONTACT SECTION REVEAL
// =====================================

const contactCards =
document.querySelectorAll(
'.contact-info-card,.contact-form-card'
);

const contactObserver =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

contactCards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition="0.8s ease";

    contactObserver.observe(card);

});

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});
