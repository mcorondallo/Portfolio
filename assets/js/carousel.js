// ============================================
// PROJECT CAROUSEL
// ============================================
document.addEventListener('DOMContentLoaded', function() {
	const carouselContainer = document.querySelector('.carousel-container');
	const carouselItems = document.querySelectorAll('.carousel-item');
	const prevButton = document.querySelector('.carousel-button.prev');
	const nextButton = document.querySelector('.carousel-button.next');
	const indicator = document.querySelector('.carousel-indicator');

	// Only initialize if carousel exists
	if (carouselContainer && carouselItems.length > 0) {
		let currentIndex = 0;

		// Initial display
		updateCarousel();

		// Event listeners
		prevButton.addEventListener('click', showPrevSlide);
		nextButton.addEventListener('click', showNextSlide);

		function showPrevSlide() {
			currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
			updateCarousel();
		}

		function showNextSlide() {
			currentIndex = (currentIndex + 1) % carouselItems.length;
			updateCarousel();
		}

		function updateCarousel() {
			carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
			indicator.textContent = `${currentIndex + 1}/${carouselItems.length}`;
		}
	}
});
