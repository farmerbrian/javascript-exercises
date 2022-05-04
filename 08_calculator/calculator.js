const add = function(a,b) {
  let total = (a + b);
  return total;
};

const subtract = function(a,b) {
	let total = (a - b);
  return total;
};


const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1)

};

const power = function(a,b) {
  let total = (a ** b);
  return total;
	
};

const factorial = function(number) {
	if (number === 0 || number === 1)
    return 1;

  for (var i = number - 1; i >= 1; i--) {
    number = number * i;
  }
  return number;
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
