// ============================================
// STAGGERED NAVIGATION MENU
// ============================================
document.addEventListener('DOMContentLoaded', function() {
	const navToggle = document.getElementById('navToggle');
	const staggeredMenu = document.getElementById('staggeredMenu');
	const staggeredItems = document.querySelectorAll('.staggered-item');

	// Toggle menu on button click
	if (navToggle && staggeredMenu) {
		navToggle.addEventListener('click', function(e) {
			e.stopPropagation();
			navToggle.classList.toggle('active');
			staggeredMenu.classList.toggle('active');

			// Update ARIA attributes
			const isExpanded = navToggle.classList.contains('active');
			navToggle.setAttribute('aria-expanded', isExpanded);
		});

		// Close menu when clicking outside
		document.addEventListener('click', function(e) {
			if (!e.target.closest('.staggered-nav')) {
				navToggle.classList.remove('active');
				staggeredMenu.classList.remove('active');
				navToggle.setAttribute('aria-expanded', 'false');
			}
		});

		// Close menu when clicking on a menu item
		staggeredItems.forEach(function(item) {
			item.addEventListener('click', function(e) {
				navToggle.classList.remove('active');
				staggeredMenu.classList.remove('active');
				navToggle.setAttribute('aria-expanded', 'false');
			});
		});

		// Close menu on Escape key
		document.addEventListener('keydown', function(e) {
			if (e.key === 'Escape' && navToggle.classList.contains('active')) {
				navToggle.classList.remove('active');
				staggeredMenu.classList.remove('active');
				navToggle.setAttribute('aria-expanded', 'false');
				navToggle.focus();
			}
		});

		// Keyboard navigation for menu items
		staggeredItems.forEach(function(item, index) {
			item.addEventListener('keydown', function(e) {
				if (e.key === 'ArrowDown') {
					e.preventDefault();
					const nextItem = staggeredItems[index + 1];
					if (nextItem) nextItem.focus();
				} else if (e.key === 'ArrowUp') {
					e.preventDefault();
					const prevItem = staggeredItems[index - 1];
					if (prevItem) {
						prevItem.focus();
					} else {
						navToggle.focus();
					}
				}
			});
		});

		// Highlight active section on scroll
		function updateActiveMenuItem() {
			const scrollPosition = window.scrollY + 150;
			const sections = document.querySelectorAll('article[id]');

			let currentSection = null;

			sections.forEach(function(section) {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;
				const sectionId = section.getAttribute('id');

				if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
					currentSection = sectionId;
				}
			});

			// Update active states
			staggeredItems.forEach(function(item) {
				item.classList.remove('active');
				const href = item.getAttribute('href');
				if (currentSection && href === '#' + currentSection) {
					item.classList.add('active');
					item.setAttribute('aria-current', 'true');
				} else {
					item.removeAttribute('aria-current');
				}
			});
		}

		// Throttle scroll event for performance
		let scrollTimeout;
		window.addEventListener('scroll', function() {
			if (scrollTimeout) {
				window.cancelAnimationFrame(scrollTimeout);
			}
			scrollTimeout = window.requestAnimationFrame(function() {
				updateActiveMenuItem();
			});
		});

		// Initial highlight
		updateActiveMenuItem();
	}
});
