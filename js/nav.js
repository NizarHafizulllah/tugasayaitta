/**
 * The nav stuff
 */
(function( window ){
	
	'use strict';

	var body = document.body,
		mask = document.createElement("div"),
		toggleSlideRight = document.querySelector( ".toggle-slide-right" ),
		slideMenuRight = document.querySelector( ".slide-menu-right" ),
		toggleSlideRight2 = document.querySelector( ".toggle-slide-right2" ),
		slideMenuRight2 = document.querySelector( ".slide-menu-right2" ),
		toggleSlideRight3 = document.querySelector( ".toggle-slide-right3" ),
		slideMenuRight3 = document.querySelector( ".slide-menu-right3" ),
		toggleSlideRight4 = document.querySelector( ".toggle-slide-right4" ),
		slideMenuRight4 = document.querySelector( ".slide-menu-right4" ),
		toggleSlideRight5 = document.querySelector( ".toggle-slide-right5" ),
		slideMenuRight5 = document.querySelector( ".slide-menu-right5" ),
		toggleSlideRight6 = document.querySelector( ".toggle-slide-right6" ),
		slideMenuRight6 = document.querySelector( ".slide-menu-right6" ),
		toggleSlideRight7 = document.querySelector( ".toggle-slide-right7" ),
		slideMenuRight7 = document.querySelector( ".slide-menu-right7" ),
        toggleSlideRight8 = document.querySelector( ".toggle-slide-right8" ),
		slideMenuRight8 = document.querySelector( ".slide-menu-right8" ),
        toggleSlideRight9 = document.querySelector( ".toggle-slide-right9" ),
		slideMenuRight9 = document.querySelector( ".slide-menu-right9" ),
        toggleSlideRight10 = document.querySelector( ".toggle-slide-right10" ),
		slideMenuRight10 = document.querySelector( ".slide-menu-right10" ),
		activeNav
	;
	mask.className = "mask";

	/* slide menu right */
	toggleSlideRight.addEventListener( "click", function(){
		classie.add( body, "smr-open" );
		document.body.appendChild(mask);
		activeNav = "smr-open";
	} );
	
	toggleSlideRight2.addEventListener( "click", function(){
		classie.add( body, "smr-open2" );
		document.body.appendChild(mask);
		activeNav = "smr-open2";
	} );
	
	toggleSlideRight3.addEventListener( "click", function(){
		classie.add( body, "smr-open3" );
		document.body.appendChild(mask);
		activeNav = "smr-open3";
	} );
	
	toggleSlideRight4.addEventListener( "click", function(){
		classie.add( body, "smr-open4" );
		document.body.appendChild(mask);
		activeNav = "smr-open4";
	} );
	
	toggleSlideRight5.addEventListener( "click", function(){
		classie.add( body, "smr-open5" );
		document.body.appendChild(mask);
		activeNav = "smr-open5";
	} );
	
	toggleSlideRight6.addEventListener( "click", function(){
		classie.add( body, "smr-open6" );
		document.body.appendChild(mask);
		activeNav = "smr-open6";
	} );
	
	toggleSlideRight7.addEventListener( "click", function(){
		classie.add( body, "smr-open7" );
		document.body.appendChild(mask);
		activeNav = "smr-open7";
	} );
    
    	toggleSlideRight8.addEventListener( "click", function(){
		classie.add( body, "smr-open8" );
		document.body.appendChild(mask);
		activeNav = "smr-open8";
	} );
    
    	toggleSlideRight9.addEventListener( "click", function(){
		classie.add( body, "smr-open9" );
		document.body.appendChild(mask);
		activeNav = "smr-open9";
	} );
    
    	toggleSlideRight10.addEventListener( "click", function(){
		classie.add( body, "smr-open10" );
		document.body.appendChild(mask);
		activeNav = "smr-open10";
	} );

	/* hide active menu if mask is clicked */
	mask.addEventListener( "click", function(){
		classie.remove( body, activeNav );
		activeNav = "";
		document.body.removeChild(mask);
	} );

	/* hide active menu if close menu button is clicked */
	[].slice.call(document.querySelectorAll(".close-menu")).forEach(function(el,i){
		el.addEventListener( "click", function(){
			classie.remove( body, activeNav );
			activeNav = "";
			document.body.removeChild(mask);
		} );
	});


})( window );