const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = numbers => numbers.reduce((suma, a) => suma + a, 0);

const multiply = numbers => numbers.reduce((mult, a) => mult * a, 1);

const power = (a, b) => a ** b;

const factorial = n => {
	let fact = 1;
  for (let i = 1; i <= n; i++)
    fact *= i;
  return fact;
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
