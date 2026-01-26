// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            mobileMenuToggle?.classList.remove('active');
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }

    lastScrollTop = scrollTop;
});

// Form Submission Handler
const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Show loading state
    const submitButton = contactForm.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Simulate form submission
    setTimeout(() => {
        // Show success message
        alert('Thank you for your message! I\'ll get back to you within 24 hours.');

        // Reset form
        contactForm.reset();

        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1500);
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.video-item, .brand-item, .platform-card').forEach(el => {
    observer.observe(el);
});

// Video Placeholder Click Handler
document.querySelectorAll('.video-placeholder').forEach(placeholder => {
    placeholder.addEventListener('click', function() {
        const videoId = this.dataset.videoId;

        // Create TikTok embed or video player
        const embedHtml = `
            <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #000;">
                <p style="color: white; text-align: center; padding: 20px;">
                    Video ${videoId} would play here.<br>
                    Replace with actual TikTok embed code.
                </p>
            </div>
        `;

        this.innerHTML = embedHtml;
    });
});

// Dynamic Stats Counter Animation
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');

    stats.forEach(stat => {
        const target = stat.textContent;
        const number = parseFloat(target.replace(/[^0-9.]/g, ''));
        const suffix = target.replace(/[0-9.]/g, '');
        const increment = number / 50;
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < number) {
                stat.textContent = Math.ceil(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };

        // Start animation when stat is in viewport
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    statObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statObserver.observe(stat);
    });
};

// Initialize stats animation
animateStats();

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }

    .nav-links.active {
        display: flex;
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        flex-direction: column;
        background: white;
        padding: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }

    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// Handle Video Embeds
function initializeVideoEmbeds() {
    // This function would handle actual video embeds
    // For now, we'll add placeholder functionality
    const videoData = [
        { id: 1, url: 'tiktok_video_url_1', views: '2.5M' },
        { id: 2, url: 'tiktok_video_url_2', views: '1.8M' },
        { id: 3, url: 'tiktok_video_url_3', views: '3.2M' },
        { id: 4, url: 'tiktok_video_url_4', views: '1.5M' },
        { id: 5, url: 'tiktok_video_url_5', views: '2.1M' },
        { id: 6, url: 'tiktok_video_url_6', views: '1.7M' }
    ];

    videoData.forEach(video => {
        const placeholder = document.querySelector(`[data-video-id="${video.id}"]`);
        if (placeholder) {
            // In production, replace with actual TikTok embed
            placeholder.innerHTML = `
                <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer;">
                    <svg width="60" height="60" fill="white" viewBox="0 0 24 24" style="margin-bottom: 10px;">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                    <p style="color: white; font-size: 14px;">Click to play</p>
                </div>
            `;
        }
    });
}

// Initialize video embeds when page loads
document.addEventListener('DOMContentLoaded', initializeVideoEmbeds);

// Add hover effects to brand items
document.querySelectorAll('.brand-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))';
    });

    item.addEventListener('mouseleave', function() {
        this.style.background = '';
    });
});

// Platform card hover effects
document.querySelectorAll('.platform-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.platform-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });

    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.platform-icon');
        if (icon) {
            icon.style.transform = '';
        }
    });
});

console.log('Portfolio site initialized successfully!');