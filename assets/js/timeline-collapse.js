// ============================================
// TIMELINE CARD COLLAPSE/EXPAND
// ============================================
document.addEventListener('DOMContentLoaded', function() {
	const timelineCards = document.querySelectorAll('.timeline-card');
	
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
		
		// Toggle expanded/collapsed on click
		card.addEventListener('click', function() {
			const isCollapsed = card.classList.contains('collapsed');
			
			if (isCollapsed) {
				// Expand this card
				card.classList.remove('collapsed');
				card.classList.add('expanded');
				expandIndicator.innerHTML = '<i class="fas fa-chevron-up"></i>';
			} else {
				// Collapse this card
				card.classList.add('collapsed');
				card.classList.remove('expanded');
				expandIndicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
			}
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
