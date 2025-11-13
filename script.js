// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Button click handlers
const ctaButton = document.querySelector('.btn-cta');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        alert('Welcome to the User Roles Management System! This is a demo from Figma design.');
    });
}

const contactButton = document.querySelector('.btn-secondary');
if (contactButton) {
    contactButton.addEventListener('click', function() {
        alert('Contact feature coming soon! This project was built from Figma design.');
    });
}

// Add active state to navigation on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Console log for project info
console.log('%c🎨 Landing Page built from Figma Design', 'color: #667eea; font-size: 16px; font-weight: bold');
console.log('%cUser Roles Management System - Version 60', 'color: #764ba2; font-size: 14px');
console.log('%cFeatures: Role Assignment, Real-time Updates, Visual Feedback', 'color: #333; font-size: 12px');
