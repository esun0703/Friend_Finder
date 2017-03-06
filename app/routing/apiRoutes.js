//Require Data
//../data/friends
var friendData = require("../data/friends")

//Routing
module.exports = function(app){
	app.get("/api/friends", function(req,res){
		res.json(friendData);
	});
	// Get requests
	// 	GET route: "/api/friends": display a JSON of all possible
	// post requests
	// 	POST "/api/friends" handle incoming survey results
	app.post("/api/friends", function(req,res){
		friendData.push(req.body);
		res.json(true);
	});
}


