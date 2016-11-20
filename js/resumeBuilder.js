var formattedName = HTMLheaderName.replace("%data%","Tomomi Shiba");
var role ="Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	"name":"Tomomi Shiba",
	"role":"web developer",
	"contacts":{
		"email":"XXX@gmail.com",
		"mobile":"XXX-XXXX-XXXX",
		"github":"tomcana",
		"location":"Matsuyama city,Ehime Japan"
	},
	"biopic":"./images/profile_pic.jpg",
	"welcomeMessage":"WELCOME!",
	"skills":["awesomeness","programming","teaching","js"]
};

function displaycontact(){
for(contact in bio.contacts){
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedBlog = HTMLblog.replace("%data%",bio.contacts.blog);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation); //joint jQuery feature to add contacts to header and footer

}
};

displaycontact();

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



var education = {
	"schools": [{
		"name": "Conestoga College",
		"location": "Kitchener,ON,Canada",
		"major": "General Business",
		"degree": "Diploma",
		"YearofGraducation": "2007",
		"URL": "http://www.conestogac.on.ca/index.jsp"
	}, {
		"name": "Japan College of Foreigh Languages",
		"location": "Tokyo,Japan",
		"major": "Canada Study",
		"degree": "Diploma",
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

var mybiopic = HTMLbioPic.replace("%data%",bio.biopic);
$("#header").prepend(mybiopic);



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
}

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
}

displaywork();

function displayeducation(){
for(school in education.schools){
	$("#education").append(HTMLschoolStart);
	var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
	var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
	var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[school].YearofGraducation);
	var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
	var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
	var formattedEducationTitle = formattedschoolName + formattedschoolDegree;
	$(".education-entry:last").append(formattedEducationTitle);
	$(".education-entry:last").append(formattedschoolDates);
	$(".education-entry:last").append(formattedschoolLocation);
	$(".education-entry:last").append(formattedschoolMajor);
}
}

displayeducation();


function displayonlineClasses(){
for(onlineCourse in education.onlineCourses){
	$("#education").append(HTMLschoolStart);
	var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
	var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
	var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
	var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].URL);
	var formattedonlineHead = formattedonlineTitle + formattedonlineSchool;
	$(".education-entry:last").append(HTMLonlineClasses);
	$(".education-entry:last").append(formattedonlineHead);
	$(".education-entry:last").append(formattedonlineDates);
	$(".education-entry:last").append(formattedonlineURL);
}
}

displayonlineClasses();

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

var projects = {
	"projects": [{
		"title": "Portfolio Site",
		"url": "http://howtowedding.xsrv.jp/portfolio/",
		"dates": "June 2016",
		"description": "Single page, responsive website.",
		"images": ["./images/portfolio_img01.jpg","./images/portfolio_img02.jpg"]

	}, {
		"title": "Styling spritz landing page",
		"url": "http://howtowedding.xsrv.jp/haru/",
		"dates": "February 2015",
		"description": "Landing page built to sell the styling spirits through affiliate links.",
		"images": ["./images/haru_img01.jpg","./images/haru_img02.jpg"]
	}]
};

projects.display = function(){
	for(project in projects.projects){
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
	var linkedTitle = formattedTitle.replace("#",projects.projects[project].url);
	$(".project-entry:last").append(linkedTitle);

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


