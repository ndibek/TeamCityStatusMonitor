function ExternalStatusPage () {
	this.failedBuilds = [];
	this.notRunBuilds = [];

	this.allBuildsAreGreen= function() {

		var that = this;
		$("table.tcTable").each(function(index, table) {
			var projectName = $("div.projectName", this).text().trim();
			
			$("tr", table).each(function(index, row) {
				if (index == 0 || $("img.buildTypeIcon", row).attr("src").search(/success.png/) > -1) {
					return;
				}

				var configurationName = $("td.buildConfigurationName", row).text().trim();

				if ($("img.buildTypeIcon", row).attr("src").search(/buildGray.png/) > -1) {
					var build = new Build(
						projectName,
						configurationName
					);

					that.notRunBuilds.push(build);
					return;
				}

				var buildNumber = $("div.teamCityBuildNumber a", row).text().trim();
				var date = $("div.teamCityDateTime", row).text().trim();

				var build = new Build(
					projectName,
					configurationName,
					buildNumber,
					date
				);

				that.failedBuilds.push(build);
			});
		});

		return this.failedBuilds.length === 0 && this.notRunBuilds.length === 0;
	};

  this.getFailedBuilds = function() {
		return this.failedBuilds;    
  };

	this.getNotRunBuilds = function() {
		return this.notRunBuilds;    
  };  

  this.hide = function() {
  	$("table.tcTable").hide();
  };
}