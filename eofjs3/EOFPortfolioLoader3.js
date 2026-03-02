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
