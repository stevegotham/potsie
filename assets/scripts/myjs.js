var counter = 0;
var roll = function() {
	return Math.floor(Math.random() * 6 + 1);
};

var reset = function() {
	$('.dice').removeClass('selected');
	$('.dice').text('');
	counter = 0;
};