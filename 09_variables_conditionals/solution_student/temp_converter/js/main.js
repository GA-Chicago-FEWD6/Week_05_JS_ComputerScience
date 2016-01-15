//assign val to input elements
//if click FtoC 
//if CtoF clicked then take value and 
// if no value entered show error message





//user enters value

//user clicks F to C
//T(°C) = (T(°F) - 32) / 1.8
$('#fahrenheit_to_celsius').on('click', function () {
  var temp = $('#temperature').val();


  if (temp == '') {
     //display =
     $('#result').html('Please enter value');
    } else {temp = (temp-32)/1.8;}
  $('#result').html(temp);
});
	//initialVal = get value of input
	//resultVal = use formula F to C to convert initial val to C
	

//if initialVal 
	//display error (bonus)
	//display resultVal in #result

//user clicks C to F
//T(°F) = T(°C) × 1.8 + 32
$('#celsius_to_fahrenheit').on('click', function () {
  var temp = $('#temperature').val();
  temp = parseFloat(temp);
  temp = (temp*1.8)+32;
  $('#result').html(temp);

});

//  initialVal = get val of input
//  resultVal = use formula of C to F to convert initialVal to F 
//  display resultVAl in #result 

//(look up formula how to convert)

//bonus
//display error if input is blank


// When the user clicks on #submit
// $('#submit').on('click', function () {
//   // get number 1 val (and store as var)
//   var num1 = $('#num1').val();
//   num1 = parseFloat(num1);
//   // get number 2 val (and store as var)
//   var num2 = $('#num2').val();
//   num2 = parseFloat(num2);
  
//   //console.log(num1, num2);
//    if (num1 == num2) {
//      //display =
//      $('#comparison').html('=');
//      // if num 1 > numebr 2
//     } else if (num1 > num2) {
//     $('#comparison').html('>');
//     } else if (num1 < num2) {
//     $('#comparison').html('<');
//     }
// });

