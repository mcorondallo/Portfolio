// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
	// Configuration
	const config = {
		threshold: 0.15,        // Trigger when 15% visible
		rootMargin: '0px 0px -50px 0px'  // Trigger slightly before entering viewport
	};

	// Create Intersection Observer
	const observer = new IntersectionObserver(function(entries) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				// Add revealed class with slight delay for smoothness
				setTimeout(function() {
					entry.target.classList.add('revealed');
				}, 100);

				// Optional: Unobserve after reveal for one-time animation
				// Uncomment the line below if you want animations to play only once
				// observer.unobserve(entry.target);
			}
		});
	}, config);

	// Observe all scroll-reveal elements
	const selectors = [
		'.scroll-reveal',
		'.scroll-reveal-from-left',
		'.scroll-reveal-from-right',
		'.scroll-reveal-scale',
		'.scroll-reveal-delay-1',
		'.scroll-reveal-delay-2',
		'.scroll-reveal-delay-3',
		'.scroll-reveal-delay-4'
	];

	selectors.forEach(function(selector) {
		const elements = document.querySelectorAll(selector);
		elements.forEach(function(element) {
			observer.observe(element);
		});
	});

	// Optional: Add reveal on scroll up as well
	// This allows animations to replay when scrolling back up
	window.addEventListener('scroll', function() {
		// Additional logic here if needed
	});
});
