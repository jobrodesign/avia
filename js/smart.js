// Add missing javascript methods
Array.prototype.unique = function( b ) {
 var a = [], i, l = this.length;
 for( i=0; i<l; i++ ) {
  if( a.indexOf( this[i], 0, b ) < 0 ) { a.push( this[i] ); }
 }
 return a;
};

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

// Declare Global Variables
var jsonpath = "";
var imgpath = "";
var platform = "";
var nuggets;
var courses;
var assessments;
var skillprofiles;
var scorm;
var playlists;
var notifications;
var announcements;
var assignments;
var messages;
var library;
var mystatus;
var gameProfile;
var gameList;
var games;


function callScurl(request){
	if(platform){
		if(platform == 'opair'){
			return window.scurl(request);
		} else if (platform == 'android'){
			return CellCast.scurl(request);
			//console.log('Running on Android, request called ['+request+']');
		} else if (platform == 'ios'){
			window.location = request;
		}	else {
			scurl(request);
		}
	} else {
		window.location = request;
	}
}

// Define SCURL Function
function getPaths (){
	//alert('getPaths called');
	//window.location = "cellcast://data/getpaths/setpaths";
	window.scurl("cellcast://data/getpaths/setpaths");
}


// Define Callback Function
function setpaths(imgPath, Platform){
	imgpath = imgPath;
	platform = Platform;
	
	smartInit();
}


// Define Assignment constructors
var Nuggets = function (){
	//Set "this" to point to top
	var that = this;
	//Set the scurl
	this.scurl = 'cellcast://data/nuggets/nuggets.init';
	
	this.model = {};	
	
	//Set refresh method
	this.refresh = function(){
		this.get();
	};
	
	this.get = function(){
		var temp = callScurl(that.scurl);
		if(temp){
			that.init(temp);
		}
	};
	
	this.init = function(data){
		var data = $.parseJSON(data);
		that.model = data;
	};

};

var Assessments = function (){
	//Set "this" to point to top
	var that = this;
	this.scurl = 'cellcast://data/testsets/assessments.init';
	this.model = {};
	
	//Set refresh method
	this.refresh = function(){
		this.get();
	}
	
	this.init = function(data){
		var data = $.parseJSON(data);
		that.model = data;
	}
	
	//Set get method
	this.get = function(){
		var temp = callScurl(that.scurl);
		if(temp){
			that.init(temp);
		}
	}
	
}


// Define Assignment constructors
var Courses = function (){
	//Set "this" to point to top
	var that = this;
	//Set the scurl
	this.scurl = 'cellcast://data/courses/courses.init';
	
	this.model = {};	
	
	//Set refresh method
	this.refresh = function(){
		this.get();
	}
	
	this.get = function(){
		var temp = callScurl(that.scurl);
		if(temp){
			that.init(temp);
		}
	}
	
	this.init = function(data){
		var data = $.parseJSON(data);
		that.model = data;
	}
	
}


var Skillprofiles = function (){
	//Set "this" to point to top
	var that = this;
	//Set the scurl
	this.scurl = 'cellcast://data/skillprofiles/skillprofiles.init';
	
	this.model = {};	
	
	//Set refresh method
	this.refresh = function(){
		this.get();
	}
	
	this.get = function(){
		var temp = callScurl(that.scurl);
		if(temp){
			that.init(temp);
		}
	}
	
	this.init = function(data){
		var data = $.parseJSON(data);
		that.model = data;
	}
	
}

var Scorm = function (){
	//Set "this" to point to top
	var that = this;
	//Set the scurl
	this.scurl = 'cellcast://data/scorm/scorm.init';
	
	this.model = {};	
	
	//Set refresh method
	this.refresh = function(){
		this.get();
	}
	
	this.get = function(){
		var temp = callScurl(that.scurl);
		if(temp){
			that.init(temp);
		}
	}
	
	this.init = function(data){
		var data = $.parseJSON(data);
		that.model = data;
	}
	
}

var Playlists = function (){
	//Set "this" to point to top
	var that = this;
	//Set the scurl
	this.scurl = 'cellcast://data/playlists/playlists.init';
	
	this.model = {};	
	
	//Set refresh method
	this.refresh = function(){
		this.get();
	}
	
	this.get = function(){
		var temp = callScurl(that.scurl);
		if(temp){
			that.init(temp);
		}
	}
	
	this.init = function(data){
		var data = $.parseJSON(data);
		that.model = data;
	}
	
}


var Announcements = function (){
	//Set "this" to point to top
	var that = this;
	//Set the scurl
	this.scurl = 'cellcast://data/announcements/announcements.init';
	
	this.model = {};	
	
	//Set refresh method
	this.refresh = function(){
		this.get();
	}
	
	this.get = function(){
		var temp = callScurl(that.scurl);
		if(temp){
			that.init(temp);
		}
	}
	
	this.init = function(data){
		var data = $.parseJSON(data);
		that.model = data;
	}
	
}

var Notifications = function (){
	//Set "this" to point to top
	var that = this;
	//Set the scurl
	this.scurl = 'cellcast://data/notifications/notifications.init';
	
	this.model = {};	
	
	//Set refresh method
	this.refresh = function(){
		this.get();
	}
	
	this.get = function(){
		var temp = callScurl(that.scurl);
		if(temp){
			that.init(temp);
		}
	}
	
	this.init = function(data){
		var data = $.parseJSON(data);
		that.model = data;
	}
	
}

var GameProfile = function (){
	//Set "this" to point to top
	var that = this;
	//Set the scurl
	this.scurl = 'cellcast://data/game/profile/gameProfile.init';
	
	this.model = {};	
	
	//Set refresh method
	this.refresh = function(){
		this.get();
	}
	
	this.get = function(){
		var temp = callScurl(that.scurl);
		if(temp){
			that.init(temp);
		}
	}
	
	this.init = function(data){
		var data = $.parseJSON(data);
		that.model = data;
	}
}

var GameList = function (){
	//Set "this" to point to top
	var that = this;
	//Set the scurl
	this.scurl = 'cellcast://data/game/list/gameList.init';
	
	this.model = {};	
	
	//Set refresh method
	this.refresh = function(){
		this.get();
	}
	
	this.get = function(){
		var temp = callScurl(that.scurl);
		if(temp){
			that.init(temp);
		}
	}
	
	this.init = function(data){
		var data = $.parseJSON(data);
		that.model = data.games;
	}
}

var Games = function(){
	var that = this;
	
	this.games = gameList.model;

	this.totalPoints = 0;
	this.earnedPoints = 0;
	for (var i = 0; i < games.length; i++){
		var totalTemp = parseInt (games[i].game_points);
		var earnedTemp = parseInt (games[i].user_points);
		if(!isNaN(totalTemp)){
			this.totalPoints += totalTemp;
		};
		if(!isNaN(earnedTemp)){
			this.earnedPoints += earnedTemp;
		};
	};
	this.earnedPercent = Math.floor(( this.earnedPoints / this.totalPoints ) * 100);
	
	

	this.badges = [];
	
	for (var j = 0; j < games.length; j++){
		if(games[j].badges.length > 0){
			
			
			var temp ={};
			temp.game_id = games[j].game_id;
			temp.badges = games[j].badges;
			this.badges.push(temp);
		}
	};
	
	
	
};


var Assignments = function(){
	var that = this;
	
	this.categories = [];
	this.tags = [];
	
	this.newItems = nuggets.model.new_items +
		courses.model.new_items + 
		assessments.model.new_items + 
		scorm.model.new_items;
		
	this.totalItems = nuggets.model.total_items +
		courses.model.total_items + 
		assessments.model.total_items + 
		scorm.model.total_items;
		
		
	 
	this.nuggets = nuggets.model.nuggets;
	this.courses = courses.model.courses;
	this.assessments = assessments.model.testsets;
	this.scorm = scorm.model.courses;
	this.skillprofiles = skillprofiles.model;
	
	
		$.each(this.nuggets, function(){
			this.assignType = "nugget";
			if(this.metatags){
				this.metatags = this.metatags.split("|");
				this.category = this.metatags[0];
				that.categories.push(this.category);
				var tags = [];
				$.each(this.metatags, function(i, value){
					//console.log(this);
					if(i>0){
						tags.push(value);
						that.tags.push(value);
					}
				});
				this.tags = tags;
			}
		});	

	

		$.each(this.courses, function(){
			this.assignType = "course";
			if(this.metatags){
				this.metatags = this.metatags.split("|");
				this.category = this.metatags[0];
				var tags = [];
				$.each(this.metatags, function(i, value){
					//console.log(this);
					if(i>0){tags.push(value)}
				});
				this.tags = tags;
			}
		});

	

		$.each(this.assessments, function(){
			this.assignType = "assessment";
			if(this.metatags){
				this.metatags = this.metatags.split("|");
				this.category = this.metatags[0];
				var tags = [];
				$.each(this.metatags, function(i, value){
					//console.log(this);
					if(i>0){tags.push(value)}
				});
				this.tags = tags;
			}
		});


		$.each(this.scorm, function(){
			this.assignType = "scorm";
			if(this.metatags){
				this.metatags = this.metatags.split("|");
				this.category = this.metatags[0];
				var tags = [];
				$.each(this.metatags, function(i, value){
					//console.log(this);
					if(i>0){tags.push(value)}
				});
				this.tags = tags;
			}
		});

	
		if(skillprofiles.model){
		$.each(this.skillprofiles, function(){
			this.assignType = "skillprofile";
			if(this.metatags){
				this.metatags = this.metatags.split("|");
				this.category = this.metatags[0];
				var tags = [];
				$.each(this.metatags, function(i, value){
					//console.log(this);
					if(i>0){tags.push(value)}
				});
				this.tags = tags;
			}
		});
		}

	
	
	this.assignments = this.nuggets.concat(this.courses, this.assessments, this.scorm, this.skillprofiles);
	
	this.categories = this.categories.unique();
	this.tags = this.tags.unique();
	
	this.optional = optionalItems(this.assignments);

}

var Library = function (){
	//Set "this" to point to top
	var that = this;
	//Set the scurl
	this.scurl = 'cellcast://data/library/library.init';
	
	this.model = {};	
	
	//Set refresh method
	this.refresh = function(){
		this.get();
	}
	
	this.get = function(){
		var temp = callScurl(that.scurl);
		if(temp){
			that.init(temp);
		}
	}
	
	this.init = function(data){
		var data = $.parseJSON(data);
		that.model = data;
		that.process()
	}
	
	this.process = function(){
		if (that.model.courses){
		that.courses = that.model.courses;
		} else {
			that.courses = {};
		}
		if (that.model.nuggets){
			that.nuggets = that.model.nuggets;	
		} else {
			that.nuggets = {};
		}
		if (that.model.testsets){
			that.assessments = that.model.testsets;
		} else {
			that.assessments = {};
		}
		if (that.model.scorm){
			that.scorm = that.model.scorm;
		} else {
			that.scorm = {};
		}
		if(that.model.skillprofiles){
			that.skillprofiles = that.model.skillprofiles;
		} else {
			that.skillprofiles = {};
		}
		
		if(that.courses){
			$.each(that.courses, function(){
				this.selectionType = "course";
				if(this.metatags){
					this.metatags = this.metatags.split("|");
					this.category = this.metatags[0];
					var tags = [];
					$.each(this.metatags, function(i, value){
						//console.log(this);
						if(i>0){tags.push(value)}
					});
					this.tags = tags;
				}
			});
		}
		
		if(that.nuggets){
			$.each(that.nuggets, function(){
				this.selectionType = "nugget";
				if(this.metatags){
					this.metatags = this.metatags.split("|");
					this.category = this.metatags[0];
					var tags = [];
					$.each(this.metatags, function(i, value){
						//console.log(this);
						if(i>0){tags.push(value)}
					});
					this.tags = tags;
				}
			});
		}
		
		if(that.assessments){
			$.each(that.assessments, function(){
				this.selectionType = "assessment";
				if(this.metatags){
					this.metatags = this.metatags.split("|");
					this.category = this.metatags[0];
					var tags = [];
					$.each(this.metatags, function(i, value){
						//console.log(this);
						if(i>0){tags.push(value)}
					});
					this.tags = tags;
				}
			});
		}
		
		if(that.scorm){
			$.each(that.scorm, function(){
				this.selectionType = "scorm";
				if(this.metatags){
					this.metatags = this.metatags.split("|");
					this.category = this.metatags[0];
					var tags = [];
					$.each(this.metatags, function(i, value){
						//console.log(this);
						if(i>0){tags.push(value)}
					});
					this.tags = tags;
				}
			});
		}
		
		if(that.skillprofiles){
			$.each(that.skillprofiles, function(){
				this.selectionType = "skillprofile";
				if(this.metatags){
					this.metatags = this.metatags.split("|");
					this.category = this.metatags[0];
					var tags = [];
					$.each(this.metatags, function(i, value){
						//console.log(this);
						if(i>0){tags.push(value)}
					});
					this.tags = tags;
				}
			});
		}
	
		that.items = that.nuggets.concat(that.courses, that.assessments, that.scorm, that.skillprofiles);
		that.items.clean();
	}
}

var myStatus = function(){
	//Set "this" to point to top
	var that = this;
	//Set the scurl
	this.scurl = 'cellcast://data/mystatus/mystatus.init';
	
	this.model = {};	
	
	//Set refresh method
	this.refresh = function(){
		this.get();
	}
	
	this.get = function(){
		var temp = callScurl(that.scurl);
		if(temp){
			that.init(temp);
		}
	}
	
	this.init = function(data){
		var data = $.parseJSON(data);
		that.model = data;
		that.process();
	}
	
	this.process = function(){
	
		if (that.model.courses){
			that.courses = that.model.courses;
		} else {
			that.courses = {};
		}
		if (that.model.nuggets){
			that.nuggets = that.model.nuggets;	
		} else {
			that.nuggets = {};
		}
		if (that.model.testsets){
			that.assessments = that.model.testsets;
		} else {
			that.assessments = {};
		}
		if (that.model.scorm){
			that.scorm = that.model.scorm;
		} else {
			that.scorm = {};
		}
		if(that.model.skillprofiles){
			that.skillprofiles = that.model.skillprofiles;
		} else {
			that.skillprofiles = {};
		}
		if(that.model.activities){
			that.activities = that.model.activities;
		} else {
			that.activities = {};
		}
	
		that.items = that.nuggets.concat(that.courses, that.assessments, that.scorm, that.skillprofiles, that.activities);
		that.items.clean();
		
	} //end process
}



var Messages = function(){
	
	var that = this;
	
	this.newItems = announcements.model.new_items +
		notifications.model.new_items;
		
	this.totalItems = announcements.model.total_items +
		notifications.model.total_items;
	 
	this.announcements = announcements.model.messages;
	this.notifications = notifications.model.messages;
}




function smartInit(){
//		gameProfile = new GameProfile();
//		gameProfile.get();
//		
//		gameList = new GameList();
//		gameList.get();
//		
//		games = new Games();
		

	
	nuggets = new Nuggets();
	nuggets.get();
	
	courses = new Courses();
	courses.get();
	
	assessments = new Assessments();
	assessments.get();
	
	skillprofiles = new Skillprofiles();
	skillprofiles.get();
	
	scorm = new Scorm();
	scorm.get();
	
	assignments = new Assignments();

	announcements = new Announcements();
	announcements.get();
	
	notifications = new Notifications();
	notifications.get();
	
	messages = new Messages();
	
	library = new Library();
	library.get();
	
	//mystatus = new myStatus();
	pageInit();
	

};

$(function(){

	//getPaths();

		
});




