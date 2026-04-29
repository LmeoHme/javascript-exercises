const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((sum, current) => sum += current, 0);
};

const multiply = function(numbers) {
	return numbers.reduce((sum, current) => sum *= current, 1);
};

const power = function(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
};

const factorial = function(number) {
	if (number === 0 || number === 1) return 1;
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
