var baseTextStyle = {
	"color"      : "white",
	"text-shadow": "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
	"margin"     : "0.1em",
};

var configurationNameStyle = {
	"font-size": "2.5em",
	"float"    : "left",
};

var dateStyle = {
	"font-size": "2em",
	"float"    : "right",
};

var buildNumberStyle = {
	"font-size": "3em",
	"float"    : "left",
	"color"    : "white",
	"opacity"  : "0.5",
	"position" : "absolute",
	"bottom"   : "0.2em",
	"left"     : "0.2em",
}

var boxStyle = {
//	"cursor"          : "none",
	"position"          : "absolute",
	"float"             : "left",
	"margin"            : 0,
	"padding"           : 0,
	"border"            : "solid 3px black",
	"font-family"       : "Arial,Helvetica,sans-serif",
	"box-sizing"        :"border-box",
	"-moz-box-sizing"   :"border-box",
	"-webkit-box-sizing":"border-box",
	"left"              : 0,
	"background-color"  : "green",
	"top"               : 0,
};

$.extend(dateStyle, baseTextStyle);
$.extend(configurationNameStyle, baseTextStyle);

var originalPage = new ExternalStatusPage();
var failedConfigurations = originalPage.getFailedConfigurations();

var replacementPage = new ReplacementPage();

if (failedConfigurations.length === 0) {
	replacementPage.renderSuccess();
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