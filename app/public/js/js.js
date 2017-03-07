$(document).ready(function() {
        $('select').material_select();
        $('.modal').modal({
        	startingTop: '4%', // Starting top style attribute
      		endingTop: '4%', // Ending top style attribute	
          	ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
          	},
        });
});

