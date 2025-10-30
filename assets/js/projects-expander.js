// ============================================
// PROJECT EXPANDER/ACCORDION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
	const projectItems = document.querySelectorAll('.project-expander-item');
	
	projectItems.forEach(function(item) {
		const header = item.querySelector('.project-expander-header');
		const content = item.querySelector('.project-expander-content');
		
		if (header && content) {
			header.addEventListener('click', function() {
				const isExpanded = item.classList.contains('expanded');
				
				// Close all other items
				projectItems.forEach(function(otherItem) {
					if (otherItem !== item) {
						otherItem.classList.remove('expanded');
					}
				});
				
				// Toggle current item
				if (isExpanded) {
					item.classList.remove('expanded');
				} else {
					item.classList.add('expanded');
				}
			});
		}
	});
});
