function slideDown(elem) {
	elem.style.maxHeight = '1000px';
	
	elem.style.opacity   = '1';
}


function slideUp(elem) {
	elem.style.maxHeight = '0';
	once( 10, function () {
		elem.style.opacity = '0';
	});
}


function once (seconds, callback) {
	var counter = 0;
	var time = window.setInterval( function () {
		counter++;
		if ( counter >= seconds ) {
			callback();
			window.clearInterval( time );
		}
	}, 1000 );
}
