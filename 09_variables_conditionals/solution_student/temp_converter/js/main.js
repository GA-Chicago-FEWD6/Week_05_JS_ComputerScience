// var input = $('#temperature').val();

$('#fahrenheit_to_celsius').on('click', function () {
	var input = $('#temperature').val();
	changebackground(input);
	var result = (input - 32) / 1.8;
	$('#result').html(result);
	});

$('#celsius_to_fahrenheit').on('click', function () {
	var input = $('#temperature').val();
	var result = (1.8 * input) + 32;
	$('#result').html(result);
	changebackground(result);

});


function changebackground(temperature) {
$('body').attr('class', '');
if (temperature <= 20) {
	$('body').addClass('freezing');
}else if (temperature > 20 && temperature <= 60) {
	$('body').addClass('bearabletemp');
}else if (temperature > 60 && temperature <= 85) {
	$('body').addClass('perfect');
}else if (temperature > 85) {
	$('body').addClass('hothothot');
}
}