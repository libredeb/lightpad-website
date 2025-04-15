// App icons for the hero section
const appIcons = [
    'fa-terminal', 'fa-code', 'fa-image', 'fa-music', 'fa-video',
    'fa-file', 'fa-folder', 'fa-calculator', 'fa-calendar',
    'fa-envelope', 'fa-browser', 'fa-camera', 'fa-paint-brush',
    'fa-gamepad', 'fa-book', 'fa-chart-line', 'fa-database',
    'fa-microphone', 'fa-headphones', 'fa-palette', 'fa-robot',
    'fa-cloud', 'fa-server', 'fa-network-wired', 'fa-shield-alt',
    'fa-lock', 'fa-unlock', 'fa-key', 'fa-bell', 'fa-comment',
    'fa-users', 'fa-cog', 'fa-tools', 'fa-wrench', 'fa-hammer',
    'fa-lightbulb', 'fa-bolt', 'fa-fire', 'fa-sun', 'fa-moon',
    'fa-desktop', 'fa-laptop', 'fa-mobile-alt', 'fa-tablet-alt',
    'fa-print', 'fa-scanner', 'fa-hdd', 'fa-memory', 'fa-microchip',
    'fa-ethernet', 'fa-wifi', 'fa-bluetooth', 'fa-usb', 'fa-hdd',
    'fa-compact-disc', 'fa-save', 'fa-upload', 'fa-download',
    'fa-share-alt', 'fa-link', 'fa-unlink', 'fa-sync', 'fa-redo',
    'fa-undo', 'fa-trash', 'fa-archive', 'fa-inbox', 'fa-outbox',
    'fa-paper-plane', 'fa-envelope-open', 'fa-at', 'fa-hashtag',
    'fa-asterisk', 'fa-exclamation', 'fa-question', 'fa-info',
    'fa-check', 'fa-times', 'fa-plus', 'fa-minus', 'fa-divide',
    'fa-equals', 'fa-percentage', 'fa-infinity', 'fa-pi'
];

function createAppIcons() {
    const container = document.querySelector('.app-icons');
    const numIcons = 60;
    
    // Clear existing icons
    container.innerHTML = '';

    for (let i = 0; i < numIcons; i++) {
        const icon = document.createElement('div');
        icon.className = 'app-icon';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size between 50px and 70px
        const size = 50 + Math.random() * 20;
        
        // Random delay for animation
        const delay = Math.random() * 15;
        
        // Random rotation speed
        const duration = 10 + Math.random() * 20;
        
        // Random color
        const colors = [
            '#7ED957', '#5CB85C', '#4CAF50', '#45B7D1', '#3498DB',
            '#2980B9', '#2C3E50', '#34495E', '#27AE60', '#16A085',
            '#1ABC9C', '#2ECC71', '#3498DB', '#9B59B6', '#8E44AD'
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        icon.style.left = `${x}%`;
        icon.style.top = `${y}%`;
        icon.style.width = `${size}px`;
        icon.style.height = `${size}px`;
        icon.style.animationDelay = `${delay}s`;
        icon.style.animationDuration = `${duration}s`;
        icon.style.backgroundColor = randomColor;
        
        // Random icon
        const randomIcon = appIcons[Math.floor(Math.random() * appIcons.length)];
        icon.innerHTML = `<i class="fas ${randomIcon}"></i>`;
        
        container.appendChild(icon);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createAppIcons();
    
    // Intersection Observer for section animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - navHeight - 20; // 20px extra padding

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to navigation bar
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('shadow-lg');
        }
    });

    // Clipboard copy functionality
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', async () => {
            const textToCopy = button.getAttribute('data-copy');
            try {
                await navigator.clipboard.writeText(textToCopy);
                
                // Change icon to checkmark temporarily
                const icon = button.querySelector('i');
                const originalClass = icon.className;
                icon.className = 'fas fa-check';
                
                // Reset icon after 2 seconds
                setTimeout(() => {
                    icon.className = originalClass;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    });
}); 