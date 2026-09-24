// Mobile nav toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links a');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile nav when a link is clicked
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Contact form submit handler
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Skill bar scroll animation
// Fix: use the correct class names (.skill-progress-1/2/3 instead of .skill-progress)
const skillsSection = document.querySelector('#about');
const skillProgressBars = document.querySelectorAll('.skill-progress-1, .skill-progress-2, .skill-progress-3');
let skillsAnimated = false;

const animateSkills = () => {
    if (skillsAnimated) return;
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        skillProgressBars.forEach(bar => {
            // Traverse: bar -> .skill-bar -> .skill-name -> span:last-child (the % text)
            const targetWidth = bar.parentElement.previousElementSibling
                .querySelector('span:last-child').textContent;
            bar.style.width = targetWidth;
        });
        skillsAnimated = true;
        window.removeEventListener('scroll', animateSkills);
    }
};

// Fix: also check on page load in case the About section is already in view
window.addEventListener('scroll', animateSkills);
animateSkills();