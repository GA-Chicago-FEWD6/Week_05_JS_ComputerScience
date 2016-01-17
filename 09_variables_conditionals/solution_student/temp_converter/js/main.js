$('#fahrenheit_to_celsius').on('click', function() {
	var inputTemp = $('#temperature').val();
	inputTemp = parseFloat(inputTemp);
	var cTemp = inputTemp - 32 / 1.8; 
	$('#result').html(cTemp + ' °C ');


		if (cTemp > 10) {
			$('body').addClass('hot');
			$('body').removeClass('cold');
	} else if (cTemp < 10) {
			$('body').addClass('cold');
			$('body').removeClass('hot');
	// I couldn't figure this part out. Was I on the right track? 
	//} else if (inputTemp == '') {
	//		$('#result').html('Please enter a temp');
	//		$('#result').addClass('error');
	//		$('body').removeClass('hot, cold');
	}
});


$('#celsius_to_fahrenheit').on('click', function () {
	var inputTemp = $('#temperature').val();
	inputTemp = parseFloat(inputTemp);
	var fTemp = 1.8 * inputTemp + 32;
	$('#result').html(fTemp + ' °F ');


		if (fTemp > 50) {
			$('body').addClass('hot');
			$('body').removeClass('cold');
	} else if (fTemp < 50) {
			$('body').addClass('cold');
			$('body').removeClass('hot');
}
});

