//This Page Handles The Pages You See....
//=====================================
//DEPENDENCIES
//=====================================
var path = require("path");

//=====================================
//ROUTING
//=====================================

module.exports = function(app){
	//GET route to /survey: display survey page
	//gets the survey page with /survey endpoint
	app.get("/survey", function(req,res){
		res.sendFile(path.join(__dirname,"/../public/survey.html"))
	});
	//Default USE route goes to home
	app.use(function(req, res) {
	   res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
	
};