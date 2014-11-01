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

function ReplacementPage () {
  this.renderSuccess = function() {
  	var elements = [];
		var width = window.innerWidth;
		var height = window.innerHeight;
		
		var boxStyle2 = {};
		$.extend(boxStyle2, boxStyle, {
			"height"          : height,
			"width"           : width,
		});

		var boxElement = $("<div>").css(boxStyle2);

		var nameElement = $("<div>").text("Everything is passing ( ͡° ͜ʖ ͡°)").css(configurationNameStyle);
		boxElement.append(nameElement);

		elements.push(boxElement);
		$.each(elements, function(index, element) {
			$("<div>").appendTo($("body").append(element));
		});
  },

  this.renderFailures = function(failedBuilds) {
  	var elements = [];
		var width = window.innerWidth;
		var height = window.innerHeight;
  	height = window.innerHeight / failedConfigurations.length;
		$.each(failedConfigurations, function(index, build) {
			var boxStyle2 = {};
			$.extend(boxStyle2, boxStyle, {
				"height"          : height,
				"width"           : width,
				"background-color": "red",
				"top"             : height * index,
			});

			var boxElement = $("<div id='fail'>").css(boxStyle2);

			var nameElement = $("<div>").text(build.name).addClass("configurationNameStyle");
			boxElement.append(nameElement);

			var numberElement = $("<div>").text(build.number).addClass("buildNumberStyle");
			boxElement.append(numberElement);

			var desc = "Finished: " + build.date;
			var descElement = $("<div>").text(desc).addClass("dateStyle");
			boxElement.append(descElement);
			elements.push(boxElement);
		});	
		$.each(elements, function(index, element) {
			$("<div>").appendTo($("body").append(element));
		});
  }
}