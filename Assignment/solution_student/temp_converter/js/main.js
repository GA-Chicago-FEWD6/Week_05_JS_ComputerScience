$("#fahrenheit_to_celsius").on("click", function(){ 
	var temp = $("#temperature").val();
	$("#result").html((temp - 32) / 1.8);
});

$("#celsius_to_fahrenheit").on("click", function(){
	var temp = $("#temperature").val(); 
	$("#result").html(1.8 * temp + 32); 
});

