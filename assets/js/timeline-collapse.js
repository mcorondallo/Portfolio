// ============================================
// TIMELINE CARD COLLAPSE/EXPAND
// ============================================
document.addEventListener('DOMContentLoaded', function() {
	const timelineCards = document.querySelectorAll('.timeline-card');
	let allExpanded = false;

	timelineCards.forEach(function(card) {
		// Add collapsed class by default
		card.classList.add('collapsed');

		// Add click indicator
		const expandIndicator = document.createElement('div');
		expandIndicator.className = 'expand-indicator';
		expandIndicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
		card.appendChild(expandIndicator);

		// Make card clickable
		card.style.cursor = 'pointer';

		// Toggle ALL cards on ANY click
		card.addEventListener('click', function() {
			allExpanded = !allExpanded;

			timelineCards.forEach(function(c) {
				const indicator = c.querySelector('.expand-indicator');

				if (allExpanded) {
					// Expand all cards
					c.classList.remove('collapsed');
					c.classList.add('expanded');
					if (indicator) {
						indicator.innerHTML = '<i class="fas fa-chevron-up"></i>';
					}
				} else {
					// Collapse all cards
					c.classList.add('collapsed');
					c.classList.remove('expanded');
					if (indicator) {
						indicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
					}
				}
			});
		});

		// Add hover effect
		card.addEventListener('mouseenter', function() {
			if (card.classList.contains('collapsed')) {
				card.style.transform = 'translateY(-5px)';
			}
		});

		card.addEventListener('mouseleave', function() {
			if (card.classList.contains('collapsed')) {
				card.style.transform = 'translateY(0)';
			}
		});
	});
});
