var run = function(config) {
	window.setTimeout(function() {
		document.location.reload();
	}, 1000 * config.refreshRate);
	
	var originalPage = new ExternalStatusPage();
	originalPage.hide();	
	
	if (config.hideCursor) {
		$("body").css("cursor", "none");
	};

	var failedConfigurations = originalPage.getFailedConfigurations();

	var replacementPage = new ReplacementPage();

	if (failedConfigurations.length === 0) {
		replacementPage.renderSuccess(config.successMessage);
	}
	else {
		replacementPage.renderFailures(failedConfigurations);
	}
}

loadConfig(run);