

function convertFtoC(fTemp) {
	var fTemp = (fTemp - 32) * (5/9);
	return fTemp;
};

$('#fahrenheit_to_celsius').on('click', function() {
	var typedTemp = $('#temperature').val();
	typedTemp = parseFloat(typedTemp);
	var resultTemp = convertFtoC(typedTemp);
console.log(resultTemp);
$('#result').html(resultTemp);

});

//I thought I was going in the right direction here to but every 
//time i add this in, it breaks everything. 

//var errorMessage = 'Please enter a value.';


//if (!isNaN(typedTemp)) {
	//$('#result').html(typedTemp + "°F = " + resultTemp + "°C");
	//} else { 
	//$('#temperature').addClass('error');
	//$('.errormessage').fadeIn().html(errorMessage);
//});

function convertCtoF(cTemp) {
	var cTemp = (cTemp * 9/5) + 32; 
	return cTemp;
};

$('#celsius_to_fahrenheit').on('click', function() {
	var typedTemp = $('#temperature').val();
	typedTemp = parseFloat(typedTemp);
	var resultTemp = convertCtoF(typedTemp);
console.log(resultTemp);
$('#result').html(resultTemp);
	
});





  
