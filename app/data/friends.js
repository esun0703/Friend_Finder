// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


var friendsArray =[
	{
	  "name":"Harry Potter",
	  "photo":"https://img.buzzfeed.com/buzzfeed-static/static/2015-11/20/15/enhanced/webdr04/grid-cell-1182-1448053182-2.jpg",
	  "scores":[
	     3,
	     2,
	     5,
	     4,
	     5,
	     2,
	     1,
	     5,
	     2,
	     1
	   ]
	},
	{
	  "name":"Severus Snape",
	  "photo":"http://vignette4.wikia.nocookie.net/harrypotterfanon/images/9/9a/Severus_Snape_as_Headmaster.jpg/revision/latest?cb=20160226021258",
	  "scores":[
	     5,
	     1,
	     4,
	     4,
	     5,
	     1,
	     2,
	     5,
	     4,
	     1
	   ]
	},

	{
	  "name":"Hermione Granger",
	  "photo":"http://newscult.com/wp-content/uploads/2015/12/Hermione-Granger-hermione-granger-20053428-800-478.jpg",
	  "scores":[
	     5,
	     2,
	     2,
	     5,
	     5,
	     1,
	     3,
	     2,
	     5,
	     2
	   ]
	},

];
// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;