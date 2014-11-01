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
	"font-size": "1.5em",
	"float"    : "right",
};

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

var projectName;
var failedConfigurations = [];
$("tr").each(function()
{
	var nameContainer = $("td.buildConfigurationName", this);
	if (nameContainer.length === 0) {
		projectName = $("a.buildTypeName", this).text().trim();
		return;
	}

	var successful = $("img", nameContainer).attr("src").search(/success.png/) > 0;

	if (successful === true)
	{
		return;
	}

	var configurationName = nameContainer.text().trim();
	var date = $(".teamCityDateTime", this).text();
	
	var build = {name: projectName + " :: " + configurationName, date: date};
	failedConfigurations.push(build);
});

var failedConfigurationsCount = failedConfigurations.length;
var elements = [];
var width = window.innerWidth;
var height = window.innerHeight;
if (failedConfigurationsCount === 0)
{
		var boxStyle2 = {};
		$.extend(boxStyle2, boxStyle, {
			"height"          : height,
			"width"           : width,
		});

		var boxElement = $("<div>").css(boxStyle2);

		var nameElement = $("<div>").text("Everything is passing ( ͡° ͜ʖ ͡°)").css(configurationNameStyle);
		boxElement.append(nameElement);

		elements.push(boxElement);
}
else
{
	height = window.innerHeight / failedConfigurationsCount;
	$.each(failedConfigurations, function(index, build) {
		var boxStyle2 = {};
		$.extend(boxStyle2, boxStyle, {
			"height"          : height,
			"width"           : width,
			"background-color": "red",
			"top"             : height * index,
		});

		var boxElement = $("<div id='fail'>").css(boxStyle2);

		var nameElement = $("<div>").text(build.name).css(configurationNameStyle);
		boxElement.append(nameElement);

		var desc = "Finished: " + build.date;
		var descElement = $("<div>").text(desc).css(dateStyle);
		boxElement.append(descElement);
		elements.push(boxElement);
	});	
}

$.each(elements, function(index, element) {
	$("<div>").appendTo($("body").append(element));
});

$(".tcTable").hide();

window.setTimeout(function() {
	document.location.reload();
}, 10 * 1000);

// chrome.storage.sync.get({
//   favoriteColor: 'red',
// }, function(items) {
//    console.log(items.favoriteColor);
// });