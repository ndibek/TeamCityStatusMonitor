function ReplacementPage() {

	this.wrapper = $("<div>").addClass("tsm_wrapper");

  this.renderSuccess = function(successMessage) {
		this.appendToBody(this.wrapper);
		var bgElement = $("<div>").addClass("tsm_success");

		var heading = $("<div>").addClass("tsm_success_text").html(successMessage);

		bgElement.append(heading);

		this.wrapper.append(bgElement);
  };

  this.appendToBody = function(element) {
  	element.appendTo($("body"));
  };

  this.renderFailures = function(failedConfigurations) {
		this.appendToBody(this.wrapper);
		
		var that = this;
		$.each(failedConfigurations, function(index, build) {
			var bgElement;

			if (build.hasFailed()) {
				var dateString = "Failed on " + build.getDate() + "<br /><br/>" + build.getElapsedTime();

				bgElement  = $("<div>").addClass("tsm_failure");
				var heading = $("<div>").addClass("tsm_configurationName").html(build.getName());
				var number  = $("<div>").addClass("tsm_buildNumber").html(build.getNumber());
				var date    = $("<div>").addClass("tsm_date").html(dateString);

				bgElement.append(heading).append(number).append(date);
			}
			else {
				bgElement = $("<div>").addClass("tsm_notrun");
				var heading = $("<div>").addClass("tsm_configurationName").html(build.getName());
				var message = $("<div>").addClass("tsm_date").html("Build has never run");

				bgElement.append(heading).append(message);;
			}

			that.wrapper.append(bgElement);
		});	
		
  };
}