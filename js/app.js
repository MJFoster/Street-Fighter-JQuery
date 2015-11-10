// *************************************************
// JS & Jquery code for ...
//    Street-Fighter-JQuery webpage.
// *************************************************
$(document).ready(function() {
	// .show() & .hide() Multiple screens display w/audio
	// CODE NOT YET IMPLEMENTED ...

	// Using mouseleave(), change pose to "ready"
	$('.ryu-container').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	// Using mouseleave(), change pose to "still"
	.mouseleave(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});


	// Play audio for Hadouken
	function playHadouken () {
	  $('#hadouken-sound')[0].volume = 0.5;
	  $('#hadouken-sound')[0].load();
	  $('#hadouken-sound')[0].play();
	}


	// Upon mousedown(), play audio & throw hadouken
	$('.ryu-container').mousedown(function () {
		
		// Play audio
		playHadouken();

		// Display ryu-throwing image
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();

		

		$('.hadouken').append();
		// To animate the hadouken itself,
		// CHAIN show(), animate(), & finish() methods!
		$('.hadouken').show().finish().animate(
			{left: "1020px"},
			500,
			function() {
				$(this).hide();  // hide() 'this' selector
				$(this).css("left", "620px");  // style 'this' selector back to start position.
			});
	});


	// Upon mouseup(), start over
	$('.ryu-container').mouseup(function () {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});

// Watch for keydown() of 'x' key, then poseCool()
// $(document).keydown(function(down-event) {
// 	console.log(down-event, down-event.which);
// 	if(down-event.which == 88) {
// 		$('.ryu-still').hide();
// 		$('.ryu-ready').hide();
// 		$('.ryu-throwing').hide();
// 		$('.ryu-cool').show();
// 	};
// });


// Watch for keyup(), then poseCool()
// $(document).keyup(function(up-event) {
// 	$('.ryu-cool').hide();
// 	$('.ryu-still').show();
// });