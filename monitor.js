
//  "cursor"          : "none",

var originalPage = new ExternalStatusPage();
var failedConfigurations = originalPage.getFailedConfigurations();

var replacementPage = new ReplacementPage();

if (failedConfigurations.length === 0) {
	replacementPage.renderSuccess("Everything is passing ( ͡° ͜ʖ ͡°)");
}
else {
	replacementPage.renderFailures(failedConfigurations);
}

originalPage.hide();

chrome.storage.sync.get({
	refreshRate: 10,
}, function(items) {
 	window.setTimeout(function() {
		document.location.reload();
	}, 1000 * items.refreshRate);
});