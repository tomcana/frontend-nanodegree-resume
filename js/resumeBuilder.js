var data = '%data%';

var bio = {
    "name": "Tomomi Shiba",
    "role": "web developer",
    "contacts": {
        "email": "XXX@gmail.com",
        "mobile": "XXX-XXXX-XXXX",
        "github": "tomcana",
        "location": "Matsuyama city,Ehime Japan"
    },
    "biopic": "./images/profile_pic.jpg",
    "welcomeMessage": "welcome to my online resume!",
    "skills": ["html", "css", "Javascript", "jQuery"]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedBlog = HTMLblog.replace(data, bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    var mybiopic = HTMLbioPic.replace(data, bio.biopic);
    $("#header").append(mybiopic);
    var mymsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(mymsg);

    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace(data, skill);
            $("#skills").append(formattedSkill);
        });
    }
};

bio.display();

var work = {
    "jobs": [{
        "employer": "Eyemovic",
        "title": "Website operation staff",
        "dates": "August 2013 - present",
        "description": "Design and markup customers’ websites.  In charge of updating websites(hotel, gymnastics organization etc).",
        "location": "Matsuyama,Ehime,Japan"
    }, {
        "employer": "Terakoya group",
        "title": "Instructor",
        "dates": "2007-2012",
        "description": "taught 6 - 18 years kids",
        "location": "Matsuyama,Ehime,Japan"
    }]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
        var formattedTitle = HTMLworkTitle.replace(data, job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace(data, job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace(data, job.description);
        $(".work-entry:last").append(formattedDescription);

    });
};

work.display();

var education = {
    "schools": [{
        "name": "Conestoga College",
        "location": "Kitchener,ON,Canada",
        "majors": "General Business",
        "degree": "Diploma",
        "dates": "2007",
        "url": "http://www.conestogac.on.ca/index.jsp"
    }, {
        "name": "Japan College of Foreigh Languages",
        "location": "Tokyo,Japan",
        "majors": "Canada Study",
        "degree": "Diploma",
        "dates": "2004",
        "url": "http://www.jcfl.ac.jp/"
    }],
    "onlineCourses": [{
        "title": "front end nanodegree",
        "school": "Udacity",
        "dates": "may 2016 - present",
        "url": "https://www.udacity.com/"
    }]
};

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace(data, school.name);
        var formattedschoolDegree = HTMLschoolDegree.replace(data, school.degree);
        var formattedschoolDates = HTMLschoolDates.replace(data, school.dates);
        var formattedschoolLocation = HTMLschoolLocation.replace(data, school.location);
        var formattedschoolMajor = HTMLschoolMajor.replace(data, school.majors);
        var formattedEducationTitle = formattedschoolName + formattedschoolDegree;
        $(".education-entry:last").append(formattedEducationTitle);
        $(".education-entry:last").append(formattedschoolDates);
        $(".education-entry:last").append(formattedschoolLocation);
        $(".education-entry:last").append(formattedschoolMajor);
    });
    education.onlineCourses.forEach(function(onlineCourse) {
        $("#education").append(HTMLschoolStart);
        var formattedonlineTitle = HTMLonlineTitle.replace(data, onlineCourse.title);
        var formattedonlineSchool = HTMLonlineSchool.replace(data, onlineCourse.school);
        var formattedonlineDates = HTMLonlineDates.replace(data, onlineCourse.dates);
        var formattedonlineURL = HTMLonlineURL.replace(data, onlineCourse.url);
        var formattedonlineHead = formattedonlineTitle + formattedonlineSchool;
        $(".education-entry:last").append(HTMLonlineClasses);
        $(".education-entry:last").append(formattedonlineHead);
        $(".education-entry:last").append(formattedonlineDates);
        $(".education-entry:last").append(formattedonlineURL);
    });
};

education.display();

var projects = {
    "projects": [{
        "title": "Portfolio Site",
        "url": "http://howtowedding.xsrv.jp/portfolio/",
        "dates": "June 2016",
        "description": "Single page, responsive website.",
        "images": ["./images/portfolio_img01.jpg", "./images/portfolio_img02.jpg"]

    }, {
        "title": "Styling spritz landing page",
        "url": "http://howtowedding.xsrv.jp/haru/",
        "dates": "February 2015",
        "description": "Landing page built to sell the styling spirits through affiliate links.",
        "images": ["./images/haru_img01.jpg", "./images/haru_img02.jpg"]
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace(data, project.title);
        var linkedTitle = formattedTitle.replace("#", project.url);
        $(".project-entry:last").append(linkedTitle);

        var formattedDates = HTMLprojectDates.replace(data, project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace(data, project.description);
        $(".project-entry:last").append(formattedDescription);

        project.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace(data, image);
            $(".project-entry:last").append(formattedImage);
        });
    });

};

projects.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageX;

    logClicks(x, y);
});

function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

$("#mapDiv").append(googleMap);