# JavaScript Модули проекта ЛИНЕСС

## Полный список JS модулей

### Инициализация

#### 1. EOFInit3.js
**Назначение**: Точка входа, инициализация всех модулей

**Содержание**:
```javascript
console.log('ЛИНЕСС website initialized successfully');
```

**Примечание**: Простой лог, остальные модули инициализируются самостоятельно через DOMContentLoaded.

### UI Компоненты

#### 2. EOFcursor3.js
**Назначение**: Кастомный курсор

**Класс**: `CustomCursor` (глобальный экземпляр)

**Функционал**:
- Двойной курсор (точка + кружок-след)
- Анимация следования с разной скоростью
- Увеличение при наведении на интерактивные элементы
- Поддержка touch-устройств (скрытие)

**Инициализация**:
```javascript
// Автоматическая при загрузке DOM
// Ищет элементы: .cursor, .cursor-follower
```

**Обработчики**:
```javascript
const hoverElements = document.querySelectorAll('a, button, .service-card, .portfolio-item, .filter-btn');
// Добавляет hover-эффекты
```

#### 3. EOFNavigation3.js
**Назначение**: Навигация и плавный скролл

**Класс**: `Navigation` (глобальные функции)

**Функционал**:
- Фиксированная навигация при скролле
- Мобильное меню (гамбургер)
- Плавный скролл к якорям
- Закрытие меню при клике на ссылку

**События**:
```javascript
window.addEventListener('scroll', handleScroll);
navToggle.addEventListener('click', toggleMenu);
navLinks.forEach(link => link.addEventListener('click', closeMenu));
```

**Параметры**:
- Offset для скролла: 80px

#### 4. EOFChat3.js
**Назначение**: Чат-бот на странице контактов

**Класс**: `ChatBot`

**Функционал**:
- Отправка сообщений
- Получение ответов (симуляция)
- Хранение истории в localStorage
- Индикатор онлайн-статуса

**Использование**:
```javascript
const chat = new ChatBot();
chat.init();
```

**API**:
- `sendMessage(text)` - отправить сообщение
- `getResponse(userMessage)` - получить ответ (искусственный интеллект)
- `saveHistory()` / `loadHistory()` - работа с localStorage

### Анимации

#### 5. EOFGlobalBackground3.js
**Назначение**: Интерактивный фон с орбами

**Класс**: `GlobalBackground`

**Функционал**:
- Создание 5 градиентных орбов
- Анимация плавающего движения
- Параллакс при движении мыши
- Риппл-эффекты при нажатии клавиш
- Взрыв частиц при клике

**Конфигурация орбов**:
```javascript
const orbConfigs = [
    { className: 'bg-orb-1', speed: 0.02, radius: 300 }, // Индиго
    { className: 'bg-orb-2', speed: 0.015, radius: 250 }, // Циан
    { className: 'bg-orb-3', speed: 0.01, radius: 200 },  // Розовый
    { className: 'bg-orb-4', speed: 0.025, radius: 150 }, // Желтый
    { className: 'bg-orb-5', speed: 0.018, radius: 225 }  // Циан
];
```

**Интерактивность**:
- **Mouse move**: орбы следуют за курсором с разной скоростью (параллакс)
- **Key down**: создание ripple-эффекта в случайной позиции
- **Click**: создание burst из 8 частиц
- **Touch**: поддержка сенсорных экранов

**Анимация**:
```javascript
animate() {
    this.updateOrbs(); // Обновление позиций
    this.animationFrame = requestAnimationFrame(() => this.animate());
}
```

#### 6. EOFScrollReveal3.js
**Назначение**: Появление элементов при скролле

**Класс**: `ScrollReveal`

**Функционал**:
- Наблюдение за элементами с классом `.reveal`
- Добавление класса `.active` при входе в viewport
- Настройка порога (threshold)
- Опциональная отмена анимации (prefers-reduced-motion)

**Использование**:
```javascript
const reveal = new ScrollReveal();
reveal.init();
```

**HTML**:
```html
<div class="reveal">Контент</div>
```

**CSS** (из EOFAnimations3.css):
```css
.reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}
```

#### 7. EOFParallax3.js
**Назначение**: Параллакс эффекты (если используется)

**Класс**: `Parallax`

**Функционал**:
- Движение элементов при скролле
- Разная скорость для разных слоев

### Загрузка данных

#### 8. EOFServiceLoader3.js
**Назначение**: Загрузка услуг из JSON

**Класс**: `ServiceLoader`

**Функционал**:
- Fetch запрос к `services.json`
- Рендеринг карточек услуг
- Обработка ошибок
- Кэширование

**Использование**:
```javascript
const serviceLoader = new ServiceLoader();
serviceLoader.load();
```

**HTML структура**:
```html
<div class="services-grid" id="servicesGrid"></div>
```

**JSON формат**:
```json
[
  {
    "icon": "code",
    "title": "Веб-разработка",
    "description": "Создание современных веб-приложений",
    "tags": ["React", "Vue", "TypeScript"]
  }
]
```

#### 9. EOFPortfolioLoader3.js
**Назначение**: Загрузка портфолио из JSON

**Класс**: `PortfolioLoader`

**Функционал**:
- Fetch запрос к `portfolio.json`
- Рендеринг элементов портфолио
- Оптимизация изображений

**Использование**:
```javascript
const portfolioLoader = new PortfolioLoader();
portfolioLoader.load();
```

**HTML структура**:
```html
<div class="portfolio-grid" id="portfolioGrid"></div>
```

#### 10. EOFPortfolioFilterDynamic3.js
**Назначение**: Динамическая фильтрация портфолио

**Класс**: `PortfolioFilter`

**Функционал**:
- Фильтрация по категориям (all, web, mobile, design)
- Анимации при фильтрации
- Управление кнопками фильтров

**Использование**:
```javascript
const filter = new PortfolioFilter();
filter.init();
```

**HTML**:
```html
<button class="filter-btn active" data-filter="all">Все</button>
<button class="filter-btn" data-filter="web">Веб</button>
```

### Утилиты

#### 11. EOFStatsCounter3.js
**Назначение**: Анимированные счетчики статистики

**Класс**: `StatsCounter`

**Функционал**:
- Поиск элементов с `data-target`
- Анимация от 0 до target значения
- Запуск при входе в viewport (IntersectionObserver)
- Форматирование чисел

**HTML**:
```html
<div class="stat-number" data-target="150">0</div>
```

**Использование**:
```javascript
const statsCounter = new StatsCounter();
statsCounter.init();
```

**Настройки**:
- Duration: 2000ms
- Easing: easeOutQuart

#### 12. EOFContactForm3.js
**Назначение**: Обработка контактной формы

**Класс**: `ContactForm`

**Функционал**:
- Валидация полей
- Отправка данных (Fetch API)
- Показ уведомлений
- Сброс формы

**Использование**:
```javascript
const contactForm = new ContactForm();
contactForm.init();
```

#### 13. EOFPerformance3.js
**Назначение**: Оптимизация производительности

**Класс**: `PerformanceOptimizer`

**Функционал**:
- Ленивая загрузка изображений
- Оптимизация анимаций
- Мониторинг FPS
- Управление качеством

**Использование**:
```javascript
const perf = new PerformanceOptimizer();
perf.optimize();
```

#### 14. EOFLazyLoad3.js
**Назначение**: Ленивая загрузка изображений

**Класс**: `LazyLoader`

**Функционал**:
- Наблюдение за изображениями с `data-src`
- Подгрузка при приближении к viewport
- Плейсхолдеры
- Кэширование

**HTML**:
```html
<img data-src="image.jpg" class="lazy" alt="...">
```

#### 15. EOFNotification3.js
**Назначение**: Уведомления (toast, alerts)

**Класс**: `Notification`

**Функционал**:
- Показ временных уведомлений
- Типы: success, error, warning, info
- Автоматическое скрытие
- Очередь уведомлений

**Использование**:
```javascript
Notification.show('Сообщение отправлено!', 'success');
```

#### 16. EOFTextSplit3.js
**Назначение**: Разделение текста для анимаций

**Класс**: `TextSplitter`

**Функционал**:
- Разделение текста на буквы/слова
- Анимация появления
- Сборка обратно

**Использование**:
```javascript
const splitter = new TextSplitter('.hero-title');
splitter.split();
```

### Расширенные эффекты

#### 17. EOFMagnetic3.js
**Назначение**: Магнитные кнопки

**Класс**: `MagneticButton`

**Функционал**:
- Притягивание кнопки к курсору
- Плавное возвращение в исходное положение
- Настройка радиуса притяжения

**Использование**:
```javascript
const magnetic = new MagneticButton('.btn-primary');
magnetic.init();
```

#### 18. EOFMouseReactive3.js
**Назначение**: Реакции на движение мыши

**Класс**: `MouseReactive`

**Функционал**:
- Трекинг позиции мыши
- Эффекты свечения, искажения
- 3D трансформации элементов

**Использование**:
```javascript
const reactive = new MouseReactive('.hero-visual');
reactive.init();
```

#### 19. EOFReducedMotion3.js
**Назначение**: Учет предпочтений движения

**Класс**: `ReducedMotion`

**Функционал**:
- Проверка `prefers-reduced-motion`
- Отключение анимаций при необходимости
- Замена на мгновенные переходы

**Использование**:
```javascript
const motion = new ReducedMotion();
if (motion.shouldReduce()) {
    // Отключить анимации
}
```

### Canvas

#### 20. EOFCanvasAnimation3.js
**Назначение**: Canvas анимации (если используется отдельно от фона)

**Класс**: `CanvasAnimation`

**Функционал**:
- Рисование на canvas
- Анимация кадров
- Обработка resize
- Оптимизация рендеринга

### Дополнительные модули

#### 21. EOFCanvas3.js (возможно дублирует 20)
#### 22. EOFContactLink3.js
#### 23. EOFServiceImg3.js
#### 24. EOFPortfolioImg3.js
#### 25. EOFAboutImg3.js
#### 26. EOFServiceRect3.js

**Примечание**: Эти модули могут быть утилитарными или неиспользуемыми.

## Общие паттерны

### Инициализация
```javascript
class ModuleName {
    constructor() {
        this.init();
    }

    init() {
        if (this.shouldInitialize()) {
            this.cacheElements();
            this.bindEvents();
            this.startAnimation();
        }
    }

    shouldInitialize() {
        // Проверка наличия необходимых элементов
        return document.querySelector('.required-element') !== null;
    }

    cacheElements() {
        this.elements = {
            container: document.querySelector('.container'),
            items: document.querySelectorAll('.item')
        };
    }

    bindEvents() {
        // Привязка обработчиков
    }

    startAnimation() {
        // Запуск анимаций (если нужно)
    }
}

// Автоматическая инициализация
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new ModuleName());
} else {
    new ModuleName();
}
```

### Fetch API
```javascript
loadData(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network error');
            return response.json();
        })
        .then(data => this.render(data))
        .catch(error => {
            console.error('Error:', error);
            this.showError();
        });
}
```

### RequestAnimationFrame
```javascript
animate() {
    this.update();

    // Проверка, нужно ли продолжать анимацию
    if (this.isActive) {
        this.animationFrame = requestAnimationFrame(() => this.animate());
    }
}

start() {
    this.isActive = true;
    this.animate();
}

stop() {
    this.isActive = false;
    if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame);
    }
}
```

### IntersectionObserver
```javascript
initObserver() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, options);

    document.querySelectorAll('.reveal').forEach(el => {
        this.observer.observe(el);
    });
}
```

## Безопасность

### XSS защита
- Экранирование пользовательского ввода при рендеринге
- Использование `textContent` вместо `innerHTML` где возможно
- Валидация данных перед использованием

### CORS
- Все fetch запросы к локальным файлам (same-origin)
- При необходимости настройка CORS на сервере

### LocalStorage
- Только для нечувствительных данных (история чата)
- Проверка на доступность (try-catch)
- Очистка при необходимости

## Производительность

### Оптимизации
1. **Кэширование DOM**: все элементы сохраняются в `this.elements`
2. **Делегирование событий**: обработчики на родителях
3. **Throttle/Debounce**: для частых событий (scroll, resize, mousemove)
4. **requestAnimationFrame**: для анимаций
5. **IntersectionObserver**: для ленивой загрузки и reveal

### Память
- Удаление обработчиков при уничтожении модуля
- Отмена animationFrame
- Очистка observer'ов

## Отладка

### Console логи
```javascript
if (localStorage.getItem('debug') === 'true') {
    console.log('Module debug info:', this);
}
```

### Error handling
```javascript
try {
    // Код
} catch (error) {
    console.error('ModuleName error:', error);
    // Уведомление пользователя при необходимости
}
```

## Тестирование

### Unit тесты (рекомендуется)
```javascript
describe('GlobalBackground', () => {
    test('creates 5 orbs', () => {
        const bg = new GlobalBackground();
        expect(bg.orbs.length).toBe(5);
    });
});
```

### Ручное тестирование
- Проверка в разных браузерах
- Тестирование на мобильных устройствах
- Проверка производительности (Lighthouse)

---

*Версия: 1.0.0* | *Последнее обновление: 2024*