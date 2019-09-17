/*
License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Ian Lunn simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.ianlunn.co.uk/.

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

$(document).ready(function() { //when the document is ready...


	//save selectors as variables to increase performance
	var $window = $(window);
	var $introBG = $('#intro');
	var $venueBG = $('#venue');
	var $scheduleBG = $('#sponsors-list');
	var $speakersBG = $('#speakers');
	var $aboutBG = $('#about');
	
	var windowHeight = $window.height(); //get the height of the window
	
	
	//apply the class "inview" to a section that is in the viewport
	$('#intro, #venue, #schedule, #about, #speakers, #sponsors-list').bind('inview', function (event, visible) {
		if (visible == true) {
			$(this).addClass("inview");
		} else {
			$(this).removeClass("inview");
		}
	});		
	
	//function that is called for every pixel the user scrolls. Determines the position of the background
	/*arguments: 
		x = horizontal position of background
		windowHeight = height of the viewport
		pos = position of the scrollbar
		adjuster = adjust the position of the background
		inertia = how fast the background moves in relation to scrolling
	*/
	function newPos(x, windowHeight, pos, adjuster, inertia){
		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
	}
	
	//function to be called whenever the window is scrolled or resized
	function Move(){ 
		var pos = $window.scrollTop(); //position of the scrollbar

		//if the intro section is in view...
		if($introBG.hasClass("inview")){
			//call the newPos function and change the background position for CSS3 multiple backgrounds
			$introBG.css({'backgroundPosition': 
			newPos(150, windowHeight, pos, 800, -0.4) + ", " + 		// Hexagons 1 Grey
			newPos(80, windowHeight, pos, 0, 0.6) + ", " + 			// Hexagons 2 Blue
			newPos(-100, windowHeight, pos, 200, 0.5) + ", " + 		// Hexagons 3 Grey
			newPos(400, windowHeight, pos, 300, 0.3) + ", " + 		// Hexagons 4 Orange
			newPos(50, windowHeight, pos, 300, -0.8) + ", " +		// Single Hex 1
			newPos(140, windowHeight, pos, 300, -0.4)				// Single Hex 2
			});
		}
		
		//if the venue section is in view...
		if($venueBG.hasClass("inview")){
			//call the newPos function and change the background position for CSS3 multiple backgrounds
			$venueBG.css({'backgroundPosition': 
			newPos(-20, windowHeight, pos, 6600, 0.2) + ", " + 		// Head 1
			newPos(125, windowHeight, pos, 5800, 0.3) + ", " + 		// Head 2
			newPos(50, windowHeight, pos, 4000, -0.1)				// Business School
			});
		}
		
		//if the schedule section is in view...
		if($scheduleBG.hasClass("inview")){
			//call the newPos function and change the background position for CSS3 multiple backgrounds
			$scheduleBG.css({'backgroundPosition': 
			newPos(150, windowHeight, pos, 800, -0.4) + ", " + 		// Hexagons 1 Grey
			newPos(80, windowHeight, pos, 400, 0.6) + ", " + 		// Hexagons 2 Blue
			newPos(20, windowHeight, pos, 200, 0.9) + ", " + 		// Hexagons 3 Grey
			newPos(400, windowHeight, pos, 300, 0.2) + ", " + 		// Hexagons 4 Orange
			newPos(50, windowHeight, pos, 300, -0.8)				// Single Hex 1
			});
		}
		
		//if the about section is in view...
		if($aboutBG.hasClass("inview")){
			//call the newPos function and change the background position for CSS3 multiple backgrounds
			$aboutBG.css({'backgroundPosition': 
			newPos(150, windowHeight, pos, 800, -0.4) + ", " + 		// Hexagons 1 Grey
			newPos(80, windowHeight, pos, 0, 0.6) + ", " + 			// Hexagons 2 Blue
			newPos(-100, windowHeight, pos, 200, 0.5) + ", " + 		// Hexagons 3 Grey
			newPos(400, windowHeight, pos, 300, 0.3)
			});
		}
		
		//if the speakers section is in view...
		if($speakersBG.hasClass("inview")){
			//call the newPos function and change the background position for CSS3 multiple backgrounds
			$speakersBG.css({'backgroundPosition': 
			newPos(150, windowHeight, pos, 800, -0.4) + ", " + 		// Hexagons 1 Grey
			newPos(80, windowHeight, pos, 0, 0.6) + ", " + 			// Hexagons 2 Blue
			newPos(-100, windowHeight, pos, 200, 0.5) + ", " + 		// Hexagons 3 Grey
			newPos(400, windowHeight, pos, 300, 0.3)
			});
		}
	}
		
	$window.resize(function(){ //if the user resizes the window...
		Move(); //move the background images in relation to the movement of the scrollbar
	});		
	
	$window.bind('scroll', function(){ //when the user is scrolling...
		Move(); //move the background images in relation to the movement of the scrollbar
	});
	
});