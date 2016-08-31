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
	"biopic":"img.jpg",
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
}

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
		"city": "Kitchener,ON,Canada",
		"major": "General Business",
		"YearofGraducation": "2007",
		"URL": "http://www.conestogac.on.ca/index.jsp"
	}, {
		"name": "Japan College of Foreigh Languages",
		"city": "Tokyo,Japan",
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

for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
}

for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
}

myObj = {'country1':'Germany', 'country2':'Argentina'};
for (key in work.jobs){
    if (work.jobs.hasOwnProperty(key)) {
        console.log(work.jobs[key]);
    }
}

