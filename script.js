 // Mobile Menu Toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');

        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                navLinks.classList.remove('active');
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Form Submission
        const contactForm = document.querySelector('.contact-form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });

        // Animate skills on scroll
        const skillBars = document.querySelectorAll('.skill-progress');
        const aboutSection = document.querySelector('#about');

        const animateSkillBars = () => {
            const sectionPosition = aboutSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (sectionPosition < screenPosition) {
                skillBars.forEach(bar => {
                    const width = bar.parentElement.previousElementSibling.lastElementChild.textContent;
                    bar.style.width = width;
                });
            }
        };

        window.addEventListener('scroll', animateSkillBars);