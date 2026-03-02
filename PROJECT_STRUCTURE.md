# ЛИНЕСС Website - Project Structure

## 📁 Complete File Structure

```
полигон-ИИ/
├── index.html              # Main homepage with all sections
├── about.html              # About page
├── services.html           # Services page
├── portfolio.html          # Portfolio page
├── contact.html            # Contact page with chat
├── blog.html               # Blog page
├── careers.html            # Careers page
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
│
├── eofcss3/                # Modular CSS files (EOF*3.css)
│   ├── EOFCSSVariables3.css
│   ├── EOFCSSReset3.css
│   ├── EOFcursor3.css
│   ├── EOFContainer3.css
│   ├── EOFNavigation3.css
│   ├── EOFHero3.css
│   ├── EOFButtons3.css
│   ├── EOFHeroVisual3.css
│   ├── EOFScrollIndicator3.css
│   ├── EOFSectionStyles3.css
│   ├── EOFServiceSection3.css
│   ├── EOFPortfolioSection3.css
│   ├── EOFAboutSection3.css
│   ├── EOFAboutVisual3.css
│   ├── EOFContactSection3.css
│   ├── EOFForm3.css
│   ├── EOFFooter3.css
│   ├── EOFAnimations3.css
│   ├── EOFResponsive3.css
│   ├── EOFUtility3.css
│   ├── EOFPerformance3.css
│   ├── EOFCanvas3.css
│   ├── EOFServiceImg3.css
│   ├── EOFPortfolioImg3.css
│   ├── EOFAboutImg3.css
│   ├── EOFContactLink3.css
│   ├── EOFFooterExtended3.css
│   ├── EOFResponsiveFooter3.css
│   ├── EOFMouseReactive3.css
│   ├── EOFASCII3.css
│   ├── EOFServiceRect3.css
│   ├── EOFChat3.css
│   └── EOFResponsiveChat3.css
│
├── eofjs3/                 # Modular JavaScript files (EOF*3.js)
│   ├── EOFcursor3.js
│   ├── EOFMouseReactive3.js
│   ├── EOFNavigation3.js
│   ├── EOFScrollReveal3.js
│   ├── EOFStatsCounter3.js
│   ├── EOFPortfolioFilter3.js
│   ├── EOFContactForm3.js
│   ├── EOFNotification3.js
│   ├── EOFParallax3.js
│   ├── EOFMagnetic3.js
│   ├── EOFTextSplit3.js
│   ├── EOFLazyLoad3.js
│   ├── EOFReducedMotion3.js
│   ├── EOFPerformance3.js
│   ├── EOFInit3.js
│   ├── EOFServiceLoader3.js
│   ├── EOFPortfolioLoader3.js
│   ├── EOFPortfolioFilterDynamic3.js
│   ├── EOFChat3.js
│   └── EOFCanvasAnimation3.js
│
├── special/                # Reusable components
│   ├── header.html
│   └── footer.html
│
├── services.json           # Services data (dynamic loading)
├── portfolio.json          # Portfolio data (dynamic loading)
│
├── services/               # Service icon images (to be added)
│   ├── web-dev.svg
│   ├── mobile-apps.svg
│   ├── ui-ux.svg
│   └── backend.svg
│
├── portfolio/              # Portfolio project images (to be added)
│   ├── project1.jpg
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── project4.jpg
│   ├── project5.jpg
│   └── project6.jpg
│
├── about/                  # About section images
│   └── team.jpg
│
├── logo.png                # Brand logo (to be added)
│
├── styles.css              # Original full CSS (reference)
├── script.js               # Original full JS (reference)
└── README.md               # Documentation
```

## 🎯 Key Features Implemented

### 1. **Modular Architecture**
- CSS split into 32 separate files in `/eofcss3/`
- JavaScript split into 20 separate files in `/eofjs3/`
- Header/Footer in `/special/` as includes
- Each page loads only required modules

### 2. **Custom Cursor**
- Fully custom cursor with follower effect
- **Hidden on link hover** (opacity: 0)
- System cursor completely hidden (`cursor: none` on body)

### 3. **Mouse-Reactive Background**
- Gradient orb follows mouse movement
- Smooth transitions with CSS transforms
- Fixed position, no pointer events

### 4. **ASCII Art Section**
- Monospace art displayed after hero
- Styled with borders and gradient text
- Responsive horizontal scroll

### 5. **JSON-Driven Content**
- Services loaded from `services.json`
- Portfolio loaded from `portfolio.json`
- Dynamic rendering with category filtering

### 6. **Chat with localStorage**
- Full chat UI in contact section
- Messages persisted in browser localStorage
- Simulated bot responses
- Ready for AppWrite integration

### 7. **Multiple HTML Pages**
- Homepage (index.html)
- About (about.html)
- Services (services.html)
- Portfolio (portfolio.html)
- Contact (contact.html)
- Blog (blog.html)
- Careers (careers.html)
- Privacy (privacy.html)
- Terms (terms.html)

## 📦 Naming Conventions

### CSS Files
- Pattern: `EOF[StyleName]3.css`
- Example: `EOFCursor3.css`, `EOFHero3.css`

### JavaScript Files
- Pattern: `EOF[FunctionName]3.js`
- Example: `EOFcursor3.js`, `EOFChat3.js`

### Special Components
- Location: `/special/`
- Files: `header.html`, `footer.html`
- Loaded via JavaScript fetch()

## 🎨 Design System

### Colors
- Background: `#0a0a0f` (dark)
- Primary: `#6366f1` (indigo)
- Secondary: `#8b5cf6` (purple)
- Accent: `#06b6d4` (cyan)

### Typography
- Font: Inter (Google Fonts)
- Weights: 300-900
- Responsive sizing with `clamp()`

### Components
- Glassmorphism cards
- Gradient buttons
- Custom cursor
- Particle canvas animation
- Chat interface

## 🔧 Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)**: Modules, fetch API, localStorage, Canvas API
- **No frameworks**: Pure vanilla implementation
- **No build step**: Direct browser execution

## 📱 Responsive Breakpoints

- Desktop: 1280px container
- Tablet: 1024px
- Mobile: 768px
- Small mobile: 480px

## 🚀 Performance Features

- GPU acceleration (`will-change`, `translateZ`)
- Throttled scroll events (16ms)
- Intersection Observer for lazy animations
- `prefers-reduced-motion` support
- Lazy loading images
- Modular CSS/JS loading

## 📝 Usage Notes

1. **Add images** to respective folders:
   - `/services/` - 4 SVG icons (56x56px)
   - `/portfolio/` - 6 project images
   - `/about/` - team photo
   - `logo.png` - brand logo

2. **Customize data**:
   - Edit `services.json` for services
   - Edit `portfolio.json` for portfolio items

3. **Integrate AppWrite**:
   - Chat currently uses localStorage
   - Replace `EOFChat3.js` with AppWrite integration

4. **Header/Footer**:
   - Components loaded via fetch from `/special/`
   - For production, consider server-side includes

## ✨ All Pages

1. **index.html** - Homepage with hero, ASCII, services, portfolio, about, contact
2. **about.html** - Company information
3. **services.html** - Services listing
4. **portfolio.html** - Project showcase
5. **contact.html** - Contact form + chat
6. **blog.html** - Blog articles
7. **careers.html** - Job listings
8. **privacy.html** - Privacy policy
9. **terms.html** - Terms of service

All pages share the same design system and load only necessary modules.
