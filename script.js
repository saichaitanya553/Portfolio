 // Mobile Menu Toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        const navLinkItems = document.querySelectorAll('.nav-links a');

        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });

        // Form Submission Placeholder
        const contactForm = document.querySelector('.contact-form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });

        // Animate skills on scroll
        const skillsSection = document.querySelector('#about');
        const skillProgressBars = document.querySelectorAll('.skill-progress');

        const animateSkills = () => {
            let sectionPosition = skillsSection.getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.5;

            if (sectionPosition < screenPosition) {
                skillProgressBars.forEach(bar => {
                    const targetWidth = bar.parentElement.previousElementSibling.querySelector('span:last-child').textContent;
                    bar.style.width = targetWidth;
                });
                window.removeEventListener('scroll', animateSkills);
            }
        };

        window.addEventListener('scroll', animateSkills, { once: true });