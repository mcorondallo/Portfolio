// ============================================
// BACKGROUND BLUR ON SCROLL
// ============================================
document.addEventListener('DOMContentLoaded', function() {
	const storySection = document.getElementById('story');
	const bgElement = document.getElementById('bg');
	
	if (!storySection || !bgElement) return;
	
	// Create observer to detect when story section is visible
	const observer = new IntersectionObserver(function(entries) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				// Story section is visible - add blur
				bgElement.classList.add('blurred');
			} else {
				// Story section not visible - remove blur
				bgElement.classList.remove('blurred');
			}
		});
	}, {
		threshold: 0.2, // Trigger when 20% of section is visible
		rootMargin: '-10% 0px -10% 0px' // Add some margin for smoother transition
	});
	
	observer.observe(storySection);
});
