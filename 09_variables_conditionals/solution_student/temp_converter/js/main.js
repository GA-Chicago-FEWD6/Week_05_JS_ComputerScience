var input = $('#temperature').val();

$('#fahrenheit_to_celsius').on('click', function () {
	var result = (input - 32) / 1.8;
	$('#result').html(result);
	});

$('#celsius_to_fahrenheit').on('click', function () {
	var result = (1.8 * input) + 32;
	$('#result').html(result);
});

