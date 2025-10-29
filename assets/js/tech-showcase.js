// ============================================
// TECHNOLOGY SHOWCASE CAROUSEL
// ============================================
document.addEventListener('DOMContentLoaded', function() {
	const techTrack = document.querySelector('.tech-track');

	if (techTrack && typeof techConfig !== 'undefined') {
		// Generate tech items from config
		techConfig.forEach(function(tech, index) {
			const item = createTechItem(tech, index);
			techTrack.appendChild(item);
		});

		// Clone all items for seamless infinite scroll
		const items = Array.from(techTrack.children);
		items.forEach(function(item) {
			const clone = item.cloneNode(true);
			techTrack.appendChild(clone);
		});

		// Add click event handlers to all items (including clones)
		const allTechItems = document.querySelectorAll('.tech-item');
		allTechItems.forEach(function(item) {
			item.addEventListener('click', function() {
				const url = this.dataset.url;
				if (url) {
					window.open(url, '_blank', 'noopener,noreferrer');
				}
			});

			// Add keyboard support
			item.addEventListener('keypress', function(e) {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					const url = this.dataset.url;
					if (url) {
						window.open(url, '_blank', 'noopener,noreferrer');
					}
				}
			});
		});

		// Pause animation on hover (for accessibility)
		const techCarousel = document.querySelector('.tech-carousel');
		if (techCarousel) {
			techCarousel.addEventListener('mouseenter', function() {
				techTrack.style.animationPlayState = 'paused';
			});

			techCarousel.addEventListener('mouseleave', function() {
				techTrack.style.animationPlayState = 'running';
			});
		}
	}
});

/**
 * Create a technology item element
 * @param {Object} tech - Technology config object
 * @param {number} index - Item index for animation delay
 * @returns {HTMLElement} - Tech item element
 */
function createTechItem(tech, index) {
	const item = document.createElement('div');
	item.className = 'tech-item';
	item.dataset.tech = tech.name.toLowerCase().replace(/\s+/g, '');
	item.dataset.url = tech.url;
	item.dataset.category = tech.category;
	item.setAttribute('role', 'button');
	item.setAttribute('tabindex', '0');
	item.setAttribute('aria-label', 'Visit ' + tech.name + ' website');

	// Calculate animation delay for stagger effect
	const animationDelay = (index * 0.1) + 's';
	item.style.animationDelay = animationDelay;

	// Create image element
	const img = document.createElement('img');
	img.src = tech.icon;
	img.alt = tech.name + ' logo';
	img.loading = 'lazy';
	img.onerror = function() {
		// Fallback if image fails to load
		this.style.display = 'none';
		const fallbackIcon = document.createElement('div');
		fallbackIcon.className = 'tech-fallback-icon';
		fallbackIcon.textContent = tech.name.substring(0, 2).toUpperCase();
		item.insertBefore(fallbackIcon, item.firstChild);
	};

	// Create label element
	const label = document.createElement('span');
	label.className = 'tech-label';
	label.textContent = tech.name;

	// Create category badge (optional)
	const badge = document.createElement('span');
	badge.className = 'tech-category-badge';
	badge.textContent = tech.category;
	badge.style.display = 'none'; // Hidden by default, shown on hover if desired

	// Assemble the item
	item.appendChild(img);
	item.appendChild(label);
	// item.appendChild(badge); // Uncomment if you want category badges

	return item;
}

/**
 * Get tech items by category
 * @param {string} category - Category name
 * @returns {Array} - Filtered tech config array
 */
function getTechByCategory(category) {
	if (typeof techConfig === 'undefined') return [];
	return techConfig.filter(function(tech) {
		return tech.category === category;
	});
}
