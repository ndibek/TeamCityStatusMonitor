function ExternalStatusPage () {
  this.getFailedConfigurations = function() {
    var failedConfigurations = [];
		$("table.tcTable").each(function() {
			var projectName = $("div.projectName", this).text().trim();
			
			$("tr", this).each(function(index) {
				if (index == 0) {
					return;
				}
				
				var successful = $("img.buildTypeIcon", this).attr("src").search(/success.png/) > 0;
				if (successful === true)
				{
					return;
				}		

				var configurationName = $("td.buildConfigurationName", this).text().trim();
				var buildNumber = $("div.teamCityBuildNumber a", this).text().trim();
				var date = $("div.teamCityDateTime", this).text().trim();

				var build = {name: projectName + " :: " + configurationName, number: buildNumber, date: date};
				failedConfigurations.push(build);
			});
		});
		return failedConfigurations;
  };
  this.hide = function() {
  	$("table.tcTable").hide();
  }
}