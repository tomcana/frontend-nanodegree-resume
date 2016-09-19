var formattedName = HTMLheaderName.replace("%data%","Tomomi Shiba");

var role ="Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	"name":"Tomomi Shiba",
	"role":"web developer",
	"contacts":{
		"email":"follwthedot@gmail.com",
		"mobile":"XXX-XXXX-XXXX",
		"github":"tomcana",
		"location":"Matsuyama city,Ehime Japan"
	},
	"biopic":"../images/profile_pic.jpg",
	"welcomeMessage":"WELCOME!",
	"skills":["awesomeness","programming","teaching","js"]
};

var work = {
	"jobs": [{
		"employer": "Eyemovic",
		"title": "Website operation staff",
		"dates": "August 2013 - present",
		"description": "Design and markup customers’ websites.  In charge of updating websites(hotel, gymnastics organization etc)."
	}, {
		"employer": "Terakoya group",
		"title": "Instructor",
		"dates": "2007-2012",
		"description": "taught 6 - 18 years kids"
	}
	]
};

var projects = {
	"projects": [{
		"title": "Portfolio Site",
		"dates": "June 2016",
		"description": "Single page, responsive website.",
		"images": "img.jpg"
	}, {
		"title": "Styling spritz landing page",
		"dates": "February 2015",
		"description": "Landing page built to sell the styling spirits through affiliate links.",
		"images": "img.jpg"
	}]
};

var education = {
	"schools": [{
		"name": "Conestoga College",
		"location": "Kitchener,ON,Canada",
		"major": "General Business",
		"YearofGraducation": "2007",
		"URL": "http://www.conestogac.on.ca/index.jsp"
	}, {
		"name": "Japan College of Foreigh Languages",
		"location": "Tokyo,Japan",
		"major": "Canada",
		"YearofGraducation": "2004",
		"URL": "http://www.jcfl.ac.jp/"
	}],
	"onlineCourses": [{
		"title": "front end nanodegree",
		"school": "Udacity",
		"dates": "may 2016 - present",
		"URL": "https://www.udacity.com/"
	}
	]
};

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
};

function displaywork(){
for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	
}
};

displaywork();

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageX;

	logClicks(x,y);
});

function locationizer(work_obj) {
     var locationArray = [];
    for (job in work_obj.jobs){
       var newLocation = work_obj.jobs[job].location;
       locationArray.push(newLocation);
    }
    return locationArray;
}


// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

// $(internationalizeButton).click(function inName(){
//      var currentname = bio.name;
// 	var names = currentname.split(" ");
// 	names[1] = names[1].toUpperCase();
// 	var internationalname = HTMLheaderName.replace("%data%",internationalname);
// });



function inName(name){
	name = name.trim().split(" ");
	console.log(name);
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
};

$("#main").append(internationalizeButton);

projects.display = function(){
	for(project in projects.projects){
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

	if(projects.projects[project].images.length > 0){
		for (image in projects.projects[project].images){
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
}

}
projects.display(); // This executes the above function

//you want to see a map? here's a map.
$("#mapDiv").append(googleMap);


