// ===== Custom Cursor =====
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    cursor.style.left = cursorX - 6 + 'px';
    cursor.style.top = cursorY - 6 + 'px';
    cursorFollower.style.left = followerX - 20 + 'px';
    cursorFollower.style.top = followerY - 20 + 'px';

    requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hide on link hover
const hoverElements = document.querySelectorAll('a, button, .service-card, .portfolio-item, .filter-btn');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.opacity = '0';
        cursorFollower.style.opacity = '0';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '1';
    });
});

// ===== Mouse Reactive Background =====
const mouseGradient = document.getElementById('mouseGradient');
let gradientX = window.innerWidth / 2;
let gradientY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
    gradientX = e.clientX;
    gradientY = e.clientY;
    mouseGradient.style.left = gradientX + 'px';
    mouseGradient.style.top = gradientY + 'px';
});

// ===== Navigation =====
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Scroll Reveal Animations =====
const revealElements = document.querySelectorAll('.service-card, .portfolio-item, .stat-item, .about-text, .about-visual, .contact-info, .chat-container');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal', 'active');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// ===== Stats Counter Animation =====
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
        }
    });
}, {
    threshold: 0.5
});

statNumbers.forEach(stat => statsObserver.observe(stat));

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 60;
    const duration = 2000;
    const stepTime = duration / 60;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ===== Load Services from JSON =====
async function loadServices() {
    try {
        const response = await fetch('services.json');
        const services = await response.json();
        const servicesGrid = document.getElementById('servicesGrid');

        servicesGrid.innerHTML = services.map(service => `
            <div class="service-card" data-service="${service.id}">
                <div class="service-image-wrapper">
                    <div class="service-image">
                        <img src="${service.image}" alt="${service.title}" class="service-img" onerror="this.style.display='none'">
                    </div>
                </div>
                <div class="service-content">
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-desc">${service.description}</p>
                    <div class="service-tags">
                        ${service.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading services:', error);
    }
}

loadServices();

// ===== Load Portfolio from JSON =====
async function loadPortfolio() {
    try {
        const response = await fetch('portfolio.json');
        const portfolio = await response.json();
        const portfolioGrid = document.getElementById('portfolioGrid');

        portfolioGrid.innerHTML = portfolio.map(item => `
            <div class="portfolio-item" data-category="${item.category}">
                <div class="portfolio-image">
                            <img src="${item.image}" alt="${item.title}" class="portfolio-img" loading="lazy">
                        </div>
                        <div class="portfolio-overlay">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                            <span class="portfolio-link">Подробнее →</span>
                        </div>
                    </div>
                `).join('');
    } catch (error) {
        console.error('Error loading portfolio:', error);
    }
}

loadPortfolio();

// ===== Portfolio Filter =====
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                item.classList.remove('hidden');
                item.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// ===== Chat with localStorage =====
const chatContainer = document.getElementById('chatContainer');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');

// Load chat history from localStorage
function loadChatHistory() {
    const history = JSON.parse(localStorage.getItem('lineness_chat') || '[]');
    chatMessages.innerHTML = '';

    // Default welcome message
    const welcomeMsg = {
        text: "Привет! 👋\nЯ виртуальный ассистент ЛИНЕСС.\nКак я могу вам помочь?",
        sender: 'bot',
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };

    const messagesToShow = history.length > 0 ? history : [welcomeMsg];

    messagesToShow.forEach(msg => {
        addMessageToChat(msg.text, msg.sender, msg.time, false);
    });

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add message to chat UI
function addMessageToChat(text, sender, time, save = true) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    messageDiv.innerHTML = `
        ${text.replace(/\n/g, '<br>')}
        <div class="chat-message-time">${time}</div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    if (save) {
        const history = JSON.parse(localStorage.getItem('lineness_chat') || '[]');
        history.push({ text, sender, time });
        localStorage.setItem('lineness_chat', JSON.stringify(history));
    }
}

// Send message
function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    addMessageToChat(message, 'user', time);
    chatInput.value = '';

    // Simulate bot response
    setTimeout(() => {
        const responses = [
            "Спасибо за сообщение! Наш специалист ответит вам в ближайшее время.",
            "Отличный вопрос! Давайте обсудим детали в чате.",
            "Мы готовы помочь! Опишите ваш проект подробнее.",
            "Интересно! Можете рассказать больше о ваших целях?"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const botTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        addMessageToChat(randomResponse, 'bot', botTime);
    }, 1000);
}

chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Chat trigger
document.querySelectorAll('.chat-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        chatContainer.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => chatInput.focus(), 500);
    });
});

// Initialize chat
loadChatHistory();

// ===== Hero Canvas Animation =====
const heroCanvas = document.getElementById('heroCanvas');
if (heroCanvas) {
    const ctx = heroCanvas.getContext('2d');
    let particles = [];
    const particleCount = 100;

    function resizeCanvas() {
        heroCanvas.width = window.innerWidth;
        heroCanvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * heroCanvas.width;
            this.y = Math.random() * heroCanvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > heroCanvas.width) this.x = 0;
            if (this.x < 0) this.x = heroCanvas.width;
            if (this.y > heroCanvas.height) this.y = 0;
            if (this.y < 0) this.y = heroCanvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                if (distance < 100) {
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - distance / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animateParticles);
    }

    resizeCanvas();
    initParticles();
    animateParticles();

    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });
}

// ===== Performance: Debounce & Throttle =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

window.addEventListener('scroll', throttle(() => {
    // Additional scroll animations
}, 16));

// ===== Prefers Reduced Motion =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.querySelectorAll('.gradient-orb, .floating-card').forEach(el => {
        el.style.animation = 'none';
    });
}

console.log('ЛИНЕСС website initialized successfully');
