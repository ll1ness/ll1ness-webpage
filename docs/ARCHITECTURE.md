# Архитектура проекта ЛИНЕСС

## Общая архитектура

Проект использует **модульную архитектуру** с разделением ответственности между CSS и JavaScript модулями. Все страницы используют общую базовую структуру с динамически подключаемыми компонентами.

## Принципы проектирования

### 1. Модульность
- Каждый CSS/JS файл отвечает за конкретную функциональность
- Легко добавлять, удалять или заменять модули
- Минимальные зависимости между модулями

### 2. Переиспользование
- Общие стили вынесены в отдельные файлы
- Компоненты (header/footer) подключаются динамически
- Один код работает на всех страницах

### 3. Производительность
- Ленивая загрузка данных через Fetch API
- Оптимизированные анимации с `will-change`
- Минимальные перерисовки
- Использование `requestAnimationFrame`

### 4. Доступность
- Семантический HTML
- ARIA атрибуты
- Клавиатурная навигация
- Учет предпочтений пользователя (prefers-reduced-motion)

## Структура HTML страниц

### Базовый шаблон
```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <!-- Мета-теги -->
    <!-- Подключение CSS модулей (общие + специфичные) -->
</head>
<body>
    <div class="cursor"></div>
    <div class="cursor-follower"></div>
    <div class="header-include"></div>

    <!-- Специфичный контент страницы -->

    <div class="footer-include"></div>

    <!-- Подключение JS модулей -->
    <!-- Динамическая загрузка header/footer -->
</body>
</html>
```

### Динамические компоненты
- **Header**: `special/header.html` - подключается через Fetch API
- **Footer**: `special/footer.html` - подключается через Fetch API
- **Данные**: `services.json`, `portfolio.json` - загружаются динамически

## CSS Архитектура

### Иерархия загрузки CSS

1. **EOFCSSVariables3.css** - CSS переменные (первым!)
2. **EOFCSSReset3.css** - сброс стилей
3. **EOFcursor3.css** - кастомный курсор
4. **EOFNavigation3.css** - навигация
5. **EOFContainer3.css** - контейнеры
6. **EOFSectionStyles3.css** - базовые секции
7. **Модульные CSS** - специфичные компоненты
8. **Адаптивные CSS** - медиа-запросы
9. **Утилитарные CSS** - вспомогательные классы

### Дизайн-система

Все значения хранятся в CSS переменных (`:root`):

```css
:root {
    /* Цвета */
    --color-bg: #0a0a0a;
    --color-text: #ffffff;
    --color-primary: #ffffff;
    --color-accent: #000000;

    /* Градиенты */
    --gradient-primary: linear-gradient(135deg, #ffffff 0%, #e0e0e0 50%, #000000 100%);

    /* Glass effect */
    --glass-bg: rgba(0, 0, 0, 0.3);
    --glass-border: rgba(255, 255, 255, 0.1);

    /* Тени */
    --shadow-sm, --shadow-md, --shadow-lg

    /* Радиусы */
    --radius-sm, --radius-md, --radius-lg, --radius-xl

    /* Транзишены */
    --transition-fast, --transition-normal, --transition-slow

    /* Шрифты */
    --font-family: 'Inter', sans-serif;
}
```

## JavaScript Архитектура

### Модульная система

Каждый JS файл - независимый модуль, который:
1. Инициализируется при загрузке DOM
2. Работает только если нужные элементы существуют
3. Не создает глобальных переменных (кроме своих классов)

### Основные модули

#### Инициализация
- **EOFInit3.js** - точка входа, логика инициализации

#### UI Компоненты
- **EOFcursor3.js** - кастомный курсор
- **EOFNavigation3.js** - навигация и плавный скролл
- **EOFChat3.js** - чат-бот

#### Анимации
- **EOFGlobalBackground3.js** - интерактивный фон
- **EOFScrollReveal3.js** - появление при скролле
- **EOFParallax3.js** - параллакс эффекты

#### Данные
- **EOFServiceLoader3.js** - загрузка услуг из JSON
- **EOFPortfolioLoader3.js** - загрузка портфолио
- **EOFPortfolioFilterDynamic3.js** - фильтрация портфолио

#### Утилиты
- **EOFStatsCounter3.js** - анимированные счетчики
- **EOFContactForm3.js** - обработка форм
- **EOFPerformance3.js** - оптимизация производительности
- **EOFLazyLoad3.js** - ленивая загрузка

### Паттерны

#### Классы
```javascript
class ModuleName {
    constructor() {
        this.init();
    }

    init() {
        this.cacheElements();
        this.bindEvents();
    }

    cacheElements() {
        // Кэширование DOM элементов
    }

    bindEvents() {
        // Привязка обработчиков событий
    }
}
```

#### Fetch API
```javascript
fetch('data.json')
    .then(response => response.json())
    .then(data => this.render(data))
    .catch(error => console.error('Error:', error));
```

#### RequestAnimationFrame
```javascript
animate() {
    this.update();
    this.animationFrame = requestAnimationFrame(() => this.animate());
}
```

## Данные

### JSON структуры

**services.json**:
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

**portfolio.json**:
```json
[
  {
    "title": "Проект 1",
    "category": "web",
    "image": "path/to/image.jpg",
    "description": "Описание проекта"
  }
]
```

## Безопасность

- **XSS защита**: экранирование пользовательского ввода
- **CORS**: правильные заголовки для Fetch API
- **LocalStorage**: только для чата, без чувствительных данных
- **Формы**: валидация на клиенте

## Производительность

### Оптимизации
1. **CSS**: минимизация перерисовок, `will-change`
2. **JS**: кэширование DOM элементов, делегирование событий
3. **Изображения**: lazy loading, современные форматы
4. **Сети**: кэширование, сжатие

### Метрики
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Lighthouse score > 90

## Расширяемость

### Добавление новой страницы
1. Создать `newpage.html` по шаблону
2. Добавить в навигацию (`special/header.html`)
3. Подключить нужные CSS/JS модули
4. При необходимости создать специфичные модули

### Добавление нового компонента
1. Создать CSS модуль в `eofcss3/`
2. Создать JS модуль в `eofjs3/`
3. Подключить к нужным страницам
4. Документировать в `docs/CSS_MODULES.md` и `docs/JS_MODULES.md`

## Тестирование

### Ручное тестирование
- Проверка на всех страницах
- Тестирование на разных устройствах
- Проверка доступности (Tab, Screen Reader)
- Тестирование в разных браузерах

### Автоматизированное (рекомендуется)
- Jest для unit-тестов JS
- Cypress для E2E тестов
- Lighthouse CI для performance

## Мониторинг

### Ошибки
- Console.error логирование
- Возможность интеграции с Sentry

### Аналитика
- Google Analytics (при необходимости)
- Кастомные метрики производительности

## Развертывание

См. [DEPLOYMENT.md](./DEPLOYMENT.md)

---

*Версия: 1.0.0* | *Последнее обновление: 2024*