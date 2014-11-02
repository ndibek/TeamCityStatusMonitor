function ReplacementPage(hideCursor) {

	this.hideCursor = hideCursor;

  this.renderSuccess = function(successMessage) {
		var boxElement = this.createDivWithClasses(["tsm_box", "tsm_success"]);

		if (this.hideCursor) {
			boxElement.css("cursor", "none");
		}

		var heading = this.createDivWithClasses(["tsm_configurationName"]).text(successMessage);

		boxElement.append(heading);
		boxElement.appendTo($("body"));
  };

  this.renderFailures = function(failedConfigurations) {
  	var self = this;

		$.each(failedConfigurations, function(index, build) {
			var boxElement;

			if (build.hasFailed()) {
				boxElement = self.createDivWithClasses(["tsm_box", "tsm_failure"]);
				var heading = self.createDivWithClasses(["tsm_configurationName"]).text(build.getName());
				var number  = self.createDivWithClasses(["tsm_buildNumber"]).text(build.getNumber());
				var date    = self.createDivWithClasses(["tsm_date"]).text("Failed on " + build.getDate());
				var elapsed = self.createDivWithClasses(["tsm_elapsed"]).text(build.getElapsedTime());

				boxElement.append(heading).append(number).append(date).append(elapsed);
			}
			else {
				boxElement = self.createDivWithClasses(["tsm_box", "tsm_notrun"]);
				var heading = self.createDivWithClasses(["tsm_configurationName"]).text(build.getName());
				var message = self.createDivWithClasses(["tsm_date"]).html("Build has never run");

				boxElement.append(heading).append(message);;
			}

			if (index > 0) {
				boxElement.css("border-top-width", "0px");
			}

			if (self.hideCursor) {
				boxElement.css("cursor", "none");
			}

			boxElement.appendTo($("body"));	
		});	
  };

  this.createDivWithClasses = function(classes) {
  	var element = $("<div>");
  	$.each(classes, function(index, c) {
  		element.addClass(c);
  	});
  	return element;
  }

}