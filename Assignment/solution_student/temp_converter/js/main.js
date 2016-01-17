var errorMessage = 'Please enter a value';

$('#celsius_to_fahrenheit').on('click', function() {
  var temp = $('#temperature').val();
  temp = parseFloat(temp);
  var convertedTemp = 1.8 * temp + 32;
  console.log(convertedTemp);
  $('#result').html("" + convertedTemp + " Fahrenheit");

  if (!isNaN(temp)) {
      $('#result').html(temp + "°F = " + convertedTemp + "°C");
  } else { 
    $('#temperature').addClass('error');
    $('.errormessage').fadeIn().html(errorMessage);
  }

});

$('#fahrenheit_to_celsius').on('click', function() {
  var temp = $('#temperature').val();
  temp = parseFloat(temp);
  var convertedTemp = (temp - 32) / 1.8;
  console.log(convertedTemp);
  $('#result').html("" + convertedTemp + " Celsius");
});