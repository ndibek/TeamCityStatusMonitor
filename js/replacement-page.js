function ReplacementPage(hideCursor) {

	this.hideCursor = hideCursor;

  this.renderSuccess = function(successMessage) {
		var boxElement = $("<div>").addClass("tsm_box").addClass("tsm_success");

		if (this.hideCursor) {
			boxElement.css("cursor", "none");
		}

		var heading = $("<div>").text(successMessage).addClass("tsm_configurationName");

		boxElement.append(heading);
		boxElement.appendTo($("body"));
  };

  this.renderFailures = function(failedConfigurations) {
  	var self = this;

		$.each(failedConfigurations, function(index, build) {
			var boxElement = $("<div>").addClass("tsm_box");

			if (index > 0) {
				boxElement.css("border-top-width", "0px");
			}

			if (self.hideCursor) {
				boxElement.css("cursor", "none");
			}

			if (build.hasFailed()) {
				boxElement.addClass("tsm_failure");
				var heading = $("<div>").text(build.getName()).addClass("tsm_configurationName");
				var number  = $("<div>").text(build.getNumber()).addClass("tsm_buildNumber");
				var date    = $("<div>").text("Failed on " + build.getDate()).addClass("tsm_date");
				var elapsed = $("<div>").text(build.getElapsedTime()).addClass("tsm_elapsed");

				boxElement.append(heading).append(number).append(date).append(elapsed);
				boxElement.appendTo($("body"));	
			}
			else {
				boxElement.addClass("tsm_notrun");
				var heading = $("<div>").text(build.getName()).addClass("tsm_configurationName");
				var message = $("<div>").html("Build has never run").addClass("tsm_date");

				boxElement.append(heading).append(message);;
				boxElement.appendTo($("body"));
			}

			
		});	
  };

}