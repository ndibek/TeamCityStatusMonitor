var run = function(config) {
	window.setTimeout(function() {
		document.location.reload();
	}, 1000 * config.refreshRate);

	var originalPage = new ExternalStatusPage();
	originalPage.hide();	
	
	if (originalPage.allBuildsAreGreen()) {
		new ReplacementPage().renderSuccess(config.successMessage);
	}
	else {
		var failedBuilds = originalPage.getFailedBuilds();
		var notRunBuilds = originalPage.getNotRunBuilds();
		new ReplacementPage().renderFailures(failedBuilds, notRunBuilds);
	}
	
	if (config.hideCursor) {
		$("body").css("cursor", "none");
	};
}

loadConfig(run);