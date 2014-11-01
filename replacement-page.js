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
			var boxElement = $("<div>").addClass("tsm_box")
			                     .css("height", self.height)
			                     .css("width", self.width)
			                     .css("top", self.height * index);

			if (index > 0) {
				boxElement.css("border-top-width", "0px");
			}

			if (self.hideCursor) {
				boxElement.css("cursor", "none");
			}

			if (build.hasFailed()) {
				var heading = $("<div>").text(build.getName()).addClass("tsm_configurationName");
				var number  = $("<div>").text(build.getNumber()).addClass("tsm_buildNumber");
				var date    = $("<div>").html("Failed on " + build.getDate() + "<br>" + build.getElapsedTime()).addClass("tsm_date");

				boxElement.css("background-color", "red");
				boxElement.append(heading).append(number).append(date);
				boxElement.appendTo($("body"));	
			}
			else {
				var heading = $("<div>").text(build.getName()).addClass("tsm_configurationName");
				var date    = $("<div>").html("Build has never run").addClass("tsm_date");

				boxElement.css("background-color", "orange");
				boxElement.append(heading).append(date);;
				boxElement.appendTo($("body"));
			}

			
		});	
  };

}