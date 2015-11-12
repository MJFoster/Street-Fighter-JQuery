// *************************************************
// JS & Jquery code for ...
//    Street-Fighter-JQuery webpage.
// *************************************************
$(document).ready(function() {
	// .show() & .hide() Multiple screens display w/audio
	introSF();
	playSFGame();
});  // END OF $(document).ready()


function playSFSound() {
  $('#SF-theme-song')[0].volume = 0.3;
  $('#SF-theme-song')[0].play();
}  // END OF PlaySFSound()


function playCool() {
	$('#SF-theme-song')[0].pause();
	$('#cool-song')[0].play();
}  // END OF playCool()


// Play Hadouken audio
function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}  // END OF playHadouken()


function introSF() {
	playSFSound();
	// Fade In/Out intro screens
	$('.sf-logo').fadeIn(3500, function() {
	    $(this).fadeOut(1000, function() {
	      $('.brought-by').fadeIn(1500, function() {
	      	$(this).fadeOut(1000, function() {
	      		$('.jquery-logo').fadeIn(1500, function() {
	      			$(this).fadeOut(1500, function() {
	      				$('.how-to-text').fadeIn(1000);
      				});
  				});
			});
		});
    });
});
}  // END OF introSF()



function playSFGame() {
	// All methods bound to '.ryu-container' are 'chained' together below!
	// Change pose to "ready"
	$('.ryu-container').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	// Change pose to "still"
	.mouseleave(function() {  // Chained event handler
		$('.ryu-throwing').hide();
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	// Play audio & throw hadouken
	.mousedown(function() {  // Chained event handler
		// Play audio
		playHadouken();

		// Display ryu-throwing image
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();

		$('.hadouken').append();    // To animates the hadouken itself using 'chained' methods!
		$('.hadouken').show().finish().animate(
			{left: "1020px"},
			500,
			function() {  // function to run at animation completion
				$(this).hide();  // hide() 'this' selector
				$(this).css("left", "620px");  // style 'this' selector back to start position.
			});
	})  // END OF mousedown()

	// Change pose to 'ready'
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	// Watch for keydown() of 'x' key, then playCool() + pose 'cool'
	// Audio changes.  Both 'key' events are chained and bound to 'document' now!
	$(document).keydown(function(e) {
		if(e.keyCode == 88) {
			playCool();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
		};
	})

	// Watch for keyup(), then pose still.
	.keyup(function(e) {
		$('#cool-song')[0].pause();
      	$('#cool-song')[0].load();
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	});
}  // END OF playSFGame()