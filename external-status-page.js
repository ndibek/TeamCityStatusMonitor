function ExternalStatusPage () {

  this.getFailedConfigurations = function() {
    var failedConfigurations = [];
    
		$("table.tcTable").each(function(index, table) {
			var projectName = $("div.projectName", this).text().trim();
			
			$("tr", table).each(function(index, row) {
				if (index == 0 || $("img.buildTypeIcon", row).attr("src").search(/success.png/) > 0) {
					return;
				}

				var configurationName = $("td.buildConfigurationName", row).text().trim();
				var buildNumber = $("div.teamCityBuildNumber a", row).text().trim();
				var date = $("div.teamCityDateTime", row).text().trim();

				var build = new Build(
					projectName + " :: " + configurationName,
					buildNumber,
					date
				);

				failedConfigurations.push(build);
			});
		});
		return failedConfigurations;
  };

  this.hide = function() {
  	$("table.tcTable").hide();
  };
}