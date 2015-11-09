// *************************************************
// JS & Jquery code for ...
//    Street-Fighter-JQuery webpage.
// *************************************************

// Code executes after HTML is completely loaded
$(document).ready(function() {
	// .show() & .hide() Multiple screens display w/audio
	// CODE NOT YET IMPLEMENTED ...

	// Using mouseleave(), change pose to "ready"
	// Using mouseleave(), change pose to "still"
	// Use 'chaining' here to not repeat the CSS selector!
	$('.ryu-container').mouseenter(function() {
		console.log("Mouse Entered!");
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		console.log("Mouse left!");
		$('.ryu-throwing').hide();
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});

	// Upon mousedown(), throw hadouken
	$('.ryu-container').mousedown(function () {
		console.log("Inside 'throwHadouken'");
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		// To animate the hadouken itself,
		// use show(), animate(), & finish() methods!
		$('.hadouken').show().finish().animate(
			{left: "1020px"},
			500,
			function() {
				$(this).hide();  // hide() 'this' selector
				$(this).css("left", "620px");  // style 'this' selector
			});

		// Play HADOUKEN throwing audio
		// CODE NOT YET IMPLEMENTED ...
	});

	// Upon mouseup(), start over
	$('.ryu-container').mouseup(function () {
		console.log("Start over from here ...");
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

});



// Code executes AFTER above code finishes.
// Watch for keydown() of 'x' key, then poseCool()
// $(document).keydown(function(down-event) {
// 	while(down-event.which == "x" || down-event.which == "X") {
// 		// Pose "cool" with animate();
		// Use '<audio>' to play of music.
// 	};
// });
// $(document).keyup(function(up-event) {
	// Stop music
	// Pose 'still' with animate();
// });



// WOULD THIS WORK AS AN 'animate()' function if needed?
// 
// EXAMPLE of call:   $('ryu-throwing').mouseup(changePos('.ryu-still',25,0));
//
// function changePose(pose,x,y) {
	// convert x & y to strings with 'px' appended.
	// xoffset = x + "px";
	// yoffset = y + "px";
	
	// $(pose).show().css("pading-left",xoffset).css("padding-top",yoffset);
// };