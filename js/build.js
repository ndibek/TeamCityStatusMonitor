function Build(project, name, number, date) {
	
	this.project = project;
	this.name = name;
	this.number = number;
	this.date = date;

  this.getName = function() {
		return this.project + " :: " + this.name;
  };

  this.getNumber = function() {
  	return this.number;
  };

  this.getDate = function() {
  	return this.date;
  };

  this.getDateObject = function() {
		var months = {
			"Jan" : 0,
			"Feb" : 1,
			"Mar" : 2,
			"Apr" : 3,
			"May" : 4,
			"Jun" : 5,
			"Jul" : 6,
			"Aug" : 7,
			"Sep" : 8,
			"Oct" : 9,
			"Nov" : 10,
			"Dec" : 11,
		};

		var month = /\s\w+\s/.exec(this.date)[0].trim();
		month = months[month];

		var day = /\d+\s/.exec(this.date)[0].trim();
		var year = "20" + (/\s\d+/.exec(this.date)[0].trim());

		var hours = /\s\d+:/.exec(this.date)[0].trim().replace(":", "");
		var minutes = /:\d+/.exec(this.date)[0].trim().replace(":", "");

		return new Date(year, month, day, hours, minutes, 0, 0);
  }

  this.getElapsedTime = function() {
	 	var then = this.getDateObject();
		var now = new Date();

		var minutes = Math.floor((now - then)/1000/60);

		if (minutes == 0) {
			return "Less than a minute ago";
		} 

		if (minutes < 60) {
			return this.constructSubString(minutes, "minute") + " ago";
		} 

		var hours = Math.floor(minutes / 60);
		minutes = minutes % 60;

		if (hours < 24) {
			return this.constructString(hours, "hour", minutes, "minute");
		}

		var days = Math.floor(hours / 24);
		hours = hours % 24;

		return this.constructString(days, "day", hours, "hour");
  };

  this.constructString = function(val1, unit1, val2, unit2) {
  	return this.constructSubString(val1, unit1) + " " + this.constructSubString(val2, unit2) + " ago";
  };

  this.constructSubString = function(val, unit) {
  	if (val > 1) { unit += "s" };
  	return val + " " + unit;
  }
}