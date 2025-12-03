document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    // 1. Mobile Navbar Toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            // Ubah display/transform untuk menampilkan/menyembunyikan menu
            // Di implementasi CSS Mobile, nav-menu harus diubah dari display: none menjadi block/flex saat aktif
            navMenu.classList.toggle('active');
            // Untuk ikon, bisa menggunakan Font Awesome (fas fa-bars menjadi fas fa-times)
            const icon = hamburger.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Scroll Logic (Opsional: Tambah class 'scrolled' ke Navbar)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Catatan: AOS diinisialisasi di HTML (lihat tag <script> di index.html)
});