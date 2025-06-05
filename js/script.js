// Мобильное меню
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
    });
    
    // Фильтрация товаров
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Удаляем активный класс у всех кнопок
                filterBtns.forEach(b => b.classList.remove('active'));
                // Добавляем активный класс текущей кнопке
                this.classList.add('active');
                
                const category = this.dataset.category;
                
                // Фильтрация товаров
                productCards.forEach(card => {
                    if (category === 'all' || card.dataset.category === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Закрываем мобильное меню, если оно открыто
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                }
            }
        });
    });
    
    // Фиксированная шапка при прокрутке
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});