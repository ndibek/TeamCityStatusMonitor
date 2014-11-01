var run = function(config) {
	window.setTimeout(function() {
		document.location.reload();
	}, 1000 * config.refreshRate);
	
	var originalPage = new ExternalStatusPage();
	originalPage.hide();	

	var failedConfigurations = originalPage.getFailedConfigurations();

	var replacementPage = new ReplacementPage(config.hideCursor);

	if (failedConfigurations.length === 0) {
		replacementPage.renderSuccess(config.successMessage);
	}
	else {
		replacementPage.renderFailures(failedConfigurations);
	}
}

loadConfig(run);