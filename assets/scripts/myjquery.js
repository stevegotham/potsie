$(document).ready(function() {

	$(".dice").click(function() {
		if (counter > 0) {
		$(this).toggleClass('selected');
		}
	});

	$('#roll').click(function() {
		counter += 1;
		$('.dice').each(function() {
			if (!$(this).hasClass("selected") && counter < 4) {
				$(this).text(roll());
				$(this).effect("bounce",{times: 3}, 300);
			};
		});
	});

	$('#reset').click(function() {
		reset();
	});

	$('.btn').hover(function() {
		$(this).toggleClass('highlighted');
	});

});