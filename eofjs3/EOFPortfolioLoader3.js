// ===== Load Portfolio from AppWrite or JSON fallback =====
async function loadPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) return;

    let portfolio = [];
    let source = 'none';

    // Try AppWrite first if enabled
    if (window.appwriteService && window.appwriteService.initialized &&
        window.AppWriteConfig.features.useAppWriteForPortfolio) {
        try {
            const result = await window.appwriteService.getPortfolioItems();
            if (result.success && result.data) {
                portfolio = result.data.map(item => ({
                    id: item.$id,
                    title: item.title,
                    category: item.category,
                    description: item.description,
                    image: item.image,
                    link: item.link,
                    logo: item.logo || '',
                    site: item.site || '',
                    wiki: item.wiki || '',
                    badges: item.badges || []
                }));
                source = result.source;
            }
        } catch (error) {
            console.warn('Failed to load portfolio from AppWrite:', error);
        }
    }

    // Fallback to JSON file
    if (portfolio.length === 0) {
        try {
            const response = await fetch('portfolio.json');
            if (response.ok) {
                portfolio = await response.json();
                source = 'json';
            }
        } catch (error) {
            console.error('Error loading portfolio from JSON:', error);
        }
    }

    // Render portfolio items
    if (portfolio.length > 0) {
        portfolioGrid.innerHTML = portfolio.map(item => `
            <div class="portfolio-item" data-category="${item.category}" data-id="${item.id}">
                <div class="portfolio-image">
                    <img src="${item.image}" alt="${item.title}" class="portfolio-img" loading="lazy">
                </div>
                <div class="portfolio-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <button class="portfolio-link" type="button">Подробнее →</button>
                </div>
            </div>
        `).join('');
        console.log('Portfolio loaded from:', source);
        
        // Add click event listeners to show modal
        portfolioGrid.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('click', () => {
                const portfolioId = item.dataset.id;
                const project = portfolio.find(p => p.id == portfolioId);
                if (project) {
                    showPortfolioModal(project);
                }
            });
        });
    } else {
        portfolioGrid.innerHTML = '<p class="error">Не удалось загрузить портфолио.</p>';
    }
}

// Show portfolio modal
function showPortfolioModal(project) {
    const modal = document.createElement('div');
    modal.className = 'portfolio-modal';
    modal.innerHTML = `
        <div class="portfolio-modal-content">
            <div class="portfolio-modal-header">
                <div class="portfolio-modal-logo">
                    ${project.logo ? `<img src="${project.logo}" alt="${project.title} logo">` : '<div class="placeholder-logo">LOGO</div>'}
                </div>
                <h2>${project.title}</h2>
                <button class="portfolio-modal-close">&times;</button>
            </div>
            <div class="portfolio-modal-body">
                <div class="portfolio-modal-description">
                    <p>${project.description}</p>
                </div>
                <div class="portfolio-modal-links">
                    <a href="${project.site}" class="portfolio-modal-link" target="_blank" rel="noopener noreferrer">
                        <span class="link-icon material-icons">public</span>
                        <span>Website</span>
                    </a>
                    <a href="${project.wiki}" class="portfolio-modal-link" target="_blank" rel="noopener noreferrer">
                        <span class="link-icon material-icons">book</span>
                        <span>Wiki</span>
                    </a>
                </div>
                <div class="portfolio-modal-badges">
                    ${project.badges.map(badge => `<span class="badge">${badge}</span>`).join('')}
                </div>
                <div class="portfolio-modal-copyright">
                    <p>${project.copyright || '© 2024 Project Contributors'}</p>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Close modal
    modal.querySelector('.portfolio-modal-close').addEventListener('click', () => {
        modal.remove();
    });
    
    // Click outside to close
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

loadPortfolio();
