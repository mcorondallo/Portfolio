// ============================================
// PROJECT CATEGORY GROUPS (collapsible)
// Independent of projects-expander.js, which still handles each
// individual project row's own expand/collapse inside a category.
// ============================================
document.addEventListener('DOMContentLoaded', function() {
	const categories = document.querySelectorAll('.projects-category');

	categories.forEach(function(category) {
		const header = category.querySelector('.projects-category-header');
		if (!header) return;

		header.addEventListener('click', function() {
			const isExpanded = category.classList.contains('expanded');
			category.classList.toggle('expanded', !isExpanded);
			header.setAttribute('aria-expanded', String(!isExpanded));
		});
	});
});
