//Require Data
//../data/friends
var friendData = require("../data/friends");


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
		var matchedFriend = {
			name: "",
			photo: "",
			difference: 10000
		};
		// console.log(req.body);
		//user inputs
		var userDetails = req.body;
		var userScores = userDetails.scores;

		// console.log(userScores);

		//This Is Where User Scores Are Calculated
		
		for(let i = 0; i < friendData.length; i++){
		var scoreDifference = 0;
			// console.log(friendData[i]);

			//so why 9? still trying to figure it out
			for (let j = 0; j < (friendData[i].scores).length; j++) {
                scoreDifference += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(userDetails.scores[j])));
            }

            console.log(scoreDifference);
			// console.log(scoreDifference);

			 if (scoreDifference < matchedFriend.difference) {
                matchedFriend.name = friendData[i].name;
                matchedFriend.photo = friendData[i].photo;
                matchedFriend.difference = scoreDifference;
            }
		}

		console.log(userDetails);
		console.log(matchedFriend);
		//Adds Friend
		friendData.push(userDetails);
		res.json(matchedFriend);
	});
}


