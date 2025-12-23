// Small site scripts: set current and launch year
(function () {
	var currentYearEl = document.getElementById('currentYear');
	if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();

	var launchYearEl = document.getElementById('launchYear');
	if (launchYearEl) {
		var startDate = new Date('20 Dec 2024');
		launchYearEl.textContent = startDate.getFullYear();
	}
})();
