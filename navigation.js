/* ============================================
   NAVIGATION.JS — Menu responsive unifié
   Vision Mobile Studio
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const menuHand = document.querySelector('.menu-hand');
    const navigation = document.querySelector('.navigation');
    let overlay = document.querySelector('.nav-overlay');

    if (!menuHand || !navigation) return;

    // Create overlay if not exists
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('nav-overlay');
        document.body.appendChild(overlay);
    }

    function toggleMenu() {
        menuHand.classList.toggle('active');
        navigation.classList.toggle('show');
        overlay.classList.toggle('show');
        document.body.style.overflow = navigation.classList.contains('show') ? 'hidden' : '';
    }

    function closeMenu() {
        menuHand.classList.remove('active');
        navigation.classList.remove('show');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    // Toggle on hamburger click
    menuHand.addEventListener('click', toggleMenu);

    // Close on overlay click
    overlay.addEventListener('click', closeMenu);

    // Close on nav link click
    navigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    // Active link highlight
    const currentPage = window.location.pathname.split('/').pop();
    navigation.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    // Scroll animation for elements
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            if (isVisible) {
                el.classList.add('animate-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});
