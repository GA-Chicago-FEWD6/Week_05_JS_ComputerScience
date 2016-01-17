

// $('#fahrenheit_to_celsius').on('click', function () {
// 	var inputVal = $('#temperature').val();
// 	var resultVal = (inputVal - 32) / 1.8;
// 	$('#result').html(resultVal);

// 	if (resultVal > 25) {
// 		$('body').addClass('hot');
// 	} else if (resultVal > 10 && resultVal < 25) {
// 		$('body').addClass('warm');
// 	} else {
// 		$('body').addClass('cold');
// 	}
	
// });

// $('#celsius_to_fahrenheit').on('click', function () {
// 	var inputVal = $('#temperature').val();
// 	var resultVal = (inputVal * 1.8) + 32;
// 	$('#result').html(resultVal);

// 	if (resultVal > 80) {
// 		$('body').addClass('hot');
// 	} else if (resultVal > 50 && resultVal < 80) {
// 		$('body').addClass('warm');
// 	} else {
// 		$('body').addClass('cold');
// 	}
// });

// function errorStyle (BLANK){
// 	//add styles
// 	return ;
// }

// $('')on('click', function () {
// 	errorStyle
// }



$('#fahrenheit_to_celsius').on('click', function () {
    $('body').removeClass('cold warm hot');
    $('#result').removeClass('error-message');
    $('#temperature').removeClass('error');
    var inputVal = $('#temperature').val();
    var resultVal = ((inputVal - 32) / 1.8);
    var output = inputVal + '°F' + ' = ' + resultVal + '°C'
    $('#result').html(output);


    if (inputVal == "") {
        $('#temperature').addClass('error');
        $('#result').html('Please enter a value!').addClass('error-message').show('display');
    } else if (resultVal > 25) {
        $('body').addClass('hot');
    } else if (resultVal > 10 && resultVal < 25) {
        $('body').addClass('warm');
    } else {
        $('body').addClass('cold');
    }
});

$('#celsius_to_fahrenheit').on('click', function () {
    $('body').removeClass('cold warm hot');
    $('#result').removeClass('error-message');
    $('#temperature').removeClass('error');
    var inputVal = $('#temperature').val();
    var resultVal = ((inputVal * 1.8) + 32);
    var output = inputVal + '°C' + ' = ' + resultVal + '°F'
    $('#result').html(output);

    if (inputVal == "") {
        $('#temperature').addClass('error');
        $('#result').html('Please enter a value!').addClass('error-message').show('display');
    } else if (resultVal > 80) {
        $('body').addClass('hot');
    } else if (resultVal > 50 && resultVal < 80) {
        $('body').addClass('warm');
    } else {
        $('body').addClass('cold');
    }    
});


