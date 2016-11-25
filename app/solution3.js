var app = {
fizzBuzz: function (numb) {
  if (numb % 3 === 0 && number % 5 === 0 ) {
    return 'FizzBuzz'; 
  } else if (numb % 3 === 0) {
    return 'Fizz';
  }
  else if (numb % 5 === 0) {
    return 'Buzz';
  }
  else {
    return numb;
  }
  
}
}
module.exports = app; 


/*(function() {

var fizzBuzz = function (i) { 
	if (i % 15 == 0)
	{
		return "FizzBuzz";
	}
	else if((i % 3) == 0)
	{
		return "Fizz";
	}
	else if((i % 5) == 0)
	{
		return "Buzz";
	}
	else
	{
		return i;
	}
}

module.exports = {
	'fizzBuzz': fizzBuzz
}
})();/*