// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mesajınız başarıyla gönderildi!');
    this.reset();
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Project Cards Hover Effect
document.querySelectorAll('.proje-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Zıplayan Top Hareketi
const ball = document.querySelector('.bouncing-ball');
let position = 0;
let direction = 1;

function moveBall() {
    position += direction;
    ball.style.left = `${position}px`;

    if (position > window.innerWidth - 50) {
        direction = -1;
        ball.style.transform = 'scaleX(-1)';
    }
    if (position < 0) {
        direction = 1;
        ball.style.transform = 'scaleX(1)';
    }

    requestAnimationFrame(moveBall);
}

moveBall();

// Mesajların Kademeli Görünmesi
document.querySelectorAll('.message').forEach((message, index) => {
    message.style.animationDelay = `${index * 0.5}s`;
});

// Gerçeği Kabul Et Butonu
const realityButton = document.getElementById('realityButton');
realityButton.addEventListener('click', () => {
    // İlk dalga konfeti
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 20);
    }
    
    // İkinci dalga konfeti (0.5 saniye sonra)
    setTimeout(() => {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                createConfetti();
            }, i * 20);
        }
    }, 500);
    
    alert('Tebrikler! Artık gerçeği kabul ettin! 🎉\nAma üzülme, sen de çok özelsin! 😊');
});

// Konfeti Oluşturma
function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#ff69b4'];
    const shapes = ['square', 'triangle', 'circle'];
    
    const confetti = document.createElement('div');
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    confetti.className = `confetti ${shape}`;
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animation = `
        confettiFall ${Math.random() * 3 + 2}s linear,
        confettiSway ${Math.random() * 2 + 1}s ease-in-out infinite
    `;
    
    // Rastgele boyut (5px ile 15px arası)
    const size = Math.random() * 10 + 5;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    
    document.body.appendChild(confetti);
    
    // Konfetileri temizle
    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Sayfa Yüklendiğinde Animasyonlar
window.addEventListener('load', () => {
    document.querySelectorAll('.fact-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.3}s`;
    });
});

// Mini Topların Rastgele Hareketi
document.querySelectorAll('.mini-ball').forEach(ball => {
    ball.style.animationDuration = `${Math.random() * 2 + 1}s`;
}); 
