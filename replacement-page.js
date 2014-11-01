function ReplacementPage () {

  this.renderSuccess = function(successMessage) {
  	var elements = [];
		var width = window.innerWidth;
		var height = window.innerHeight;
		
		var boxElement = $("<div>").addClass("tsm_box").css("height", height).css("width", width);

		var nameElement = $("<div>").text(successMessage).addClass("tsm_configurationName");
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
  	height = height / failedConfigurations.length;
		$.each(failedConfigurations, function(index, build) {
			var boxElement = $("<div id='fail'>").addClass("tsm_box").css("height", height).css("width", width).css("background-color", "red").css("top", height * index);

			var nameElement = $("<div>").text(build.name).addClass("tsm_configurationName");
			boxElement.append(nameElement);

			var numberElement = $("<div>").text(build.number).addClass("tsm_buildNumber");
			boxElement.append(numberElement);

			var desc = "Finished: " + build.date;
			var descElement = $("<div>").text(desc).addClass("tsm_date");
			boxElement.append(descElement);
			elements.push(boxElement);
		});	
		$.each(elements, function(index, element) {
			$("<div>").appendTo($("body").append(element));
		});
  }

}