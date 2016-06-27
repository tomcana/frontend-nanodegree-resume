var formattedName = HTMLheaderName.replace("%data%","Tomomi Shiba");

var role ="Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);