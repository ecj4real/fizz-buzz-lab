module.exports = {
	fizzBuzz: function(number) {
		var output = ""
		if (number % 3 == 0)
			output = output + "Fizz";
		if (number % 5 == 0)
			output = output + "Buzz";
		if (number % 3 != 0 && number % 5 != 0)
			output = number;

		return output;
	}
}