# PROJECT NAME:  Street-Fighter-JQuery
# CONTRIBUTOR(S):  MaryJo Foster
# 
# PREVIEW HERE: http://mjfoster.github.io/StreetFighter-Example-Event-Handler/
#
# Requirements
# 	Simulate the 'Street Fighter' themed interactive webpage.
#	Demonstrate the following features
#	- Style webpage with images and specifications provided.
#	- Simulated animation of both still and animated gifs
#	- Use of multiple event handlers
#		* hide and show for different gifs
#		* Mouse enter, leave, down, and up while over areas on screen
#		* Keyup and Keydown with specific key recognition
#	- Music play, stop, and continuous play based on events
# 

HTML & CSS SPECS
 	- Black background
 	- Center container w/white background
	- Fighter images on left of container with left-side padding, vertically center within white container.

 ALGORITHM
	- Upon load, music starts and plays thru to end once
	- Street Fighter logo image displays "slowly"
	- "Brought to you by" text displays "slowly"
	- "JQuery" logo displays "slowly"
	- Fighter image and instructional text displays
	- MOUSE event handlers wait ….Upon each event, do the following:
	      * Mouse flys over fighter image
	            + .hide() current pose
	            + .show() 'ready' pose

	      * Mouse leaves fighter image
	            + .hide() current pose
	            + .show() 'still' pose

	      * Mouse clicks on fighter
	            + Upon .mousedown()
	               - Change image to be " ryu-throwing-hadouken"
	               - Play sound clip
	               - Start the hadouken gif displaying across the screen
	               - Move "hadouken" gif to a different horizontal position across the screen as the punch is thrown.
	            + Upon .mouseup()
	               - Fighter returns to 'still' pose.

	- KEYBOARD event handler
	      * If .keydown() VALUE = "x" or "X"
	            + Fighter changes to 'cool' pose. 
	            + NEW music plays and repeats until key is released.
	      * If .keyup()
	            + Music stops
	            + Fighter returns to 'still' pose.
