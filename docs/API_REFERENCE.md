# API Справочник проекта ЛИНЕСС

## Обзор

Этот документ описывает публичные API модулей JavaScript, глобальные переменные, события и конфигурации проекта ЛИНЕСС.

## Глобальные объекты

### window.LINESS (глобальный namespace)

**Описание**: Основной namespace для всех модулей (если используется)

**Пример**:
```javascript
window.LINESS = {
    cursor: CustomCursor,
    navigation: Navigation,
    background: GlobalBackground,
    // ...
};
```

## CSS Переменные

### Дизайн-система

Все переменные определены в `:root` в EOFCSSVariables3.css.

#### Цвета
```css
--color-bg: #0a0a0a;              /* Основной фон */
--color-bg-secondary: #141414;    /* Вторичный фон */
--color-bg-tertiary: #1f1f1f;     /* Третичный фон */
--color-text: #ffffff;            /* Основной текст */
--color-text-secondary: #b0b0b0;  /* Вторичный текст */
--color-text-muted: #808080;      /* Заглушенный текст */
--color-primary: #ffffff;         /* Основной акцентный */
--color-secondary: #e0e0e0;       /* Вторичный акцентный */
--color-accent: #000000;          /* Акцент (черный) */
```

#### Градиенты
```css
--gradient-primary: linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #000000 100%);
--gradient-dark: linear-gradient(180deg, #0a0a0a 0%, #141414 100%);
--gradient-semi-blur: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 100%);
```

#### Glass effect
```css
--glass-bg: rgba(0, 0, 0, 0.3);
--glass-border: rgba(255, 255, 255, 0.1);
```

#### Тени
```css
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
--shadow-md: 0 8px 32px rgba(0, 0, 0, 0.4);
--shadow-lg: 0 16px 64px rgba(0, 0, 0, 0.5);
```

#### Радиусы
```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-xl: 32px;
```

#### Транзишены
```css
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;
```

#### Шрифты
```css
--font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

## JavaScript Классы

### CustomCursor (EOFcursor3.js)

**Описание**: Управление кастомным курсором

**Конструктор**:
```javascript
const cursor = new CustomCursor();
```

**Методы**:
- `init()` - инициализация (вызывается автоматически)
- `destroy()` - очистка событий

**События**:
- Автоматически добавляет обработчики на элементы:
  - `a, button, .service-card, .portfolio-item, .filter-btn`

**Пример использования**:
```javascript
// Автоматическая инициализация при загрузке
// Ручная инициализация (если нужно):
const customCursor = new CustomCursor();
```

---

### Navigation (EOFNavigation3.js)

**Описание**: Управление навигацией и скроллом

**Конструктор**:
```javascript
const nav = new Navigation();
```

**Методы**:
- `init()` - инициализация (автоматически)
- `handleScroll()` - обработка скролла
- `toggleMenu()` - переключение мобильного меню
- `closeMenu()` - закрытие меню
- `smoothScrollTo(target, offset)` - плавный скролл

**События**:
- `scroll` - на `window`
- `click` - на `nav-toggle` и `nav-links`

**Пример**:
```javascript
// Плавный скролл к элементу
nav.smoothScrollTo(document.getElementById('contact'), 80);
```

---

### GlobalBackground (EOFGlobalBackground3.js)

**Описание**: Интерактивный фон с анимациями

**Конструктор**:
```javascript
const background = new GlobalBackground();
```

**Свойства**:
- `container` - контейнер фона (`.global-background`)
- `orbs` - массив объектов орбов
- `mouseX`, `mouseY` - текущая позиция мыши
- `targetMouseX`, `targetMouseY` - целевая позиция

**Методы**:
- `init()` - инициализация
- `createContainer()` - создание контейнера
- `createOrbs()` - создание 5 орбов
- `bindEvents()` - привязка событий
- `startAnimation()` - запуск анимационного цикла
- `updateOrbs()` - обновление позиций орбов
- `createRipple(key)` - создание ripple-эффекта
- `createBurst(x, y)` - создание взрыва частиц

**События**:
- `mousemove` - на `document` (параллакс)
- `keydown` - на `document` (ripple)
- `click` - на `document` (burst)
- `touchmove` - на `document` (параллакс)

**Интерактивные состояния**:
- `.mouse-active` - добавляется к контейнеру при движении мыши
- `.keyboard-press` - добавляется к body при нажатии клавиш

**Пример кастомизации**:
```javascript
// Изменить количество орбов
// (нужно модифицировать createOrbs)

// Изменить скорость анимации
orb.speed = 0.03; // в конфиге

// Изменить цвета (в CSS)
// .bg-orb-1 { background: radial-gradient(circle, rgba(255,0,0,0.6) 0%, transparent 70%); }
```

---

### ScrollReveal (EOFScrollReveal3.js)

**Описание**: Анимации появления при скролле

**Конструктор**:
```javascript
const reveal = new ScrollReveal();
```

**Методы**:
- `init()` - инициализация (автоматически)
- `observe()` - начало наблюдения
- `unobserve()` - прекращение наблюдения

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

**Настройки**:
```javascript
// Можно изменить через CSS кастомные свойства
.reveal {
    --reveal-offset: 40px;
    --reveal-duration: 0.8s;
    --reveal-easing: ease;
}
```

---

### ServiceLoader (EOFServiceLoader3.js)

**Описание**: Загрузка и рендеринг услуг

**Конструктор**:
```javascript
const serviceLoader = new ServiceLoader();
```

**Методы**:
- `init()` - инициализация (автоматически)
- `load()` - загрузка данных из services.json
- `render(services)` - рендеринг карточек
- `onError()` - обработка ошибок

**HTML**:
```html
<div class="services-grid" id="servicesGrid"></div>
```

**JSON формат (services.json)**:
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

**События**:
- `services:loaded` - когда данные загружены
- `services:error` - при ошибке загрузки

**Пример**:
```javascript
const loader = new ServiceLoader();
loader.load().then(() => {
    console.log('Услуги загружены');
});
```

---

### PortfolioLoader (EOFPortfolioLoader3.js)

**Описание**: Загрузка и рендеринг портфолио

**Конструктор**:
```javascript
const portfolioLoader = new PortfolioLoader();
```

**Методы**:
- `init()` - инициализация (автоматически)
- `load()` - загрузка данных из portfolio.json
- `render(portfolio)` - рендеринг элементов
- `onError()` - обработка ошибок

**HTML**:
```html
<div class="portfolio-grid" id="portfolioGrid"></div>
```

**JSON формат (portfolio.json)**:
```json
[
  {
    "title": "Проект 1",
    "category": "web",
    "image": "images/project1.jpg",
    "description": "Описание проекта"
  }
]
```

---

### PortfolioFilter (EOFPortfolioFilterDynamic3.js)

**Описание**: Фильтрация портфолио

**Конструктор**:
```javascript
const filter = new PortfolioFilter();
```

**Методы**:
- `init()` - инициализация (автоматически)
- `filter(category)` - фильтрация по категории
- `getActiveFilter()` - получение активного фильтра

**HTML**:
```html
<div class="portfolio-filters">
    <button class="filter-btn active" data-filter="all">Все</button>
    <button class="filter-btn" data-filter="web">Веб</button>
    <button class="filter-btn" data-filter="mobile">Мобильные</button>
    <button class="filter-btn" data-filter="design">Дизайн</button>
</div>
```

**События**:
- `portfolio:filter` - при изменении фильтра
- `portfolio:filtered` - после фильтрации

**Пример**:
```javascript
// Программная фильтрация
filter.filter('web');
```

---

### StatsCounter (EOFStatsCounter3.js)

**Описание**: Анимированные счетчики

**Конструктор**:
```javascript
const stats = new StatsCounter();
```

**Методы**:
- `init()` - инициализация (автоматически)
- `animate(element, target, duration)` - анимация одного счетчика
- `reset()` - сброс всех счетчиков

**HTML**:
```html
<div class="stat-number" data-target="150">0</div>
<div class="stat-number" data-target="50" data-duration="3000">0</div>
```

**Атрибуты**:
- `data-target` - конечное значение
- `data-duration` - длительность анимации (ms, по умолчанию 2000)
- `data-start` - начальное значение (по умолчанию 0)

**События**:
- `stats:complete` - когда все счетчики завершены

---

### ContactForm (EOFContactForm3.js)

**Описание**: Обработка контактной формы

**Конструктор**:
```javascript
const contactForm = new ContactForm();
```

**Методы**:
- `init()` - инициализация (автоматически)
- `validate()` - валидация формы
- `submit()` - отправка данных
- `reset()` - сброс формы

**HTML**:
```html
<form class="contact-form">
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Отправить</button>
</form>
```

**События**:
- `form:valid` - при успешной валидации
- `form:invalid` - при ошибке валидации
- `form:submitted` - после отправки
- `form:success` - при успешной отправке
- `form:error` - при ошибке отправки

**Пример**:
```javascript
const form = new ContactForm();
document.querySelector('.contact-form').addEventListener('form:success', (e) => {
    console.log('Форма отправлена');
});
```

---

### ChatBot (EOFChat3.js)

**Описание**: Чат-бот для страницы контактов

**Конструктор**:
```javascript
const chat = new ChatBot();
```

**Методы**:
- `init()` - инициализация (автоматически)
- `sendMessage(text)` - отправка сообщения
- `getResponse(message)` - генерация ответа
- `saveHistory()` - сохранение в localStorage
- `loadHistory()` - загрузка из localStorage
- `clearHistory()` - очистка истории

**HTML**:
```html
<div class="chat-container" id="chatContainer">
    <div class="chat-header">...</div>
    <div class="chat-messages" id="chatMessages"></div>
    <div class="chat-input-area">
        <input type="text" class="chat-input" id="chatInput">
        <button class="chat-send" id="chatSend"></button>
    </div>
</div>
```

**События**:
- `chat:message` - при получении сообщения
- `chat:response` - при получении ответа
- `chat:cleared` - при очистке истории

**localStorage ключи**:
- `lineness_chat_history` - массив сообщений

**Пример**:
```javascript
const chat = new ChatBot();
chat.init();

// Отправить сообщение программно
chat.sendMessage('Привет!');

// Очистить историю
chat.clearHistory();
```

---

### PerformanceOptimizer (EOFPerformance3.js)

**Описание**: Оптимизация производительности

**Конструктор**:
```javascript
const perf = new PerformanceOptimizer();
```

**Методы**:
- `init()` - инициализация (автоматически)
- `optimize()` - применение оптимизаций
- `monitor()` - мониторинг FPS
- `shouldReduce()` - проверка предпочтений движения

**Оптимизации**:
- Ленивая загрузка изображений
- Оптимизация анимаций
- Снижение качества при низком FPS

---

### LazyLoader (EOFLazyLoad3.js)

**Описание**: Ленивая загрузка изображений

**Конструктор**:
```javascript
const lazyLoader = new LazyLoader();
```

**Методы**:
- `init()` - инициализация (автоматически)
- `loadImage(element)` - загрузка одного изображения
- `observe()` - начало наблюдения

**HTML**:
```html
<img data-src="image.jpg" class="lazy" alt="...">
<img data-srcset="image-1x.jpg 1x, image-2x.jpg 2x" class="lazy" alt="...">
```

**Атрибуты**:
- `data-src` - URL изображения
- `data-srcset` - srcset для responsive изображений
- `data-sizes` - sizes атрибут

---

### Notification (EOFNotification3.js)

**Описание**: Система уведомлений

**Конструктор**:
```javascript
// Статический класс, методы вызываются напрямую
Notification.show('Сообщение', 'success');
```

**Методы**:
- `show(message, type = 'info', duration = 5000)` - показать уведомление
- `error(message, duration)` - показать ошибку
- `success(message, duration)` - показать успех
- `warning(message, duration)` - показать предупреждение
- `info(message, duration)` - показать информационное
- `clear()` - очистить все уведомления

**Типы**:
- `success` - зеленый
- `error` - красный
- `warning` - желтый
- `info` - синий

**Пример**:
```javascript
Notification.success('Данные сохранены!');
Notification.error('Ошибка отправки формы');
```

---

### ReducedMotion (EOFReducedMotion3.js)

**Описание**: Учет предпочтений движения

**Конструктор**:
```javascript
const motion = new ReducedMotion();
```

**Методы**:
- `shouldReduce()` - проверка prefers-reduced-motion
- `getReducedValue(value, reducedValue)` - возвращает значение в зависимости от настроек

**Пример**:
```javascript
const motion = new ReducedMotion();
const duration = motion.shouldReduce() ? 0 : 0.8;

element.style.transition = `all ${duration}s ease`;
```

---

### TextSplitter (EOFTextSplit3.js)

**Описание**: Разделение текста для анимаций

**Конструктор**:
```javascript
const splitter = new TextSplitter(selector);
```

**Методы**:
- `init()` - инициализация (автоматически)
- `split()` - разделение текста
- `restore()` - восстановление текста

**Пример**:
```javascript
const splitter = new TextSplitter('.hero-title');
splitter.split(); // Разделяет на <span> по буквам/словам
```

## События (Custom Events)

### Глобальные события

```javascript
// Услуги загружены
document.dispatchEvent(new CustomEvent('services:loaded', {
    detail: { services: [...] }
}));

// Портфолио загружено
document.dispatchEvent(new CustomEvent('portfolio:loaded', {
    detail: { items: [...] }
}));

// Фильтрация портфолио
document.dispatchEvent(new CustomEvent('portfolio:filtered', {
    detail: { category: 'web', count: 5 }
}));

// Форма отправлена
document.dispatchEvent(new CustomEvent('form:submitted', {
    detail: { data: {...} }
}));
```

### Подписка на события

```javascript
document.addEventListener('services:loaded', (e) => {
    console.log('Услуги:', e.detail.services);
});

document.addEventListener('portfolio:filtered', (e) => {
    console.log('Фильтр:', e.detail.category);
});
```

## JSON API

### services.json
```json
[
  {
    "id": 1,
    "icon": "code",
    "title": "Веб-разработка",
    "description": "Создание современных веб-приложений",
    "tags": ["React", "Vue", "TypeScript"],
    "featured": true
  }
]
```

### portfolio.json
```json
[
  {
    "id": 1,
    "title": "Проект 1",
    "category": "web",
    "image": "images/project1.jpg",
    "description": "Описание проекта",
    "link": "https://example.com",
    "featured": true
  }
]
```

## Конфигурация

### Настройки через data-атрибуты

```html
<!-- Для счетчиков -->
<div class="stat-number" data-target="150" data-duration="3000" data-start="10">0</div>

<!-- Для анимаций -->
<div class="reveal" data-reveal-offset="100" data-reveal-duration="1s">Контент</div>
```

### Настройки через JavaScript

```javascript
// Глобальные настройки (если реализовано)
window.LINESS_CONFIG = {
    animationDuration: 800,
    scrollOffset: 80,
    enableParallax: true,
    reduceMotion: false
};
```

## Обработка ошибок

### Глобальный обработчик ошибок

```javascript
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // Отправка на сервер мониторинга
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});
```

## Браузерные API

### Поддерживаемые API
- Fetch API
- IntersectionObserver
- RequestAnimationFrame
- CustomEvent
- localStorage
- matchMedia (prefers-reduced-motion)

### Polyfills (если нужны)
Для поддержки старых браузеров могут потребоваться polyfills:
- `fetch` - для IE
- `IntersectionObserver` - для Safari < 12.1
- `CustomEvent` - для IE

## Производительность

### Рекомендации
1. Используйте `requestAnimationFrame` для анимаций
2. Кэшируйте DOM элементы
3. Делегируйте события
4. Используйте IntersectionObserver вместо scroll событий
5. Минимизируйте reflows и repaints

### Метрики
- FPS (кадров в секунду)
- First Contentful Paint
- Time to Interactive
- Total Blocking Time

---

*Версия: 1.0.0* | *Последнее обновление: 2024*