var run = function(config) {
	window.setTimeout(function() {
		document.location.reload();
	}, 1000 * config.refreshRate);
	
	var originalPage = new ExternalStatusPage();
	var failedConfigurations = originalPage.getFailedConfigurations();

	var replacementPage = new ReplacementPage(config.hideCursor);

	if (failedConfigurations.length === 0) {
		replacementPage.renderSuccess(config.successMessage);
	}
	else {
		replacementPage.renderFailures(failedConfigurations);
	}

	originalPage.hide();	
}


chrome.storage.local.get({
	refreshRate: 10,
	successMessage: "It's all good",
	hideCursor: false,
}, function(config) {
	run(config); 	
});