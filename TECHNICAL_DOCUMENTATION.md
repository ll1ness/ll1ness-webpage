# КВАНТОРА Website - Полная техническая документация

**Версия:** 1.0.0  
**Дата:** 2024-2026  
**Лицензия:** MIT  
**Автор:** КВАНТОРА Community (ll1ness)

---

## 1. Общее описание

### 1.1 Назначение проекта

**КВАНТОРА** — это современный, полностью адаптивный веб-сайт для open source сообщества разработчиков. Проект демонстрирует:

- **Цифровые продукты** — создание инструментов, библиотек и платформ
- **Open source инициативы** — коллаборация и совместная разработка
- **Образовательные ресурсы** — документация, гайды, воркшопы
- **Поддержку разработчиков** — консультации, code review, ресурсы

### 1.2 Ключевые функции

#### Визуальные эффекты
- ✅ **Кастомный курсор** — полностью настраиваемый с эффектом следования
- ✅ **Интерактивный фон** — градиентные orb, реагирующие на движения мыши
- ✅ **Параллакс эффекты** — плавные перемещения элементов
- ✅ **Scroll-анимации** — появление контента при прокрутке
- ✅ **Glassmorphism** — современный дизайн с прозрачностью
- ✅ **ASCII арт** — моноширинный баннер сообщества

#### Функциональность
- ✅ **Динамическая загрузка** — JSON-driven контент (услуги, портфолио)
- ✅ **Фильтрация портфолио** — категории: Web, Mobile, Design, Education
- ✅ **Чат-бот** — localStorage с историей сообщений
- ✅ **Адаптивность** — mobile-first, 4 брейкпоинта (480px, 768px, 1024px, 1280px)
- ✅ **Производительность** — GPU ускорение, lazy loading, debouncing

#### Технические особенности
- ✅ **Без сборки** — чистый HTML/CSS/JS, работает сразу
- ✅ **Модульная архитектура** — 33 CSS + 20 JS модулей
- ✅ **Динамические includes** — header/footer через fetch()
- ✅ **Семантический HTML** — доступность и SEO
- ✅ **Без зависимостей** — vanilla JavaScript, нет npm пакетов

### 1.3 Целевая аудитория

- **Разработчики** — участники open source сообщества
- **Контрибьюторы** — желающие внести вклад в проекты
- **Студенты** — начинающие разработчики, ищущие менторство
- **Компании** — партнеры для коллаборации
- **Все интересующиеся** — open source, веб-разработка, образование

---

## 2. Структура проекта

### 2.1 Полная файловая структура

```
квантора-веб/
├── index.html                    # Главная страница (все секции)
├── about.html                    # Страница "О сообществе"
├── services.html                 # Страница "Услуги/Проекты"
├── portfolio.html                # Страница "Портфолио"
├── contact.html                  # Страница "Контакты" + чат
├── blog.html                     # Блог сообщества
├── careers.html                  # Карьера и вакансии
├── privacy.html                  # Политика конфиденциальности
├── terms.html                    # Пользовательское соглашение
├── sitemap.xml                   # Карта сайта для SEO
├── CNAME                         # Настройка кастомного домена
├── .htaccess                     # Apache конфигурация (URL rewriting)
│
├── eofcss3/                      # Модули CSS (33 файла)
│   ├── EOFCSSVariables3.css     # CSS переменные и дизайн-система
│   ├── EOFCSSReset3.css         # Сброс стилей (normalize)
│   ├── EOFcursor3.css           # Кастомный курсор
│   ├── EOFContainer3.css        # Контейнеры и layout
│   ├── EOFNavigation3.css       # Навигация
│   ├── EOFButtons3.css          # Стили кнопок
│   ├── EOFScrollIndicator3.css  # Индикатор скролла
│   ├── EOFSectionStyles3.css    # Базовые стили секций
│   ├── EOFHero3.css             # Hero секция
│   ├── EOFHeroVisual3.css       # Визуальные элементы hero
│   ├── EOFServiceSection3.css   # Секция услуг
│   ├── EOFServiceRect3.css      # Прямоугольные карточки услуг
│   ├── EOFServiceImg3.css       # Изображения услуг
│   ├── EOFPortfolioSection3.css # Секция портфолио
│   ├── EOFPortfolioImg3.css     # Изображения портфолио
│   ├── EOFAboutSection3.css     # Секция "О нас"
│   ├── EOFAboutVisual3.css      # Визуальная часть о нас
│   ├── EOFAboutImg3.css         # Изображения о нас
│   ├── EOFContactSection3.css   # Секция контактов
│   ├── EOFContactLink3.css      # Стили контактных ссылок
│   ├── EOFForm3.css             # Форма контактов
│   ├── EOFFooter3.css           # Футер
│   ├── EOFFooterExtended3.css   # Расширенный футер
│   ├── EOFResponsiveFooter3.css # Адаптивный футер
│   ├── EOFAnimations3.css       # Анимации и transitions
│   ├── EOFResponsive3.css       # Медиа-запросы (4 брейкпоинта)
│   ├── EOFResponsiveChat3.css   # Адаптивный чат
│   ├── EOFUtility3.css          # Утилитарные классы
│   ├── EOFPerformance3.css      # Производительность (will-change)
│   ├── EOFCanvas3.css           # Canvas анимация
│   ├── EOFMouseReactive3.css    # Реактивный фон мыши
│   ├── EOFASCII3.css            # ASCII арт секция
│   ├── EOFChat3.css             # Чат интерфейс
│   ├── EOFGlobalBackground3.css # Глобальный анимированный фон
│
├── eofjs3/                      # Модули JavaScript (20 файлов)
│   ├── EOFInit3.js              # Точка входа (инициализация)
│   ├── EOFcursor3.js            # Кастомный курсор
│   ├── EOFMouseReactive3.js     # Реактивный фон мыши
│   ├── EOFNavigation3.js        # Навигация и плавный скролл
│   ├── EOFScrollReveal3.js      # Анимации появления
│   ├── EOFStatsCounter3.js      # Анимированные счетчики
│   ├── EOFPortfolioFilter3.js   # Фильтрация портфолио
│   ├── EOFPortfolioFilterDynamic3.js # Динамическая фильтрация
│   ├── EOFPortfolioLoader3.js   # Загрузка портфолио из JSON
│   ├── EOFServiceLoader3.js     # Загрузка услуг из JSON
│   ├── EOFContactForm3.js       # Валидация и отправка формы
│   ├── EOFNotification3.js      # Уведомления (toast)
│   ├── EOFParallax3.js          # Параллакс эффект
│   ├── EOFMagnetic3.js          # Магнитные кнопки
│   ├── EOFTextSplit3.js         # Разделение текста для анимаций
│   ├── EOFLazyLoad3.js          # Lazy loading изображений
│   ├── EOFReducedMotion3.js     # Уменьшенное движение (a11y)
│   ├── EOFPerformance3.js       # Оптимизации производительности
│   ├── EOFChat3.js              # Чат с localStorage
│   ├── EOFCanvasAnimation3.js   # Canvas particle анимация
│   ├── EOFGlobalBackground3.js  # Глобальный фон с орбами
│
├── special/                     # Переиспользуемые компоненты
│   ├── header.html              # Навигация (загружается через fetch)
│   └── footer.html              # Футер (загружается через fetch)
│
├── services.json                # Данные услуг (4 категории)
├── portfolio.json               # Данные портфолио (6 проектов)
│
├── icons/                       # Иконки социальных сетей
│   ├── gitflic.svg
│   └── vk.png
│
├── services/                    # Иконки услуг (требуются)
│   ├── opensource.svg
│   ├── collaboration.svg
│   ├── education.svg
│   └── support.svg
│
├── portfolio/                   # Изображения проектов (требуются)
│   ├── project1.jpg
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── project4.jpg
│   ├── project5.jpg
│   └── project6.jpg
│
├── about/                       # Изображения секции "О нас"
│   └── team.jpg
│
├── logo.png                     # Логотип бренда (требуется)
├── favicon.ico                  # Фавикон (уже добавлен)
├── head.png                     # Изображение для Open Graph
│
├── docs/                        # Документация проекта
│   ├── README.md
│   ├── ADAPTATION_SUMMARY.md
│   ├── API_REFERENCE.md
│   ├── ARCHITECTURE.md
│   ├── CSS_MODULES.md
│   ├── DEPLOYMENT.md
│   ├── JS_MODULES.md
│   ├── RESPONSIVE_DESIGN.md
│   └── (этот файл)
│
├── styles.css                   # Оригинальный полный CSS (референс)
├── script.js                    # Оригинальный полный JS (референс)
├── COMPLETE_OVERVIEW.md         # Полное описание реализации
├── PROJECT_STRUCTURE.md         # Структура файлов
├── README.md                    # Основной README
└── TECHNICAL_DOCUMENTATION.md   # Эта документация
```

### 2.2 Назначение ключевых директорий

| Директория | Назначение | Количество файлов |
|------------|------------|-------------------|
| `eofcss3/` | Модульные CSS файлы | 33 |
| `eofjs3/` | Модульные JavaScript файлы | 20 |
| `special/` | Динамические includes (header/footer) | 2 |
| `docs/` | Документация | 9 |
| `services/` | Иконки услуг (нужно добавить) | 4 (ожидаются) |
| `portfolio/` | Изображения проектов (нужно добавить) | 6 (ожидаются) |

### 2.3 Зависимости между файлами

```
index.html
├── CSS: EOFCSSVariables3.css → EOFCSSReset3.css → ... → EOFResponsive3.css
├── JS: EOFInit3.js + все остальные модули (параллельная загрузка)
├── Fetch: special/header.html, special/footer.html
└── Fetch: services.json, portfolio.json (через JS модули)
```

---

## 3. Установка и настройка

### 3.1 Системные требования

**Минимальные требования:**
- Веб-браузер: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- Веб-сервер: Любой HTTP сервер (Apache, Nginx, Python, Node.js)
- Диск: 5 MB свободного места
- Сеть: Для загрузки Google Fonts (Inter)

**Рекомендуемые требования:**
- HTTPS в production
- Gzip/Brotli сжатие включено
- Кэширование статических assets
- CDN для fonts и изображений (опционально)

### 3.2 Локальная установка (0 зависимостей)

#### Способ 1: Прямое открытие файла
```bash
# Просто откройте index.html в браузере
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

⚠️ **Ограничение**: Fetch API требует HTTP/HTTPS сервера из-за CORS политики.

#### Способ 2: Локальный сервер (рекомендуется)

**Python 3:**
```bash
cd /media/maksimian/DATA/projects/ll1ness-webpage
python3 -m http.server 8080
# Откройте http://localhost:8080
```

**Node.js (npx serve):**
```bash
npx serve .
# Откройте http://localhost:3000
```

**PHP:**
```bash
php -S localhost:8000
# Откройте http://localhost:8000
```

**VS Code Live Server:**
- Установите расширение "Live Server"
- Правой кнопкой → "Open with Live Server"

### 3.3 Развертывание на хостинге

#### 3.3.1 Статический хостинг (Netlify, Vercel, GitHub Pages)

**Netlify:**
1. Залейте файлы в репозиторий GitHub
2. Подключите репозиторий в Netlify
3. Build command: (пусто, статический сайт)
4. Publish directory: `/` (корень)
5. Deploy

**Vercel:**
```bash
npm i -g vercel
vercel --prod
```

**GitHub Pages:**
1. Перейдите в Settings → Pages
2. Source: `Deploy from a branch`
3. Branch: `main`, folder: `/ (root)`
4. Save

#### 3.3.2 VPS / Dedicated Server (Apache)

1. **Загрузите файлы** на сервер:
```bash
scp -r ./* user@server:/var/www/квантора/
```

2. **Настройте виртуальный хост** (`/etc/apache2/sites-available/квантора.conf`):
```apache
<VirtualHost *:80>
    ServerName quantora.hopto.org
    DocumentRoot /var/www/квантора

    <Directory /var/www/квантора>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/квантора_error.log
    CustomLog ${APACHE_LOG_DIR}/квантора_access.log combined
</VirtualHost>
```

3. **Включите сайт и перезапустите Apache:**
```bash
sudo a2ensite квантора
sudo systemctl reload apache2
```

4. **Настройте .htaccess** (уже в проекте):
- Скрытие `.html` расширений
- Сжатие gzip
- Кэширование статики
- Безопасность заголовки

#### 3.3.3 Nginx конфигурация

```nginx
server {
    listen 80;
    server_name quantora.hopto.org;
    root /var/www/квантора;
    index index.html;

    # Скрытие .html
    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    # Сжатие
    gzip on;
    gzip_types text/plain text/css text/javascript application/javascript application/json;

    # Кэширование
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Безопасность
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

### 3.4 Конфигурационные файлы

#### 3.4.1 CSS Переменные (`eofcss3/EOFCSSVariables3.css`)

Централизованная дизайн-система:

```css
:root {
    /* Цвета */
    --color-bg: #0a0a0a;
    --color-bg-secondary: #141414;
    --color-bg-tertiary: #1f1f1f;
    --color-text: #ffffff;
    --color-text-secondary: #b0b0b0;
    --color-text-muted: #808080;
    --color-primary: #ffffff;
    --color-secondary: #e0e0e0;
    --color-accent: #000000;

    /* Градиенты */
    --gradient-primary: linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #000000 100%);
    --gradient-dark: linear-gradient(180deg, #0a0a0a 0%, #141414 100%);
    --gradient-semi-blur: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.1) 100%);

    /* Glass effect */
    --glass-bg: rgba(0, 0, 0, 0.3);
    --glass-border: rgba(255, 255, 255, 0.1);

    /* Тени */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 8px 32px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 16px 64px rgba(0, 0, 0, 0.5);

    /* Радиусы */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 20px;
    --radius-xl: 32px;

    /* Транзишены */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;

    /* Шрифты */
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

**Кастомизация:** Измените значения в `:root` для адаптации под ваш бренд.

#### 3.4.2 Данные (`services.json`, `portfolio.json`)

**services.json** — категории проектов:
```json
[
  {
    "id": "opensource",
    "title": "Open Source Проекты",
    "description": "Создаём и поддерживаем открытые проекты для сообщества",
    "image": "services/opensource.svg",
    "tags": ["GitHub", "Community", "Free"]
  }
]
```

**portfolio.json** — конкретные проекты:
```json
[
  {
    "id": 1,
    "title": "Community Dashboard",
    "category": "opensource",
    "description": "Открытая панель управления для локальных сообществ",
    "image": "portfolio/project1.jpg",
    "link": "https://github.com/kvantora/community-dashboard"
  }
]
```

### 3.5 Переменные окружения

Проект **не требует** переменных окружения. Все настройки через:
- CSS переменные (дизайн)
- JSON файлы (контент)
- HTML (мета-теги, ссылки)

**SEO настройки** (в `index.html`):
```html
<meta name="description" content="КВАНТОРА - Сообщество разработчиков...">
<meta name="keywords" content="КВАНТОРА, open source, разработка...">
<meta property="og:title" content="КВАНТОРА - Разработка цифровых проектов">
<link rel="canonical" href="https://quantora.hopto.org/">
```

### 3.6 Добавление недостающих ресурсов

#### Изображения услуг (4 SVG иконки, 56x56px)
```
services/
├── opensource.svg      # Иконка GitHub/Open Source
├── collaboration.svg   # Иконка команды/сотрудничества
├── education.svg       # Иконка образования/книги
└── support.svg         # Иконка поддержки/сердечка
```

#### Изображения портфолио (6 изображений, 800x600px)
```
portfolio/
├── project1.jpg
├── project2.jpg
├── project3.jpg
├── project4.jpg
├── project5.jpg
└── project6.jpg
```

#### Логотип
- `logo.png` — 200x60px (рекомендуется, PNG с прозрачностью)

---

## 4. Использование

### 4.1 Запуск проекта

#### Локальный запуск
```bash
# Python 3
python3 -m http.server 8080

# Или Node.js
npx serve .

# Откройте браузер
http://localhost:8080
```

#### Production запуск
1. Загрузите все файлы на хостинг
2. Убедитесь, что `.htaccess` (Apache) или `nginx.conf` настроены
3. Откройте домен: `https://quantora.hopto.org`

### 4.2 Навигация по сайту

#### Главная страница (`index.html`)

**Секции:**
1. **Hero** — анимированный фон, заголовок, CTA кнопки
2. **ASCII Art** — баннер "КВАНТОРА" в ASCII
3. **Portfolio** — фильтруемая сетка проектов
4. **About** — статистика с анимированными счетчиками
5. **Contact** — форма + чат-бот
6. **Footer** — навигация, ссылки, юридическая информация

**Интерактивные элементы:**
- Кастомный курсор (следует за мышью)
- Фон с градиентными orb (реагирует на движение мыши)
- Параллакс эффекты на скролле
- Фильтры портфолио (Все, Веб, Мобильные, Дизайн)
- Чат-бот с историей в localStorage

### 4.3 Работа с чат-ботом

**Функции:**
- Отправка сообщений по Enter или кнопке
- Автоматические ответы бота (симуляция)
- История сохраняется в `localStorage` (ключ: `kvantora_chat`)
- Прокрутка к чату при клике на триггер

**Использование:**
1. Откройте `contact.html` или проскролльте до секции контактов
2. Введите сообщение в поле ввода
3. Нажмите Enter или кнопку отправки
4. Бот ответит через 1 секунду

**Данные хранятся в браузере:**
```javascript
// Просмотр истории
localStorage.getItem('kvantora_chat')
// Очистка
localStorage.removeItem('kvantora_chat')
```

### 4.4 Фильтрация портфолио

**Кнопки фильтров:**
- `Все` — показывает все 6 проектов
- `Веб` — только категория "web"
- `Мобильные` — только "mobile"
- `Дизайн` — только "design"

**Категории в `portfolio.json`:**
```json
{
  "category": "opensource",  // или "web", "mobile", "design", "education", "collaboration"
  "title": "Community Dashboard",
  "description": "...",
  "image": "portfolio/project1.jpg",
  "link": "https://github.com/..."
}
```

### 4.5 Кастомизация контента

#### Изменение текста
Прямо в HTML файлах:
- `index.html` — основной контент
- `about.html` — страница "О нас"
- `services.html` — страница услуг
- `portfolio.html` — страница портфолио
- `contact.html` — страница контактов

#### Изменение данных (JSON)
- `services.json` — редактируйте массив объектов услуг
- `portfolio.json` — редактируйте массив проектов

#### Изменение дизайна
- Все стили в `eofcss3/` модулях
- Основные переменные в `EOFCSSVariables3.css`
- Анимации в `EOFAnimations3.css`

### 4.6 Добавление новой страницы

1. **Создайте HTML файл** (например, `team.html`):
```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Команда - КВАНТОРА</title>
    <!-- Подключите нужные CSS модули -->
    <link rel="stylesheet" href="eofcss3/EOFCSSVariables3.css">
    <link rel="stylesheet" href="eofcss3/EOFCSSReset3.css">
    <link rel="stylesheet" href="eofcss3/EOFNavigation3.css">
    <!-- ... -->
</head>
<body>
    <div class="header-include"></div>
    
    <!-- Ваш контент -->
    <section class="your-section">
        <div class="container">
            <h1>Наша команда</h1>
            <!-- ... -->
        </div>
    </section>
    
    <div class="footer-include"></div>
    
    <!-- Подключите нужные JS модули -->
    <script src="eofjs3/EOFInit3.js"></script>
    <!-- ... -->
    <script>
        // Загрузка header/footer
        fetch('special/header.html').then(r => r.text()).then(html => {
            document.querySelector('.header-include').innerHTML = html;
        });
        fetch('special/footer.html').then(r => r.text()).then(html => {
            document.querySelector('.footer-include').innerHTML = html;
        });
    </script>
</body>
</html>
```

2. **Добавьте ссылку в навигацию** (`special/header.html`):
```html
<li><a href="team.html" class="nav-link">Команда</a></li>
```

3. **Протестируйте** на локальном сервере.

---

## 5. API Reference

### 5.1 Глобальные объекты

#### `window.KVANTORA` (namespace)

Основной namespace для всех модулей (автоматически создаётся в `EOFInit3.js`):

```javascript
window.KVANTORA = {
    cursor: CustomCursor,
    navigation: Navigation,
    background: GlobalBackground,
    chat: ChatBot,
    // ... все модули
};
```

### 5.2 CSS Переменные (Design System)

Все переменные в `eofcss3/EOFCSSVariables3.css`:

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

### 5.3 JavaScript Классы

#### CustomCursor (`eofjs3/EOFcursor3.js`)

**Описание:** Управление кастомным курсором

**Конструктор:**
```javascript
const cursor = new CustomCursor();
```

**Методы:**
- `init()` — инициализация (автоматически)
- `destroy()` — очистка событий

**Свойства:**
- `cursor` — DOM элемент `.cursor`
- `cursorFollower` — DOM элемент `.cursor-follower`
- `mouseX`, `mouseY` — позиция мыши
- `cursorX`, `cursorY` — позиция курсора (интерполированная)
- `followerX`, `followerY` — позиция фолловера

**Пример:**
```javascript
// Автоматическая инициализация при загрузке
// Ручная инициализация:
const customCursor = new CustomCursor();
```

**CSS кастомизация:**
```css
.cursor {
    width: 8px;
    height: 8px;
    background: var(--color-primary);
    mix-blend-mode: difference;
}
.cursor-follower {
    width: 40px;
    height: 40px;
    border: 1px solid var(--color-primary);
    opacity: 0.5;
}
```

---

#### Navigation (`eofjs3/EOFNavigation3.js`)

**Описание:** Управление навигацией и плавным скроллом

**Конструктор:**
```javascript
const nav = new Navigation();
```

**Методы:**
- `init()` — инициализация (автоматически)
- `handleScroll()` — обработка скролла (добавляет класс `scrolled`)
- `toggleMenu()` — переключение мобильного меню
- `closeMenu()` — закрытие меню
- `smoothScrollTo(target, offset = 80)` — плавный скролл к элементу

**События:**
- `scroll` на `window` — добавление/удаление класса `scrolled`
- `click` на `nav-toggle` — открытие/закрытие меню
- `click` на `nav-links` — закрытие меню и скролл

**Пример:**
```javascript
// Плавный скролл к контактам
nav.smoothScrollTo(document.getElementById('contact'), 80);

// Закрыть меню программно
nav.closeMenu();
```

**HTML структура:**
```html
<nav class="nav">
    <div class="nav-container">
        <a href="index.html" class="nav-logo">КВАНТОРА</a>
        <ul class="nav-menu">
            <li><a href="#hero" class="nav-link">Главная</a></li>
            <!-- ... -->
        </ul>
        <button class="nav-toggle" aria-label="Toggle menu">
            <span></span><span></span><span></span>
        </button>
    </div>
</nav>
```

---

#### GlobalBackground (`eofjs3/EOFGlobalBackground3.js`)

**Описание:** Интерактивный фон с градиентными orb

**Конструктор:**
```javascript
const background = new GlobalBackground();
```

**Свойства:**
- `container` — контейнер `.global-background`
- `orbs` — массив из 5 объектов orb
- `mouseX`, `mouseY` — текущая позиция мыши
- `targetMouseX`, `targetMouseY` — целевая позиция (интерполяция)

**Методы:**
- `init()` — создание контейнера и orb
- `createContainer()` — создание и добавление контейнера
- `createOrbs()` — создание 5 orb с разными параметрами
- `bindEvents()` — привязка mousemove, keydown, click, touchmove
- `startAnimation()` — запуск requestAnimationFrame цикла
- `updateOrbs()` — обновление позиций orb (интерполяция)
- `createRipple(key)` — ripple эффект при нажатии клавиш
- `createBurst(x, y)` — burst частиц при клике

**Интерактивные состояния:**
- `.mouse-active` — добавляется при движении мыши
- `.keyboard-press` — добавляется к body при нажатии клавиш

**Пример кастомизации:**
```javascript
// Изменить скорость анимации (нужно модифицировать код)
// В методе createOrbs:
orb.speed = 0.02; // по умолчанию 0.03

// Изменить цвета через CSS:
// .bg-orb-1 { background: radial-gradient(circle, rgba(255,0,0,0.6) 0%, transparent 70%); }
```

---

#### ScrollReveal (`eofjs3/EOFScrollReveal3.js`)

**Описание:** Анимации появления при скролле

**Конструктор:**
```javascript
const reveal = new ScrollReveal();
```

**Методы:**
- `init()` — инициализация (автоматически)
- `observe()` — начало наблюдения за элементами
- `unobserve()` — прекращение наблюдения

**HTML:**
```html
<div class="reveal">Контент, который появится при скролле</div>
```

**CSS (из `EOFAnimations3.css`):**
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

**Настройки через CSS:**
```css
.reveal {
    --reveal-offset: 40px;
    --reveal-duration: 0.8s;
    --reveal-easing: ease;
}
```

**Доступность:** Уважает `prefers-reduced-motion`.

---

#### ProjectLoader (`eofjs3/EOFServiceLoader3.js`)

**Описание:** Загрузка и рендеринг услуг/проектов из JSON

**Конструктор:**
```javascript
const projectLoader = new ProjectLoader();
```

**Методы:**
- `init()` — инициализация (автоматически)
- `load()` — загрузка данных из `services.json`
- `render(services)` — рендеринг карточек
- `onError(error)` — обработка ошибок

**HTML:**
```html
<div class="services-grid" id="servicesGrid"></div>
```

**JSON формат (`services.json`):**
```json
[
  {
    "id": "opensource",
    "title": "Open Source Проекты",
    "description": "Создаём и поддерживаем открытые проекты",
    "image": "services/opensource.svg",
    "tags": ["GitHub", "Community", "Free"]
  }
]
```

**События:**
- `services:loaded` — когда данные загружены
- `services:error` — при ошибке загрузки

**Пример:**
```javascript
const loader = new ProjectLoader();
loader.load().then(() => {
    console.log('Услуги загружены');
});
```

---

#### PortfolioLoader (`eofjs3/EOFPortfolioLoader3.js`)

**Описание:** Загрузка и рендеринг портфолио проектов

**Конструктор:**
```javascript
const portfolioLoader = new PortfolioLoader();
```

**Методы:**
- `init()` — инициализация (автоматически)
- `load()` — загрузка данных из `portfolio.json`
- `render(portfolio)` — рендеринг элементов
- `onError(error)` — обработка ошибок

**HTML:**
```html
<div class="portfolio-grid" id="portfolioGrid"></div>
```

**JSON формат (`portfolio.json`):**
```json
[
  {
    "id": 1,
    "title": "Community Dashboard",
    "category": "opensource",
    "description": "Открытая панель управления",
    "image": "portfolio/project1.jpg",
    "link": "https://github.com/kvantora/community-dashboard"
  }
]
```

**События:**
- `portfolio:loaded`
- `portfolio:error`

---

#### PortfolioFilter (`eofjs3/EOFPortfolioFilterDynamic3.js`)

**Описание:** Динамическая фильтрация проектов

**Конструктор:**
```javascript
const filter = new PortfolioFilter();
```

**Методы:**
- `init()` — инициализация (автоматически)
- `filter(category)` — фильтрация по категории
- `getActiveFilter()` — возвращает текущий активный фильтр

**HTML:**
```html
<div class="portfolio-filters">
    <button class="filter-btn active" data-filter="all">Все</button>
    <button class="filter-btn" data-filter="web">Веб</button>
    <button class="filter-btn" data-filter="mobile">Мобильные</button>
    <button class="filter-btn" data-filter="design">Дизайн</button>
</div>
```

**События:**
- `portfolio:filter` — при изменении фильтра
- `portfolio:filtered` — после завершения фильтрации

**Пример:**
```javascript
// Программная фильтрация
filter.filter('opensource');

// Получить текущий фильтр
const current = filter.getActiveFilter(); // "web"
```

---

#### StatsCounter (`eofjs3/EOFStatsCounter3.js`)

**Описание:** Анимированные счетчики статистики

**Конструктор:**
```javascript
const stats = new StatsCounter();
```

**Методы:**
- `init()` — инициализация (автоматически)
- `animate(element, target, duration)` — анимация одного счетчика
- `reset()` — сброс всех счетчиков

**HTML:**
```html
<div class="stat-item">
    <div class="stat-number" data-target="150">0</div>
    <div class="stat-label">Проектов</div>
</div>
```

**Атрибуты:**
- `data-target` — конечное значение (обязательно)
- `data-duration` — длительность в ms (по умолчанию 2000)
- `data-start` — начальное значение (по умолчанию 0)
- `data-prefix` — префикс (например, "+")
- `data-suffix` — суффикс (например, " проектов")

**Пример:**
```html
<div class="stat-number" data-target="500" data-duration="3000" data-prefix="+" data-suffix=" участников">
    0
</div>
```

**События:**
- `stats:complete` — когда все счетчики завершены

---

#### ContactForm (`eofjs3/EOFContactForm3.js`)

**Описание:** Валидация и отправка контактной формы

**Конструктор:**
```javascript
const contactForm = new ContactForm();
```

**Методы:**
- `init()` — инициализация (автоматически)
- `validate()` — валидация формы
- `submit()` — отправка данных
- `reset()` — сброс формы

**HTML:**
```html
<form class="contact-form">
    <input type="text" name="name" required placeholder="Ваше имя">
    <input type="email" name="email" required placeholder="Email">
    <textarea name="message" required placeholder="Сообщение"></textarea>
    <button type="submit">Отправить</button>
</form>
```

**Валидация:**
- Обязательные поля: `required`
- Email: стандартная HTML5 валидация + дополнительная проверка
- Минимальная длина сообщения: 10 символов

**События:**
- `form:valid` — при успешной валидации
- `form:invalid` — при ошибке валидации
- `form:submitted` — после отправки
- `form:success` — при успешной отправке (симуляция)
- `form:error` — при ошибке отправки

**Пример:**
```javascript
const form = new ContactForm();

document.querySelector('.contact-form').addEventListener('form:success', (e) => {
    console.log('Форма отправлена');
    Notification.success('Спасибо! Мы ответим в ближайшее время.');
});

document.querySelector('.contact-form').addEventListener('form:error', (e) => {
    console.error('Ошибка отправки');
    Notification.error('Произошла ошибка. Попробуйте позже.');
});
```

**Примечание:** Форма симулирует отправку (нет бэкенда). Для реальной отправки замените метод `submit()` на fetch к вашему API.

---

#### ChatBot (`eofjs3/EOFChat3.js`)

**Описание:** Чат-бот с localStorage

**Конструктор:**
```javascript
const chat = new ChatBot();
```

**Методы:**
- `init()` — инициализация (автоматически)
- `sendMessage(text)` — отправка сообщения
- `getResponse(message)` — генерация ответа (симуляция)
- `saveHistory()` — сохранение в localStorage
- `loadHistory()` — загрузка из localStorage
- `clearHistory()` — очистка истории

**HTML:**
```html
<div class="chat-container" id="chatContainer">
    <div class="chat-header">
        <div class="chat-avatar">🤖</div>
        <div class="chat-header-info">
            <h4>КВАНТОРА Support</h4>
            <p>Мы онлайн и готовы помочь</p>
        </div>
        <div class="chat-status"></div>
    </div>
    <div class="chat-messages" id="chatMessages"></div>
    <div class="chat-input-area">
        <input type="text" class="chat-input" id="chatInput" placeholder="Введите сообщение...">
        <button class="chat-send" id="chatSend">➤</button>
    </div>
</div>
```

**Хранение данных:**
- Ключ: `kvantora_chat`
- Формат: JSON массив объектов `{ text, sender, time }`
- Пример:
```json
[
  {
    "text": "Привет!",
    "sender": "user",
    "time": "14:30"
  },
  {
    "text": "Спасибо за сообщение!",
    "sender": "bot",
    "time": "14:30"
  }
]
```

**События:**
- `chat:message` — при получении сообщения
- `chat:response` — при ответе бота
- `chat:cleared` — при очистке истории

**Пример:**
```javascript
const chat = new ChatBot();

// Отправить сообщение программно
chat.sendMessage('Привет!');

// Очистить историю
chat.clearHistory();

// Получить историю
const history = JSON.parse(localStorage.getItem('kvantora_chat') || '[]');
```

**Интеграция с AppWrite:** Замените метод `getResponse()` на API вызов к AppWrite Functions.

---

### 5.4 Утилитарные функции

#### Notification (`eofjs3/EOFNotification3.js`)

**Описание:** Toast уведомления

**Методы:**
```javascript
Notification.success('Успешно!');
Notification.error('Ошибка!');
Notification.warning('Внимание!');
Notification.info('Информация');
```

**Пример:**
```javascript
Notification.success('Форма отправлена!');
```

---

#### Parallax (`eofjs3/EOFParallax3.js`)

**Описание:** Параллакс эффект для элементов

**Использование:**
```html
<div class="parallax-element" data-speed="0.5">
    Контент с параллаксом
</div>
```

**Атрибут:**
- `data-speed` — скорость параллакса (0.1 - 1.0)

---

#### Magnetic (`eofjs3/EOFMagnetic3.js`)

**Описание:** Магнитные кнопки

**Использование:**
```html
<button class="magnetic-btn">Нажми меня</button>
```

**CSS:**
```css
.magnetic-btn {
    transition: transform 0.3s ease;
}
```

---

### 5.5 События (Events)

Проект использует CustomEvent для коммуникации между модулями:

```javascript
// Отправка события
document.dispatchEvent(new CustomEvent('portfolio:filter', {
    detail: { category: 'web' }
}));

// Прослушивание
document.addEventListener('portfolio:filtered', (e) => {
    console.log('Фильтрация завершена', e.detail);
});
```

**Доступные события:**
- `services:loaded`
- `services:error`
- `portfolio:loaded`
- `portfolio:error`
- `portfolio:filter`
- `portfolio:filtered`
- `stats:complete`
- `form:valid`
- `form:invalid`
- `form:submitted`
- `form:success`
- `form:error`
- `chat:message`
- `chat:response`
- `chat:cleared`

---

## 6. Архитектура и дизайн

### 6.1 Архитектурные паттерны

#### 1. Модульная архитектура

Каждый CSS и JS файл — независимый модуль с единственной ответственностью:

```
eofcss3/
├── EOFCSSVariables3.css     # Дизайн-система (переменные)
├── EOFCSSReset3.css         # Сброс стилей
├── EOFcursor3.css           # Только кастомный курсор
├── EOFNavigation3.css       # Только навигация
└── ... (остальные модули)

eofjs3/
├── EOFcursor3.js            # Только курсор
├── EOFNavigation3.js        # Только навигация
├── EOFPortfolioLoader3.js   # Только загрузка портфолио
└── ... (остальные модули)
```

**Преимущества:**
- Легко добавлять/удалять функциональность
- Минимальные зависимости
- Параллельная разработка
- Простое тестирование

#### 2. Progressive Enhancement

Базовый HTML работает без JavaScript:
- Контент виден сразу
- Форма работает (без валидации)
- Навигация работает (без плавного скролла)

JavaScript добавляет:
- Анимации
- Динамическую загрузку
- Интерактивность
- Кастомный курсор

#### 3. Mobile-First

CSS пишется для мобильных, затем расширяется для десктопа:
```css
/* Mobile (default) */
.container { padding: 0 16px; }

/* Tablet */
@media (min-width: 768px) {
    .container { padding: 0 24px; }
}

/* Desktop */
@media (min-width: 1024px) {
    .container { max-width: 1200px; }
}
```

#### 4. Component-Based

Переиспользуемые компоненты:
- `special/header.html` — включается на всех страницах
- `special/footer.html` — включается на всех страницах
- `.service-card` — повторяется для каждой услуги
- `.portfolio-item` — повторяется для каждого проекта

### 6.2 CSS Архитектура

#### Иерархия загрузки

1. `EOFCSSVariables3.css` — переменные (самый первый)
2. `EOFCSSReset3.css` — сброс стилей
3. `EOFCSSReset3.css` — базовые стили
4. `EOFcursor3.css` — кастомный курсор
5. `EOFNavigation3.css` — навигация
6. `EOFContainer3.css` — контейнеры
7. `EOFSectionStyles3.css` — базовые секции
8. **Модульные CSS** — специфичные компоненты
9. `EOFAnimations3.css` — анимации
10. `EOFResponsive3.css` — медиа-запросы
11. `EOFUtility3.css` — утилиты
12. `EOFPerformance3.css` — производительность

#### BEM-подобная номенклатура

```css
/* Блок */
.nav { }

/* Элемент блока */
.nav-menu { }
.nav-link { }
.nav-toggle { }

/* Модификатор */
.nav-menu.active { }
.nav-link:hover { }

/* Состояние */
.service-card:hover { }
.portfolio-item.active { }
```

#### Дизайн-система

Все значения через CSS переменные:
```css
.button {
    background: var(--color-primary);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    transition: var(--transition-normal);
}
```

### 6.3 JavaScript Архитектура

#### Модульная система

Каждый модуль:
1. Проверяет наличие нужных DOM элементов
2. Кэширует элементы
3. Привязывает события
4. Инициализируется автоматически

**Пример структуры модуля:**
```javascript
// EOFExample3.js
class ExampleModule {
    constructor() {
        this.init();
    }

    init() {
        if (!this.shouldInitialize()) return;
        this.cacheElements();
        this.bindEvents();
    }

    shouldInitialize() {
        return document.querySelector('.example-container') !== null;
    }

    cacheElements() {
        this.container = document.querySelector('.example-container');
        this.items = document.querySelectorAll('.example-item');
    }

    bindEvents() {
        this.container.addEventListener('click', this.handleClick.bind(this));
    }

    handleClick(e) {
        // Обработчик
    }
}

// Автоматическая инициализация
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new ExampleModule());
} else {
    new ExampleModule();
}
```

#### Глобальный namespace

Все модули доступны через `window.KVANTORA`:
```javascript
// В EOFInit3.js
window.KVANTORA = {
    cursor: null,
    navigation: null,
    // ...
};

// В других модулях
window.KVANTORA.cursor = new CustomCursor();
```

#### Обработка динамического контента

Header/Footer загружаются через fetch:
```javascript
fetch('special/header.html')
    .then(r => r.text())
    .then(html => {
        document.querySelector('.header-include').innerHTML = html;
        // После загрузки инициализируем навигацию
        initNavigation();
    });
```

### 6.4 Производительность

#### Оптимизации CSS
- `will-change` для анимируемых свойств
- `transform` вместо `top/left` (GPU ускорение)
- `opacity` вместо `display` для плавности
- Минимальные перерисовки

#### Оптимизации JS
- Кэширование DOM элементов
- `requestAnimationFrame` для анимаций
- Debounced scroll события (16ms)
- Intersection Observer для lazy анимаций
- `loading="lazy"` для изображений

#### Метрики (Lighthouse)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Performance score: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

### 6.5 Доступность (a11y)

- Семантический HTML (`<nav>`, `<section>`, `<footer>`)
- ARIA атрибуты (`aria-label`, `aria-hidden`)
- Клавиатурная навигация
- `prefers-reduced-motion` поддержка
- Достаточный цветовой контраст
- Фокус-менеджмент

**Пример:**
```html
<button class="nav-toggle" aria-label="Toggle menu">
    <span></span><span></span><span></span>
</button>
```

---

## 7. Примеры кода

### 7.1 Создание нового модуля JavaScript

**Файл:** `eofjs3/EOFMyModule3.js`

```javascript
// ===== MyModule =====

class MyModule {
    constructor() {
        this.init();
    }

    init() {
        if (!this.shouldInitialize()) {
            console.log('MyModule: Required elements not found');
            return;
        }

        this.cacheElements();
        this.bindEvents();
        console.log('MyModule initialized');
    }

    shouldInitialize() {
        return document.querySelector('.my-module-container') !== null;
    }

    cacheElements() {
        this.container = document.querySelector('.my-module-container');
        this.buttons = this.container.querySelectorAll('.my-button');
    }

    bindEvents() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', this.handleClick.bind(this));
        });
    }

    handleClick(e) {
        e.preventDefault();
        const button = e.currentTarget;
        const action = button.dataset.action;

        this.performAction(action);
    }

    performAction(action) {
        switch(action) {
            case 'submit':
                this.submit();
                break;
            case 'reset':
                this.reset();
                break;
            default:
                console.warn('Unknown action:', action);
        }
    }

    submit() {
        // Логика отправки
        console.log('Submitting...');
    }

    reset() {
        // Сброс формы
        console.log('Resetting...');
    }
}

// Автоматическая инициализация
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new MyModule());
} else {
    new MyModule();
}
```

**Подключение в HTML:**
```html
<script src="eofjs3/EOFMyModule3.js"></script>
```

---

### 7.2 Динамическая загрузка данных с обработкой ошибок

```javascript
async function loadData(url, container) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        
        // Рендеринг
        container.innerHTML = data.map(item => `
            <div class="item">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');

        return data;

    } catch (error) {
        console.error('Failed to load data:', error);
        
        // Пользовательское уведомление
        container.innerHTML = `
            <div class="error-message">
                <p>Не удалось загрузить данные</p>
                <button onclick="location.reload()">Попробовать снова</button>
            </div>
        `;
        
        // Отправка события
        document.dispatchEvent(new CustomEvent('data:load:error', {
            detail: { error, url }
        }));
    }
}

// Использование
loadData('services.json', document.getElementById('servicesGrid'));
```

---

### 7.3 Создание кастомного CSS-градиента

```css
/* В EOFCSSVariables3.css добавьте: */
--gradient-mesh: 
    radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%);

/* Использование: */
.hero {
    background: var(--gradient-mesh), var(--gradient-dark);
}
```

---

### 7.4 Интеграция AppWrite вместо localStorage

**Файл:** `eofjs3/EOFChat3.js` (модифицированный)

```javascript
// Инициализация AppWrite
import { Client, Account, ID, Query } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('your-project-id');

const account = new Account(client);
const databases = new Databases(client);

class ChatBot {
    constructor() {
        this.databaseId = 'your-database-id';
        this.collectionId = 'chat-messages';
        this.userId = this.getUserId();
    }

    async sendMessage(text) {
        try {
            // Сохраняем сообщение пользователя
            await databases.createDocument(
                this.databaseId,
                this.collectionId,
                ID.unique(),
                {
                    userId: this.userId,
                    text: text,
                    sender: 'user',
                    timestamp: new Date().toISOString()
                }
            );

            // Получаем ответ от бота (через Cloud Function)
            const response = await this.getBotResponse(text);
            
            // Сохраняем ответ бота
            await databases.createDocument(
                this.databaseId,
                this.collectionId,
                ID.unique(),
                {
                    userId: 'bot',
                    text: response,
                    sender: 'bot',
                    timestamp: new Date().toISOString()
                }
            );

            // Обновляем UI
            this.loadHistory();

        } catch (error) {
            console.error('AppWrite error:', error);
        }
    }

    async loadHistory() {
        try {
            const response = await databases.listDocuments(
                this.databaseId,
                this.collectionId,
                [
                    Query.equal('userId', this.userId),
                    Query.orderAsc('timestamp'),
                    Query.limit(50)
                ]
            );

            const messages = response.documents.map(doc => ({
                text: doc.text,
                sender: doc.sender,
                time: new Date(doc.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
            }));

            this.renderMessages(messages);

        } catch (error) {
            console.error('Failed to load chat history:', error);
        }
    }

    getUserId() {
        // Получите или создайте анонимного пользователя AppWrite
        try {
            const user = account.get();
            return user.$id;
        } catch {
            // Создайте анонимного пользователя
            return 'anonymous-' + Math.random().toString(36).substr(2, 9);
        }
    }

    async getBotResponse(message) {
        // Вызов Cloud Function
        const response = await fetch('https://your-appwrite-function-url', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        return data.response;
    }
}
```

---

### 7.5 Добавление нового фильтра портфолио

**1. Добавьте кнопку фильтра** (в `index.html` или `portfolio.html`):
```html
<div class="portfolio-filters">
    <button class="filter-btn active" data-filter="all">Все</button>
    <button class="filter-btn" data-filter="web">Веб</button>
    <button class="filter-btn" data-filter="mobile">Мобильные</button>
    <button class="filter-btn" data-filter="design">Дизайн</button>
    <button class="filter-btn" data-filter="education">Образование</button> <!-- Новый -->
</div>
```

**2. Добавьте проекты с новой категорией** (в `portfolio.json`):
```json
{
  "id": 7,
  "title": "Interactive Course Platform",
  "category": "education",
  "description": "Платформа для интерактивных курсов",
  "image": "portfolio/project7.jpg",
  "link": "https://github.com/kvantora/course-platform"
}
```

**3. Обновите фильтры в `eofjs3/EOFPortfolioFilterDynamic3.js`** (если нужно):
```javascript
// Может потребоваться обновление логики, если есть специальные правила
```

---

### 7.6 Создание новой страницы с динамическими данными

**Файл:** `team.html`

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Команда - КВАНТОРА</title>
    <link rel="stylesheet" href="eofcss3/EOFCSSVariables3.css">
    <link rel="stylesheet" href="eofcss3/EOFCSSReset3.css">
    <link rel="stylesheet" href="eofcss3/EOFNavigation3.css">
    <link rel="stylesheet" href="eofcss3/EOFContainer3.css">
    <link rel="stylesheet" href="eofcss3/EOFSectionStyles3.css">
    <link rel="stylesheet" href="eofcss3/EOFButtons3.css">
    <link rel="stylesheet" href="eofcss3/EOFResponsive3.css">
    <link rel="stylesheet" href="eofcss3/EOFAnimations3.css">
</head>
<body>
    <div class="cursor"></div>
    <div class="cursor-follower"></div>
    <div class="header-include"></div>

    <section class="page-hero">
        <div class="container">
            <h1 class="reveal">Наша команда</h1>
            <p class="reveal">Талантливые разработчики, дизайнеры и стратеги</p>
        </div>
    </section>

    <section class="team-section">
        <div class="container">
            <div class="team-grid" id="teamGrid">
                <!-- Команда загрузится через JS -->
            </div>
        </div>
    </section>

    <div class="footer-include"></div>

    <script src="eofjs3/EOFInit3.js"></script>
    <script src="eofjs3/EOFcursor3.js"></script>
    <script src="eofjs3/EOFNavigation3.js"></script>
    <script src="eofjs3/EOFScrollReveal3.js"></script>
    <script>
        // Загрузка команды
        async function loadTeam() {
            try {
                const response = await fetch('team.json');
                const team = await response.json();
                const grid = document.getElementById('teamGrid');

                grid.innerHTML = team.map(member => `
                    <div class="team-card reveal">
                        <div class="team-avatar">
                            <img src="${member.avatar}" alt="${member.name}" loading="lazy">
                        </div>
                        <h3>${member.name}</h3>
                        <p class="team-role">${member.role}</p>
                        <p class="team-bio">${member.bio}</p>
                        <div class="team-social">
                            ${member.social ? member.social.map(link => `
                                <a href="${link.url}" target="_blank" rel="noopener">
                                    ${link.icon}
                                </a>
                            `).join('') : ''}
                        </div>
                    </div>
                `).join('');

                // Перезапустить ScrollReveal для новых элементов
                const newReveals = grid.querySelectorAll('.reveal');
                newReveals.forEach(el => revealObserver.observe(el));

            } catch (error) {
                console.error('Failed to load team:', error);
            }
        }

        loadTeam();

        // Загрузка header/footer
        fetch('special/header.html').then(r => r.text()).then(html => {
            document.querySelector('.header-include').innerHTML = html;
        });
        fetch('special/footer.html').then(r => r.text()).then(html => {
            document.querySelector('.footer-include').innerHTML = html;
        });
    </script>
</body>
</html>
```

**Файл:** `team.json`
```json
[
  {
    "name": "Иван Иванов",
    "role": "Frontend Developer",
    "bio": "Специализируется на React и Vue.js",
    "avatar": "team/ivan.jpg",
    "social": [
      { "url": "https://github.com/ivan", "icon": "🐙" },
      { "url": "https://linkedin.com/in/ivan", "icon": "💼" }
    ]
  }
]
```

---

## 8. Тестирование

### 8.1 Типы тестирования

#### 1. Визуальное тестирование (Visual Testing)

**Что проверять:**
- Корректность отображения на всех брейкпоинтах
- Анимации и transitions
- Цвета и типографика
- Выравнивание элементов

**Инструменты:**
- Chrome DevTools Device Toolbar (F12)
- Firefox Responsive Design Mode
- Safari Responsive Design Mode

**Брейкпоинты:**
- 480px (маленький мобильный)
- 768px (мобильный landscape / планшет)
- 1024px (планшет)
- 1280px (десктоп)
- 1920px (большой десктоп)

#### 2. Функциональное тестирование

**Чек-лист:**
- [ ] Кастомный курсор следует за мышью
- [ ] Курсор увеличивается при наведении на интерактивные элементы
- [ ] Навигация работает (ссылки ведут на правильные страницы)
- [ ] Плавный скролл к якорям
- [ ] Мобильное меню открывается/закрывается
- [ ] Фильтры портфолио фильтруют проекты
- [ ] Форма контактов валидирует поля
- [ ] Чат-бот отправляет сообщения
- [ ] История чата сохраняется в localStorage
- [ ] Статистика анимируется при скролле
- [ ] Header/Footer загружаются динамически
- [ ] JSON данные загружаются корректно

#### 3. Производительность (Performance Testing)

**Инструменты:**
- Lighthouse (Chrome DevTools)
- WebPageTest
- GTmetrix

**Метрики (целевые):**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

**Оптимизации (если нужно):**
- Минифицировать CSS/JS
- Оптимизировать изображения (WebP, AVIF)
- Включить gzip/brotli сжатие
- Настроить кэширование
- Использовать CDN

#### 4. Доступность (Accessibility Testing)

**Инструменты:**
- Lighthouse Accessibility audit
- axe DevTools
- WAVE Evaluation Tool

**Чек-лист:**
- [ ] Все изображения имеют `alt` атрибуты
- [ ] Кнопки и ссылки доступны с клавиатуры (Tab)
- [ ] Фокус виден (outline)
- [ ] Семантические теги (`<nav>`, `<main>`, `<footer>`)
- [ ] ARIA атрибуты где нужно
- [ ] Контрастность текста > 4.5:1
- [ ] `prefers-reduced-motion` поддерживается

#### 5. Кросс-браузерное тестирование

**Браузеры:**
- Chrome (последняя версия)
- Firefox (последняя версия)
- Safari 14+
- Edge (последняя версия)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

**Что проверять:**
- CSS Grid/Flexbox поддержка
- CSS переменные
- Fetch API
- Intersection Observer
- `prefers-reduced-motion`
- `loading="lazy"`

---

### 8.2 Запуск тестов

Проект **не включает** автоматические тесты (Jest, Cypriot), но можно добавить:

#### Добавление Jest для unit-тестов

```bash
npm init -y
npm install --save-dev jest
```

**Пример теста:** `tests/cursor.test.js`
```javascript
describe('CustomCursor', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div class="cursor"></div>
            <div class="cursor-follower"></div>
        `;
    });

    test('should initialize cursor elements', () => {
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');
        expect(cursor).toBeTruthy();
        expect(follower).toBeTruthy();
    });
});
```

**Запуск:**
```bash
npx jest
```

---

### 8.3 Тестовые данные

**Тестовые JSON файлы** (для разработки):

`services.test.json`:
```json
[
  {
    "id": "test",
    "title": "Test Service",
    "description": "Test description",
    "image": "services/test.svg",
    "tags": ["Test"]
  }
]
```

`portfolio.test.json`:
```json
[
  {
    "id": 999,
    "title": "Test Project",
    "category": "test",
    "description": "Test project description",
    "image": "portfolio/test.jpg",
    "link": "https://example.com"
  }
]
```

---

### 8.4 Регрессионное тестирование

После каждого изменения:
1. Запустите Lighthouse audit
2. Проверьте консоль на ошибки
3. Протестируйте на 2+ браузерах
4. Проверьте мобильную версию
5. Убедитесь, что localStorage работает

---

## 9. Устранение неполадок (Troubleshooting)

### 9.1 Частые ошибки и решения

#### Ошибка: "Failed to load resource: net::ERR_FILE_NOT_FOUND"

**Причина:** Попытка fetch() при открытии файла через `file://` протокол.

**Решение:** Запустите локальный сервер:
```bash
python3 -m http.server 8080
# или
npx serve .
```

---

#### Ошибка: "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')"

**Причина:** Элемент не найден (header/footer ещё не загружены).

**Решение:** В модулях используйте проверку:
```javascript
const element = document.querySelector('.my-element');
if (!element) {
    console.warn('Element not found');
    return;
}
```

---

#### Ошибка: "CORS policy: No 'Access-Control-Allow-Origin' header"

**Причина:** Попытка fetch с другого домена без CORS заголовков.

**Решение:**
- Для локальной разработки используйте `--allow-file-access-from-files` (Chrome)
- Настройте CORS на сервере:
```apache
Header set Access-Control-Allow-Origin "*"
```

---

#### Проблема: Кастомный курсор не отображается

**Причины и решения:**

1. **CSS не загружен:**
   - Проверьте сетевые запросы в DevTools
   - Убедитесь, что `eofcss3/EOFcursor3.css` загружается

2. **Курсор скрыт при наведении на ссылки:**
   - Это **задумано** по дизайну
   - Чтобы отключить, удалите из CSS:
   ```css
   a:hover ~ .cursor,
   a:hover ~ .cursor-follower {
       opacity: 0;
   }
   ```

3. **На мобильных устройствах:**
   - Курсор скрыт (нет мыши)
   - Это нормально

---

#### Проблема: Фильтры портфолио не работают

**Проверьте:**
1. `portfolio.json` загружается (DevTools → Network)
2. У проектов есть правильные `category` значения
3. Кнопки фильтров имеют `data-filter` атрибуты
4. Консоль на наличие ошибок

**Решение:**
```javascript
// Проверьте, что модули загружаются в правильном порядке
// EOFPortfolioLoader3.js должен загрузиться до EOFPortfolioFilterDynamic3.js
```

---

#### Проблема: Чат не сохраняет историю

**Проверьте:**
1. localStorage доступен (не в приватном режиме)
2. Ключ `kvantora_chat` существует:
```javascript
console.log(localStorage.getItem('kvantora_chat'));
```
3. Нет ошибок в консоли

**Решение:**
- Очистите localStorage и перезагрузите:
```javascript
localStorage.clear();
location.reload();
```
- Убедитесь, что не блокируются cookies/storage (браузерные настройки)

---

#### Проблема: Анимации не работают

**Проверьте:**
1. `EOFAnimations3.css` загружен
2. Элементы имеют класс `.reveal`
3. `IntersectionObserver` поддерживается (Chrome 51+, Firefox 55+)
4. `prefers-reduced-motion` не установлен в системе

**Решение:**
```javascript
// Проверьте поддержку IntersectionObserver
if ('IntersectionObserver' in window) {
    console.log('Supported');
} else {
    console.warn('Not supported, animations disabled');
}
```

---

#### Проблема: Изображения не загружаются

**Проверьте:**
1. Файлы существуют в папках `services/`, `portfolio/`, `about/`
2. Пути в JSON корректны
3. Разрешения поддерживаются (JPEG, PNG, SVG, WebP)

**Решение:**
- Добавьте `onerror` обработчик (уже есть в коде):
```html
<img src="services/opensource.svg" onerror="this.style.display='none'">
```
- Проверьте консоль на 404 ошибки

---

#### Проблема: Мобильное меню не открывается

**Проверьте:**
1. `EOFNavigation3.js` загружен
2. Есть элемент `.nav-toggle`
3. Нет JS ошибок

**Решение:**
```javascript
// В консоли проверьте:
document.querySelector('.nav-toggle') // должен вернуть элемент
document.querySelector('.nav-menu')   // должен вернуть элемент
```

---

### 9.2 Отладка

#### Chrome DevTools

**Console:**
```javascript
// Проверить загруженные модули
console.log(window.KVANTORA);

// Проверить localStorage
console.log(localStorage.getItem('kvantora_chat'));

// Проверить CSS переменные
getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
```

**Network:**
- Проверьте статус загрузки JSON файлов
- Проверьте MIME типы (должны быть `application/json`)

**Application:**
- LocalStorage → `kvantora_chat`
- Cache Storage (если используется Service Worker)

**Performance:**
- Запишите profil и проверьте Long Tasks
- Убедитесь, что нет layout thrashing

---

### 9.3 Логирование

Проект использует `console.log` для отладки:

```javascript
// Включите/отключите логи
const DEBUG = true;

function log(...args) {
    if (DEBUG) console.log('[КВАНТОРА]', ...args);
}

// Использование
log('Module initialized', this);
```

---

### 9.4 Восстановление после сбоя

**Если сайт не загружается:**

1. **Проверьте консоль** на синтаксические ошибки
2. **Загрузите страницу без кэша** (Ctrl+F5)
3. **Проверьте Network** на 404/500 ошибки
4. **Временно отключите JS** (DevTools → Settings → Disable JavaScript)
5. **Верните последнюю рабочую версию** из Git:
```bash
git log --oneline
git checkout <working-commit>
```

---

## 10. Лицензия и авторство

### 10.1 Лицензия MIT

```
MIT License

Copyright (c) 2024-2026 КВАНТОРА Community

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### 10.2 Авторство

**Основной автор:**
- **ll1ness** — создатель и основной разработчик проекта

**Сообщество КВАНТОРА:**
- Все контрибьюторы, участвующие в разработке
- Сообщество разработчиков, предоставляющее обратную связь

**Признание:**
- Используются шрифты **Inter** (Google Fonts)
- Иконки **Material Icons** (Google)
- Вдохновлено современными веб-трендами (Glassmorphism, Mesh Gradients)

### 10.3 Внесение вклада (CONTRIBUTING)

Мы приветствуем вклад сообщества! Вот как вы можете помочь:

#### 1. Сообщение об ошибках (Issues)

**Перед созданием issue:**
- Проверьте, нет ли уже подобного issue
- Убедитесь, что используете последнюю версию
- Проверьте консоль на ошибки

**Шаблон issue:**
```
**Описание**
Краткое описание проблемы

**Шаги для воспроизведения**
1. Перейдите на '...'
2. Нажмите на '....'
3. Увидите ошибку '....'

**Ожидаемое поведение**
Что должно было произойти

**Фактическое поведение**
Что произошло на самом деле

**Скриншоты/видео**
(при необходимости)

**Техническая информация**
- Браузер: Chrome 120
- ОС: Windows 11
- Версия проекта: 1.0.0
```

---

#### 2. Pull Requests

**Процесс:**
1. **Fork** репозитория
2. **Создайте ветку**:
```bash
git checkout -b feature/amazing-feature
```
3. **Внесите изменения** (следуйте код-стилю)
4. **Протестируйте** на локальном сервере
5. **Коммитьте**:
```bash
git add .
git commit -m "Add amazing feature"
```
6. **Отправьте**:
```bash
git push origin feature/amazing-feature
```
7. **Создайте PR** с описанием

**Требования к PR:**
- Код должен проходить все проверки
- Не должно быть конфликтов с main
- Добавьте тесты (если меняете логику)
- Обновите документацию при необходимости

---

#### 3. Код-стиль

**CSS:**
- 2 пробела для отступов
- Kebab-case для классов: `.service-card`
- CSS переменные для всех значений
- Комментарии на русском/английском

**JavaScript:**
- 2 пробела для отступов
- camelCase для переменных/функций
- Классы в PascalCase: `CustomCursor`
- JSDoc комментарии:
```javascript
/**
 * Инициализирует кастомный курсор
 * @returns {void}
 */
init() { ... }
```

---

#### 4. Добавление новых проектов в портфолио

1. Добавьте изображение в `portfolio/` (800x600px)
2. Добавьте запись в `portfolio.json`:
```json
{
  "id": 7,
  "title": "Your Project",
  "category": "opensource",
  "description": "Description",
  "image": "portfolio/your-project.jpg",
  "link": "https://github.com/your/project"
}
```
3. Обновите категории фильтров при необходимости
4. Протестируйте фильтрацию

---

#### 5. Переводы

Проект на русском. Для перевода на другие языки:

1. Создайте папку `lang/`
2. Добавьте JSON файлы:
```
lang/
├── en.json
├── es.json
└── de.json
```
3. Используйте i18n библиотеку или простой объект:
```javascript
const translations = {
    en: { hero_title: "We create open community" },
    ru: { hero_title: "Создаём открытое сообщество" }
};
```
4. Реализуйте переключатель языка

---

#### 6. Улучшение производительности

- Оптимизируйте изображения (WebP, AVIF)
- Добавьте Service Worker для оффлайн-работы
- Настройте HTTP/2 Server Push
- Минифицируйте CSS/JS
- Добавьте critical CSS

---

#### 7. Доступность (a11y)

- Добавьте ARIA атрибуты где нужно
- Улучшите клавиатурную навигацию
- Добавьте skip links
- Проверьте контрастность
- Протестируйте с screen reader

---

### 10.4 Кодекс поведения

Мы придерживаемся принципов открытого сообщества:

- **Уважение** — ко всем участникам, независимо от уровня
- **Инклюзивность** — приветствуем всех, независимо от пола, расы, возраста
- **Коллаборация** — работаем вместе, а не конкурируем
- **Открытость** — код, документация, обсуждения открыты
- **Обучение** — делимся знаниями, помогаем новичкам

**Не допускается:**
- Оскорбления, дискриминация
- Спам, реклама
- Взлом, вредоносный код
- Нарушение авторских прав

---

### 10.5 Контакты

**Организация:** КВАНТОРА Community  
**Email:** hello@kvantora.ru  
**GitHub:** https://github.com/kvantora  
**VK:** https://vk.com/kvantora  
**GitFlic:** https://gitflic.ru/user/kvantora  
**Сайт:** https://quantora.hopto.org

---

## Приложения

### A. Полный список CSS модулей

| № | Файл | Назначение | Строк |
|---|------|------------|-------|
| 1 | EOFCSSVariables3.css | Дизайн-система | 28 |
| 2 | EOFCSSReset3.css | Сброс стилей | ~100 |
| 3 | EOFcursor3.css | Кастомный курсор | ~80 |
| 4 | EOFContainer3.css | Контейнеры | ~30 |
| 5 | EOFNavigation3.css | Навигация | ~150 |
| 6 | EOFButtons3.css | Кнопки | ~80 |
| 7 | EOFScrollIndicator3.css | Индикатор скролла | ~50 |
| 8 | EOFSectionStyles3.css | Секции | ~60 |
| 9 | EOFHero3.css | Hero | ~200 |
| 10 | EOFHeroVisual3.css | Hero визуал | ~100 |
| 11 | EOFServiceSection3.css | Секция услуг | ~100 |
| 12 | EOFServiceRect3.css | Карточки услуг | ~150 |
| 13 | EOFServiceImg3.css | Изображения услуг | ~40 |
| 14 | EOFPortfolioSection3.css | Секция портфолио | ~100 |
| 15 | EOFPortfolioImg3.css | Изображения портфолио | ~40 |
| 16 | EOFAboutSection3.css | Секция о нас | ~100 |
| 17 | EOFAboutVisual3.css | Визуал "о нас" | ~80 |
| 18 | EOFAboutImg3.css | Изображения о нас | ~40 |
| 19 | EOFContactSection3.css | Секция контактов | ~100 |
| 20 | EOFContactLink3.css | Контактные ссылки | ~40 |
| 21 | EOFForm3.css | Форма | ~100 |
| 22 | EOFFooter3.css | Футер | ~100 |
| 23 | EOFFooterExtended3.css | Расширенный футер | ~120 |
| 24 | EOFResponsiveFooter3.css | Адаптивный футер | ~150 |
| 25 | EOFAnimations3.css | Анимации | ~200 |
| 26 | EOFResponsive3.css | Адаптивность | ~230 |
| 27 | EOFResponsiveChat3.css | Адаптивный чат | ~100 |
| 28 | EOFUtility3.css | Утилиты | ~50 |
| 29 | EOFPerformance3.css | Производительность | ~60 |
| 30 | EOFCanvas3.css | Canvas | ~40 |
| 31 | EOFMouseReactive3.css | Реактивный фон | ~60 |
| 32 | EOFASCII3.css | ASCII секция | ~60 |
| 33 | EOFChat3.css | Чат | ~200 |
| 34 | EOFGlobalBackground3.css | Глобальный фон | ~100 |

**Итого:** ~3000 строк CSS

---

### B. Полный список JS модулей

| № | Файл | Назначение | Строк |
|---|------|------------|-------|
| 1 | EOFInit3.js | Инициализация | 2 |
| 2 | EOFcursor3.js | Кастомный курсор | 40 |
| 3 | EOFMouseReactive3.js | Реактивный фон | ~50 |
| 4 | EOFNavigation3.js | Навигация | 84 |
| 5 | EOFScrollReveal3.js | Scroll reveal | 18 |
| 6 | EOFStatsCounter3.js | Счетчики | ~60 |
| 7 | EOFPortfolioFilter3.js | Фильтрация | ~80 |
| 8 | EOFPortfolioFilterDynamic3.js | Динамическая фильтрация | ~100 |
| 9 | EOFPortfolioLoader3.js | Загрузка портфолио | 25 |
| 10 | EOFServiceLoader3.js | Загрузка услуг | 29 |
| 11 | EOFContactForm3.js | Форма контактов | ~150 |
| 12 | EOFNotification3.js | Уведомления | ~80 |
| 13 | EOFParallax3.js | Параллакс | ~60 |
| 14 | EOFMagnetic3.js | Магнитные кнопки | ~40 |
| 15 | EOFTextSplit3.js | Разделение текста | ~30 |
| 16 | EOFLazyLoad3.js | Lazy loading | ~40 |
| 17 | EOFReducedMotion3.js | Уменьшенное движение | ~30 |
| 18 | EOFPerformance3.js | Производительность | ~50 |
| 19 | EOFChat3.js | Чат | 84 |
| 20 | EOFCanvasAnimation3.js | Canvas анимация | ~100 |
| 21 | EOFGlobalBackground3.js | Глобальный фон | ~250 |

**Итого:** ~1200 строк JavaScript

---

### C. SEO мета-теги (рекомендуемые)

```html
<!-- Основные -->
<title>КВАНТОРА - Разработка цифровых проектов</title>
<meta name="description" content="КВАНТОРА - Сообщество разработчиков открытых проектов. Создаём инструменты, библиотеки и платформы для разработчиков.">
<meta name="keywords" content="КВАНТОРА, open source, разработка, веб, JavaScript, Python, сообщество, GitHub">
<meta name="author" content="КВАНТОРА">
<link rel="canonical" href="https://quantora.hopto.org/">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://quantora.hopto.org/">
<meta property="og:title" content="КВАНТОРА - Разработка цифровых проектов">
<meta property="og:description" content="Сообщество разработчиков открытых проектов">
<meta property="og:image" content="https://quantora.hopto.org/logo.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="КВАНТОРА">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://quantora.hopto.org/">
<meta property="twitter:title" content="КВАНТОРА - Разработка цифровых проектов">
<meta property="twitter:description" content="Сообщество разработчиков открытых проектов">
<meta property="twitter:image" content="https://quantora.hopto.org/logo.png">
<meta property="twitter:site" content="@kvantora">

<!-- Фавиконы -->
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="manifest" href="site.webmanifest">

<!-- Structured Data (JSON-LD) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "КВАНТОРА",
  "url": "https://quantora.hopto.org",
  "logo": "https://quantora.hopto.org/logo.png",
  "sameAs": [
    "https://github.com/kvantora",
    "https://vk.com/kvantora",
    "https://gitflic.ru/user/kvantora"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@kvantora.ru",
    "telephone": "+74951234567",
    "contactType": "customer service"
  }
}
</script>
```

---

### D. Чек-лист деплоя

**Перед деплоем:**
- [ ] Все изображения добавлены
- [ ] `services.json` и `portfolio.json` заполнены
- [ ] Логотип добавлен (`logo.png`)
- [ ] Контактная информация актуальна
- [ ] Ссылки на соцсети рабочие
- [ ] SEO мета-теги заполнены
- [ ] Favicon добавлен
- [ ] `.htaccess` настроен (Apache)
- [ ] HTTPS настроен (Let's Encrypt)
- [ ] Протестировано на локальном сервере
- [ ] Lighthouse score > 90
- [ ] Нет ошибок в консоли
- [ ] Работает на мобильных устройствах

**После деплоя:**
- [ ] Проверить все страницы
- [ ] Проверить все ссылки
- [ ] Проверить формы
- [ ] Проверить чат
- [ ] Запустить Lighthouse на production
- [ ] Настроить Google Search Console
- [ ] Настроить Google Analytics (опционально)
- [ ] Добавить в sitemap.xml
- [ ] Проверить robots.txt

---

## Заключение

Данная техническая документация полностью описывает проект **КВАНТОРА Website** — современный, модульный, полностью адаптивный сайт для open source сообщества разработчиков.

### Ключевые особенности проекта:

✅ **Без сборки** — работает сразу  
✅ **Модульная архитектура** — 33 CSS + 20 JS модулей  
✅ **Динамический контент** — JSON-driven  
✅ **Интерактивность** — кастомный курсор, анимации, чат  
✅ **Производительность** — GPU ускорение, lazy loading  
✅ **Доступность** — семантический HTML, ARIA, a11y  
✅ **SEO оптимизация** — мета-теги, sitemap, structured data  
✅ **Безопасность** — XSS защита, CORS, HTTPS  
✅ **Документированность** — полная документация  
✅ **Открытость** — MIT лицензия, community-driven  

Проект готов к использованию, расширению и contribution от сообщества!

---

**Версия документа:** 1.0.0  
**Дата:** 2024-2026  
**Автор:** КВАНТОРА Community (ll1ness)  
**Лицензия:** MIT

---

*Создано с ❤️ для сообщества разработчиков*  
*Open Source. Free. For everyone.*