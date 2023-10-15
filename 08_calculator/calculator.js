const add = function(n1, n2) {
	return n1 + n2
};

const subtract = function(n1, n2) {
	return n1 - n2
};

const sum = function(array) {
  
  let sum = 0;

  array.forEach(i => sum += i);

  return sum;

};

const multiply = function(array) {

  return array.reduce((total, num) => total * num);

};

const power = function(n1, n2) {
	
  return n1 ** n2;

};

const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
  
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
