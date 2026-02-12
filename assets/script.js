// ===========================
// Floating Hearts Animation
// ===========================

const heartsContainer = document.getElementById('heartsContainer');
const heartEmojis = ['❤️', '💕', '💖', '💗', '💝', '💘', '💞'];

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 5 + 's';
    heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
    heartsContainer.appendChild(heart);
    
    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 15000);
}

// Create hearts periodically
setInterval(createHeart, 800);

// Create initial batch of hearts
for (let i = 0; i < 10; i++) {
    setTimeout(createHeart, i * 300);
}

// ===========================
// Countdown Timer
// ===========================

function updateCountdown() {
    const valentinesDay = new Date('2026-02-14T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = valentinesDay - now;

    // If countdown is finished
    if (distance < 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        document.querySelector('.countdown-title').textContent = '🎉 Sevgililer Günü Kutlu Olsun! 🎉';
        return;
    }

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Initialize countdown
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);

// ===========================
// Smooth Scroll for Anchors
// ===========================

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

// ===========================
// Parallax Effect on Scroll
// ===========================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// ===========================
// Console Message (Easter Egg)
// ===========================

console.log('%c💕 Sevgililer Günü Kutlu Olsun! 💕', 'color: #FF6B9D; font-size: 20px; font-weight: bold;');
console.log('%cBu site sevgiyle kodlandı ❤️', 'color: #C44569; font-size: 14px;');
console.log('%cKodları görmek için GitHub: [repo-linkini-buraya-ekle]', 'color: #2D132C; font-size: 12px;');
