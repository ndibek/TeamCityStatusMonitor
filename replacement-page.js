function ReplacementPage(hideCursor) {

	this.hideCursor = hideCursor;
	this.height     = window.innerHeight;
	this.width      = window.innerWidth;

  this.renderSuccess = function(successMessage) {
		var boxElement = $("<div>").addClass("tsm_box")
												.css("height", this.height)
												.css("width",  this.width);

		if (this.hideCursor) {
			boxElement.css("cursor", "none");
		}

		var heading = $("<div>").text(successMessage).addClass("tsm_configurationName");

		boxElement.append(heading);
		boxElement.appendTo($("body"));
  };

  this.renderFailures = function(failedConfigurations) {
  	var self = this;
  	self.height = this.height / failedConfigurations.length;

		$.each(failedConfigurations, function(index, build) {
			var boxElement = $("<div id='fail'>").addClass("tsm_box")
			                     .css("height", self.height)
			                     .css("width", self.width)
			                     .css("background-color", "red")
			                     .css("top", self.height * index);

			if (index > 0) {
				boxElement.css("border-top-width", "0px");
			}

			if (self.hideCursor) {
				boxElement.css("cursor", "none");
			}

			var heading = $("<div>").text(build.name).addClass("tsm_configurationName");
			var number  = $("<div>").text(build.number).addClass("tsm_buildNumber");
			var date    = $("<div>").text(build.date).addClass("tsm_date");

			boxElement.append(heading).append(number).append(date);
			boxElement.appendTo($("body"));
		});	
  };

}