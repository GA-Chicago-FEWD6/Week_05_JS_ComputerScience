//assign val to input elements
//if click FtoC 
//if CtoF clicked then take value and 
// if no value entered show error message

//user enters value
//user clicks F to C
//T(°C) = (T(°F) - 32) / 1.8

	//initialVal = get value of input
	//resultVal = use formula F to C to convert initial val to C
	

//if initialVal 
	//display error (bonus)
	//display resultVal in #result

//user clicks C to F
//T(°F) = T(°C) × 1.8 + 32

//  initialVal = get val of input
//  resultVal = use formula of C to F to convert initialVal to F 
//  display resultVAl in #result 

//bonus
//display error if input is blank
//isnan (temp) is not equal to 


$('#fahrenheit_to_celsius').on('click', function () {
  var temp = $('#temperature').val();
  temp = parseFloat(temp);
  var convTemp = (temp - 32) / 1.8;
  if (isNaN(temp)) {
 	console.log(isNaN(temp));
 	$('#result').html('');
 	$('#temperature').addClass('error');
 	$('.error-message').fadeIn('slow').addClass('error');
  	} else {
  	console.log(isNaN(temp));
  	$('.error-message').hide();
 	$('#result').html(temp + ' °F = ' + convTemp + ' °C');
 	                 
  }
});


$('#celsius_to_fahrenheit').on('click', function () {
  var temp = $('#temperature').val();
  temp = parseFloat(temp);
  var convTemp = (temp * 1.8) + 32;
  if (isNaN(temp)) {
  	console.log(isNaN(temp));
  	$('#result').html('');
  	$('#temperature').addClass('error');
 	$('.error-message').fadeIn('slow').addClass('error');
  	} else {
  	console.log(isNaN(temp));
  	$('.error-message').hide();
 	$('#result').html(temp + ' °C = ' + convTemp + ' °F');
	}
});





