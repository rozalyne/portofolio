document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');

    // Function to toggle between light mode and dark mode
    function toggleTheme() {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeIcon.src = 'moon.png'; // Ganti ikon dengan bulan untuk dark mode
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeIcon.src = 'sun.png'; // Ganti ikon dengan matahari untuk light mode
        }

        // Tambahkan efek rotasi pada ikon
        themeIcon.classList.add('rotate-icon');
        setTimeout(() => {
            themeIcon.classList.remove('rotate-icon');
        }, 300);

        // Simpan tema yang dipilih ke dalam local storage
        const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    }

    // Event listener untuk tombol toggle tema
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Inisialisasi tema berdasarkan local storage (opsional)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        toggleTheme(); // Terapkan dark mode jika tema sebelumnya dark
    }

    // Event listener untuk efek hover pada kartu (card)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.1)';
        });
    });
});
