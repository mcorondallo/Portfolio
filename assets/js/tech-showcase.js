// ============================================
// TECHNOLOGY SHOWCASE CAROUSEL WITH TOOLTIPS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
	const techTrack = document.querySelector('.tech-track');
	let isPaused = false;
	let activeTooltip = null;

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
			item.addEventListener('click', function(e) {
				e.stopPropagation();
				handleTechClick(this);
			});

			// Add keyboard support
			item.addEventListener('keypress', function(e) {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					e.stopPropagation();
					handleTechClick(this);
				}
			});
		});

		// Close tooltips when clicking outside
		document.addEventListener('click', function(e) {
			if (!e.target.closest('.tech-item') && !e.target.closest('.tech-tooltip')) {
				closeAllTooltips();
				resumeAnimation();
			}
		});

		// Resume animation on scroll
		window.addEventListener('scroll', function() {
			if (isPaused) {
				closeAllTooltips();
				resumeAnimation();
			}
		});

		// Pause animation on hover (for accessibility)
		const techCarousel = document.querySelector('.tech-carousel');
		if (techCarousel) {
			techCarousel.addEventListener('mouseenter', function() {
				if (!isPaused) {
					techTrack.style.animationPlayState = 'paused';
				}
			});

			techCarousel.addEventListener('mouseleave', function() {
				if (!isPaused) {
					techTrack.style.animationPlayState = 'running';
				}
			});
		}

		// Control buttons
		const playPauseBtn = document.getElementById('tech-play-pause');
		const leftBtn = document.getElementById('tech-left');
		const rightBtn = document.getElementById('tech-right');
		const playIcon = playPauseBtn.querySelector('.play-icon');
		const pauseIcon = playPauseBtn.querySelector('.pause-icon');

		// Track carousel position
		let currentPosition = 0;

		// Play/Pause functionality
		if (playPauseBtn) {
			playPauseBtn.addEventListener('click', function() {
				if (isPaused) {
					// Resume animation
					resumeAnimation();
					closeAllTooltips();
					playIcon.style.display = 'none';
					pauseIcon.style.display = 'block';
				} else {
					// Pause animation
					pauseAnimation();
					playIcon.style.display = 'block';
					pauseIcon.style.display = 'none';
				}
			});

			// Set initial state (pause icon visible = animation playing)
			pauseIcon.style.display = 'block';
			playIcon.style.display = 'none';
		}

		// Left arrow - go backward
		if (leftBtn) {
			leftBtn.addEventListener('click', function() {
				// Pause animation when using manual controls
				if (!isPaused) {
					pauseAnimation();
					playIcon.style.display = 'block';
					pauseIcon.style.display = 'none';
				}

				// Move carousel backward (3 items)
				const firstItem = document.querySelector('.tech-item');
				if (firstItem) {
					const itemWidth = firstItem.offsetWidth + 30; // item width + gap
					currentPosition += itemWidth * 3;
					techTrack.style.transform = `translateX(${currentPosition}px)`;
				}
			});
		}

		// Right arrow - go forward
		if (rightBtn) {
			rightBtn.addEventListener('click', function() {
				// Pause animation when using manual controls
				if (!isPaused) {
					pauseAnimation();
					playIcon.style.display = 'block';
					pauseIcon.style.display = 'none';
				}

				// Move carousel forward (3 items)
				const firstItem = document.querySelector('.tech-item');
				if (firstItem) {
					const itemWidth = firstItem.offsetWidth + 30; // item width + gap
					currentPosition -= itemWidth * 3;
					techTrack.style.transform = `translateX(${currentPosition}px)`;
				}
			});
		}
	}

	/**
	 * Handle tech item click
	 */
	function handleTechClick(item) {
		const techName = item.dataset.tech;
		const description = item.dataset.description;

		// Close all other tooltips first
		closeAllTooltips();

		// If clicking the same item, just toggle
		if (activeTooltip && activeTooltip.dataset.tech === techName) {
			resumeAnimation();
			return;
		}

		// Show new tooltip
		showTooltip(item, description);
		pauseAnimation();
	}

	/**
	 * Show tooltip for a tech item
	 */
	function showTooltip(item, description) {
		// Create tooltip element
		const tooltip = document.createElement('div');
		tooltip.className = 'tech-tooltip';
		tooltip.dataset.tech = item.dataset.tech;
		tooltip.textContent = description;

		// Position tooltip above the item
		const rect = item.getBoundingClientRect();
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		tooltip.style.position = 'absolute';
		tooltip.style.left = (rect.left + rect.width / 2) + 'px';
		tooltip.style.top = (rect.top + scrollTop - 10) + 'px';

		document.body.appendChild(tooltip);
		activeTooltip = tooltip;

		// Add active class to item
		item.classList.add('tech-item-active');

		// Trigger animation
		setTimeout(function() {
			tooltip.classList.add('visible');
		}, 10);
	}

	/**
	 * Close all tooltips
	 */
	function closeAllTooltips() {
		const tooltips = document.querySelectorAll('.tech-tooltip');
		const activeItems = document.querySelectorAll('.tech-item-active');

		tooltips.forEach(function(tooltip) {
			tooltip.classList.remove('visible');
			setTimeout(function() {
				if (tooltip.parentNode) {
					tooltip.parentNode.removeChild(tooltip);
				}
			}, 300);
		});

		activeItems.forEach(function(item) {
			item.classList.remove('tech-item-active');
		});

		activeTooltip = null;
	}

	/**
	 * Pause animation
	 */
	function pauseAnimation() {
		if (techTrack) {
			techTrack.style.animationPlayState = 'paused';
			isPaused = true;
		}
	}

	/**
	 * Resume animation
	 */
	function resumeAnimation() {
		if (techTrack) {
			techTrack.style.animationPlayState = 'running';
			isPaused = false;
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
	item.dataset.description = tech.description || 'No description available';
	item.setAttribute('role', 'button');
	item.setAttribute('tabindex', '0');
	item.setAttribute('aria-label', tech.name + ' - Click to view description');

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
