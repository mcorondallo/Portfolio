// ============================================
// TIMELINE NAVIGATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
	const timelineTrack = document.getElementById('timelineTrack');
	const navLeft = document.getElementById('timelineNavLeft');
	const navRight = document.getElementById('timelineNavRight');

	if (timelineTrack && navLeft && navRight) {
		// Scroll amount (one card width + gap)
		const scrollAmount = 350; // 320px card + 30px gap

		navLeft.addEventListener('click', function() {
			timelineTrack.scrollBy({
				left: -scrollAmount,
				behavior: 'smooth'
			});
		});

		navRight.addEventListener('click', function() {
			timelineTrack.scrollBy({
				left: scrollAmount,
				behavior: 'smooth'
			});
		});

		// Update arrow visibility based on scroll position
		function updateArrows() {
			const scrollLeft = timelineTrack.scrollLeft;
			const maxScroll = timelineTrack.scrollWidth - timelineTrack.clientWidth;

			// Hide left arrow if at start
			if (scrollLeft <= 0) {
				navLeft.style.opacity = '0.3';
				navLeft.style.cursor = 'default';
			} else {
				navLeft.style.opacity = '1';
				navLeft.style.cursor = 'pointer';
			}

			// Hide right arrow if at end
			if (scrollLeft >= maxScroll - 10) {
				navRight.style.opacity = '0.3';
				navRight.style.cursor = 'default';
			} else {
				navRight.style.opacity = '1';
				navRight.style.cursor = 'pointer';
			}
		}

		// Initial update
		updateArrows();

		// Update on scroll
		timelineTrack.addEventListener('scroll', updateArrows);

		// Keyboard navigation
		timelineTrack.addEventListener('keydown', function(e) {
			if (e.key === 'ArrowLeft') {
				e.preventDefault();
				navLeft.click();
			} else if (e.key === 'ArrowRight') {
				e.preventDefault();
				navRight.click();
			}
		});
	}
});
