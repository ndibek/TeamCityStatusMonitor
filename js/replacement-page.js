function ReplacementPage(hideCursor) {

	if (hideCursor) {
		$("body").css("cursor", "none");
	};

  this.renderSuccess = function(successMessage) {
		var boxElement = divWithClasses(["tsm_box", "tsm_success"]);

		var heading = divWithClasses(["tsm_configurationName"]).text(successMessage);

		boxElement.append(heading);

		var wrapper =  divWithClasses(["tsm_wrapper"]);
		wrapper.append(boxElement);
		wrapper.appendTo($("body"));
  };

  this.renderFailures = function(failedConfigurations) {
		var wrapper =  divWithClasses(["tsm_wrapper"]);

		$.each(failedConfigurations, function(index, build) {
			var boxElement;

			if (build.hasFailed()) {
				boxElement = divWithClasses(["tsm_box", "tsm_failure"]);
				var heading = divWithClasses(["tsm_configurationName"]).text(build.getName());
				var number  = divWithClasses(["tsm_buildNumber"]).text(build.getNumber());
				var date    = divWithClasses(["tsm_date"]).html("Failed on " + build.getDate() + "<br /><br/>" + build.getElapsedTime());
				//var elapsed = divWithClasses(["tsm_elapsed"]).text();

				boxElement.append(heading).append(number).append(date);//.append(elapsed);
			}
			else {
				boxElement = divWithClasses(["tsm_box", "tsm_notrun"]);
				var heading = divWithClasses(["tsm_configurationName"]).text(build.getName());
				var message = divWithClasses(["tsm_date"]).text("Build has never run");

				boxElement.append(heading).append(message);;
			}

				wrapper.append(boxElement);
		});	
			wrapper.appendTo($("body"));	
  };

  divWithClasses = function(classes) {
  	var element = $("<div>");
  	$.each(classes, function(index, c) {
  		element.addClass(c);
  	});
  	return element;
  }

}