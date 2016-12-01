function slideDown(elem) {
	elem.style.maxHeight = '1000px';
	// We're using a timer to set opacity = 0 because setting max-height = 0 doesn't (completely) hide the element.
	elem.style.opacity   = '1';
}

/**
 * Slide element up (like jQuery's slideUp)
 * @param  {Node} elem Element
 * @return {[type]}      [description]
 */
function slideUp(elem) {
	elem.style.maxHeight = '0';
	once( 1, function () {
		elem.style.opacity = '0';
	});
}

/**
 * Call once after timeout
 * @param  {Number}   seconds  Number of seconds to wait
 * @param  {Function} callback Callback function
 */
function once (seconds, callback) {
	var counter = 0;
	var time = window.setInterval( function () {
		counter++;
		if ( counter >= seconds ) {
			callback();
			window.clearInterval( time );
		}
	}, 400 );
}
