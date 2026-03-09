const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	let sum = nums.reduce((total, current) => total + current, 0);

  return sum;
};

const multiply = function(nums) {
  let sum = 0;
  nums.forEach(num => sum *= num);

  return sum;
};

const power = function(base, exponent) {
	return base ^ exponent;
};

const factorial = function() {
	
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
