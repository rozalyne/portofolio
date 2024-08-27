document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');

    // Function to toggle between light mode and dark mode
    const toggleTheme = () => {
        const isLightMode = body.classList.toggle('light-mode');
        body.classList.toggle('dark-mode', !isLightMode);
        themeIcon.src = isLightMode ? 'sun.png' : 'moon.png'; // Update icon

        // Add rotation effect to the icon
        themeIcon.classList.add('rotate-icon');
        setTimeout(() => themeIcon.classList.remove('rotate-icon'), 300);

        // Save the selected theme to local storage
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    };

    // Initialize theme based on local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme === 'light' ? 'light-mode' : 'dark-mode');
        themeIcon.src = savedTheme === 'light' ? 'sun.png' : 'moon.png';
    } else {
        // Default to dark mode if no theme is saved
        body.classList.add('dark-mode');
        themeIcon.src = 'moon.png';
    }

    // Event listener for theme toggle button
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Event listeners for card hover effects
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.1)';
        });
    });

    // Initialize carousel with jQuery
    $('#certificationCarousel').carousel({
        interval: 3000,  // Carousel interval in milliseconds
        wrap: true       // Whether the carousel should cycle continuously or have hard stops
    });

    // JavaScript to enhance carousel functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    const showNextItem = () => {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    };

    const showPrevItem = () => {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    };

    setInterval(showNextItem, 5000); // Change slide every 5 seconds

    // Add event listeners for carousel controls
    document.querySelector('.carousel-control-next').addEventListener('click', showNextItem);
    document.querySelector('.carousel-control-prev').addEventListener('click', showPrevItem);
});
